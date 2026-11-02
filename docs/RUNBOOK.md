# ModulixSolutions runbook

Run commands from the repository root. The production repository is
`ModulixSolution/ModulixSolutions`; its existing Pages workflow publishes
https://modulixsolutions.com/ on pushes to `main`. The PineFruitDev fork publishes
to a separate subpath and is not the company-domain deployment.

## Install and build

Use Node.js 22, npm and Python 3.9 or newer. CI uses Node 22. Python runs the
built-page checker and the optional local static preview. No credentials or
environment values are needed for local checks. Never put secrets in source,
command output, screenshots or release evidence.

```sh
node --version
npm --version
python3 --version
npm ci --ignore-scripts
npm run lint
npm run type-check
npm run test:coverage
NEXT_TELEMETRY_DISABLED=1 npm run build
npm run check:pages
node scripts/check-byte-budgets.cjs
```

The lockfile controls installation; CI runs `npm ci`. The static export is
written to `out/`, including `/`, `/404`, `/500` and `/contact-confirmed`.
`npm start` expects a Next server and does not serve this export. Do not use the
legacy export script: Next 14 exports as part of the build.

## Local preview

For editing, start the development server:

```sh
NEXT_TELEMETRY_DISABLED=1 npm run dev -- --hostname 127.0.0.1 --port 4317
```

For the built site, stop development, build, and run this in a separate terminal:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

These checks must print `200` while the corresponding server is running:

```sh
curl --fail --silent --output /dev/null --write-out '%{http_code}\n' http://127.0.0.1:4317/
curl --fail --silent --output /dev/null --write-out '%{http_code}\n' http://127.0.0.1:4173/
curl --fail --silent --output /dev/null --write-out '%{http_code}\n' http://127.0.0.1:4173/contact-confirmed/
```

Both servers bind only to loopback. Stop each with Ctrl-C. Python's server does
not emulate response headers or custom 404 routing. Do not send real inquiries
during testing; the browser suite intercepts form requests.

## Browser checks and CI

Install Chromium once, then run the production browser suite:

```sh
npx playwright install chromium
npm run test:smoke
```

`test:smoke` builds first and exercises desktop/mobile navigation, keyboard and
focus behavior, accessibility, motion, responsive layouts, and successful and
failed contact flows. A failed or unreadable response must preserve the inquiry
and must not display confirmed delivery. Error messages remain available until
the next submission; uncertain delivery warns that retrying may send a duplicate.
Application error logs contain fixed event names and optional HTTP status, never
raw errors, provider response text or inquiry fields. No hosted telemetry sink
is configured.

The Tests workflow runs lint, type checking, unit coverage, browser checks and
the built-page checker. Its separate visual job runs `npm run test:visual` on
Linux. Linux owns the committed screenshot baselines; macOS font rendering is
not a reason to replace them. Inspect unexpected screenshots before accepting
changes, using `tests/visual/README.md` for the existing procedure.

Other workflows enforce byte budgets, foundation files and dependency audit
findings against the documented baseline. A passing audit gate does not mean
there are no known vulnerabilities: see `docs/dependencies/AUDIT.md` and
`audit-baseline.json`. Do not suppress new findings or loosen test thresholds to
make a release pass.

## Release and verification

1. Prepare changes in an isolated branch and open a PR against production `main`.
   Preserve existing work and check for overlapping PRs before editing.
2. Record the candidate commit and require its CI checks to pass before merging.
   Local checks alone do not establish hosted CI or production behavior.
3. Merge through normal repository gates. The existing
   `.github/workflows/deploy.yml` builds and deploys `out/` using the built-in
   `GITHUB_TOKEN` and the `github-pages` environment, which allows `main`.
   The workflow supplies the destination's base path automatically.
4. Verify the deployment run and environment status for the exact merge commit.
   Do not use the legacy `npm run deploy` publisher or change DNS, permissions,
   secrets or Pages settings as part of a routine release.
5. Check the actual company domain: home page, images, navigation, narrow menu,
   FAQ, error pages and an intercepted synthetic inquiry through confirmation.
   Record the commit, deployment URL and smoke result separately. Pushed,
   merged, deployed and live-verified are distinct outcomes.

GitHub Pages ignores `public/_headers`. The existing meta CSP and referrer policy
apply there, but header-only controls cannot be guaranteed by this static host.
The README documents that limitation; this runbook does not imply those hosting
controls were enabled.

## Troubleshooting

- **Install fails:** inspect the actual failed step. An isolated npm cache rename
  error (`EEXIST`/`ENOENT` in `_cacache`) occurred on a hosted runner and one retry
  succeeded. Retry an evidenced transient failure once; investigate a recurrence
  rather than repeatedly rerunning. Do not remove the lockfile or force updates.
- **Type, lint, test or build failure:** preserve the first useful diagnostic,
  fix the source or test defect, and rerun the relevant checks. Keep the gate.
- **Built-page check failure:** the message names the source route and missing
  destination, fragment, image or alt attribute. Fix the markup or asset; the
  checker does not inspect external URLs or dynamically inserted content.
- **Visual failure:** compare actual, expected and diff artifacts. Intentional
  layout changes require review; failures from unfinished animation require a
  stable measurement, not a looser accessibility rule or pixel threshold.
- **Port in use:** use a free loopback port and adjust the smoke URL. Do not stop
  an unknown process. Do not run development and production builds concurrently
  in the same checkout because both write `.next/`.
- **Wrong deployed site or missing assets:** verify repository, commit and Pages
  environment URL. The fork uses `/ModulixSolutions`; the company domain uses
  the root. Do not reuse an export built for the other destination.

## Rollback procedure

1. Identify the bad change and last successful deployment by commit and run ID.
   Preserve local work; never reset or force-push shared history.
2. Prepare a revert on a repair branch, reviewing merge parents and limiting the
   diff to the intended reversal. Open a rollback PR against production `main`.
3. Run relevant local checks and require the rollback candidate's CI to pass.
4. An authorized release owner merges the rollback through normal gates. The
   existing Pages workflow deploys it; verify the exact commit and company domain.

This is a recovery procedure, not evidence that a live rollback was performed.
