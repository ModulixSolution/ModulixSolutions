/** Public files and browser redirects need the same prefix as Next's router. */
export function sitePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
