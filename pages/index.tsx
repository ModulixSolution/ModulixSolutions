import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Bot, Network, Users, Target, Palette, TrendingUp, Shield, Settings, MessageCircle, Gamepad2, Star } from 'lucide-react';

import Container from '../components/Container';
import RowContainer from '../components/RowContainer';
import SectionWrapper from '../components/SectionWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card, { SectionContainer } from '../components/Card';
import ContactForm from '../components/ContactForm';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHoveringTestimonials, setIsHoveringTestimonials] = useState(false);
  const [currentBotFeature, setCurrentBotFeature] = useState(0);
  const [isHoveringBotFeature, setIsHoveringBotFeature] = useState(false);

  const botFeatures = [
    {
      title: 'Infinite Customization',
      bullets: [
        'Tailor modules, commands, & UI to your brand.',
        'Build drag-drop automations for custom workflows.',
        'Toggle kid-friendly or 18+ features during setup.'
      ],
      icon: <Palette className="w-12 h-12 text-white" />,
      color: 'blue'
    },
    {
      title: 'Event-Driven Core',
      bullets: [
        'Seamless module communication via event bus.',
        'Add/remove modules without downtime.',
        'Scalable & future-proof for growth.'
      ],
      icon: <Network className="w-12 h-12 text-white" />,
      color: 'purple'
    },
    {
      title: 'Hybrid Profile System',
      bullets: [
        'Global stats (karma) + guild data (XP, badges).',
        'Modules add custom fields like game wins.',
        'Unlock cosmetics for engaging user views.'
      ],
      icon: <Users className="w-12 h-12 text-white" />,
      color: 'blue'
    },
    {
      title: 'Modular Monetization',
      bullets: [
        'Pay per module with bundle discounts.',
        'Free core features; premium unlocks advanced.',
        'Seamless dashboard upgrades via Stripe.'
      ],
      icon: <Settings className="w-12 h-12 text-white" />,
      color: 'purple'
    },
    {
      title: 'AI-Powered Security',
      bullets: [
        'Global alt detection with action tracking.',
        'Auto-lock mods on rapid deletes; interactive alerts.',
        'NLP spam ban & configurable blacklists.'
      ],
      icon: <Shield className="w-12 h-12 text-white" />,
      color: 'blue'
    },
    {
      title: 'Engaging Leveling System',
      bullets: [
        'XP from chats, voice, games, & more.',
        'Custom formulas, streaks, & challenges.',
        'Seasonal leaderboards with karma perks.'
      ],
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      color: 'purple'
    },
    {
      title: 'RNG & Casino Games',
      bullets: [
        'Kid-safe/18+ with odds, bets, & cooldowns.',
        'Rewards like XP/items; integrate economy.',
        'Streaks & leaderboards for fun competition.'
      ],
      icon: <Gamepad2 className="w-12 h-12 text-white" />,
      color: 'blue'
    },
    {
      title: 'Interactive Ticket System',
      bullets: [
        'Private threads with AI tagging/responses.',
        'Auto-appeals from bans with analytics.',
        'Custom categories & satisfaction tracking.'
      ],
      icon: <MessageCircle className="w-12 h-12 text-white" />,
      color: 'purple'
    },
    {
      title: 'Powerful Automations',
      bullets: [
        'Visual WHEN/IF/THEN logic builder.',
        'Trigger on events/commands across modules.',
        'Extensible with module-specific actions.'
      ],
      icon: <Bot className="w-12 h-12 text-white" />,
      color: 'blue'
    },
    {
      title: 'Advanced Embed Builder',
      bullets: [
        'V1/V2 toggle with components & multi-embeds.',
        'Dynamic variables like {user.mention}.',
        'Save/duplicate templates with live previews.'
      ],
      icon: <Palette className="w-12 h-12 text-white" />,
      color: 'purple'
    }
  ];

  const taglines = [
    'Build Authentic Discord Communities',
    'Scale Your Gaming Brand Presence',
    'Create Lasting Player Relationships',
    'Transform Servers into Revenue Engines',
    'Dominate Fortnite & Gaming Ecosystems',
    'Elevate Community Engagement',
    'Turn Discord into Brand Loyalty',
    'Master Gaming Community Growth',
    'Build the Ultimate Gaming Experience',
    'Lead Your Industry Through Discord',
  ];

  // Auto-rotate taglines like PineFruitDev
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [taglines.length]);

  // Auto-rotate bot features every 7.5 seconds (pause when hovering)
  useEffect(() => {
    if (isHoveringBotFeature) return;

    const interval = setInterval(() => {
      setCurrentBotFeature((prev) => (prev + 1) % botFeatures.length);
    }, 7500);

    return () => clearInterval(interval);
  }, [botFeatures.length, isHoveringBotFeature]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    [
      { title: 'Scalable Ad Services', description: 'Automated, intelligent advertising solutions that seamlessly integrate into Discord conversations, delivering authentic engagement at scale.', iconKey: 'Bot', isHeader: true },
      { title: 'Automated Ads via Bots', description: 'Deploy intelligent bots for seamless, conversation-embedded placements across active servers—delivering high-frequency, authentic exposure that blends effortlessly into daily chats, scaling with minimal oversight.', iconKey: 'Bot' },
      { title: 'Network Ads Across Servers', description: 'Tap into curated Discord networks for targeted, incentive-aligned visibility; we handle placements, ensuring genuine interactions while sharing success with community owners.', iconKey: 'Network' },
    ],
    [
      { title: 'Managed Campaigns', description: 'End-to-end campaign management with strategic community selection, creative development, and comprehensive execution for maximum impact.', iconKey: 'Target', isHeader: true },
      { title: 'Tailored Community Selection', description: 'Leverage proprietary insights on interests, demographics, and cultural resonance to match your brand with the perfect servers—predicting performance before launch.', iconKey: 'Target' },
      { title: 'Immersive Ad Formats', description: 'From sponsored gaming tournaments and explosive giveaways to UGC challenges and bespoke Discord Activities, we craft touchpoints like announcements, pinned events, and chat insertions that feel organic.', iconKey: 'Gamepad2' },
    ],
    [
      { title: 'Bespoke Creative Strategy', description: 'Develop community-first narratives with native visuals and hooks; extend top performers to Reddit and beyond for amplified reach.', iconKey: 'Palette' },
      { title: 'End-to-End Execution', description: 'Full-cycle management: From brief intake and approvals to flawless rollout and post-campaign debriefs, freeing you to focus on strategy.', iconKey: 'Settings' },
    ],
    [
      { title: 'Comprehensive Analytics', description: 'Real-time dashboards tracking impressions, engagements, conversions, and brand lift—proving ROI with uplift studies included standard.', iconKey: 'TrendingUp' },
      { title: 'Trusted Brand Safety', description: 'Onboard vetting, AI-moderated environments, and dedicated oversight ensure activations align with platform rules and community vibes.', iconKey: 'Shield' },
    ],
    [
      { title: 'Premium Builds', description: 'Custom server development and management solutions designed for long-term brand presence and community engagement.', iconKey: 'MessageCircle', isHeader: true },
      { title: 'Custom Community Builds', description: 'Design and launch branded servers as loyalty engines—modular channels, bots, and launch events; opt for full management or trained handover.', iconKey: 'MessageCircle' },
      { title: 'Moderation & Gaming Integrations', description: '24/7 engagement fueling with events and content; specialize in UEFN tie-ins, weaving brands into interactive game worlds for immersive retention.', iconKey: 'Users' },
    ],
  ];

  const testimonials = [
    {
      id: 't1',
      name: 'Sarah Chen',
      role: 'Community Manager',
      company: 'Epic Games',
      content: 'Modulix transformed our Discord presence from a basic chat room into a thriving community ecosystem. Their UEFN integration and custom moderation tools increased user engagement by 340% in just two months.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      accentColor: 'cyan'
    },
    {
      id: 't2',
      name: 'Marcus Rodriguez',
      role: 'Brand Director',
      company: 'Riot Games',
      content: 'The authenticity Modulix brings to Discord advertising is unparalleled. Their bot-driven placements feel natural and conversational, not forced. We saw a 280% uplift in brand sentiment within our gaming community.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      accentColor: 'purple'
    },
    {
      id: 't3',
      name: 'Elena Volkov',
      role: 'VP of Marketing',
      company: 'Ubisoft',
      content: 'Modulix\'s end-to-end Discord strategy turned our server into a brand loyalty powerhouse. Their custom server designs and 24/7 moderation created genuine connections that traditional platforms simply can\'t match.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      accentColor: 'blue'
    },
    {
      id: 't4',
      name: 'David Kim',
      role: 'Community Lead',
      company: 'Discord',
      content: 'Working with Modulix has been transformative. Their deep understanding of Discord dynamics and innovative approach to community building has set new standards for what\'s possible in platform marketing.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      accentColor: 'purple'
    }
  ];

  const companies = [
    {
      id: 'readyup',
      name: 'ReadyUp',
      displayName: 'READYUP',
      link: 'https://getreadyup.com',
      accentColor: 'white',
      logoUrl: '/companies/readyup-logo.png',
    },
    {
      id: 'chartis',
      name: 'Chartis',
      displayName: 'CHARTIS',
      link: 'https://chartis.gg',
      accentColor: 'blue',
      logoUrl: '/companies/chartis-logo.png',
    },
    {
      id: 'foad',
      name: 'FOAD',
      displayName: 'FOAD',
      link: 'https://www.foad.gg/',
      accentColor: 'green',
      logoUrl: '/companies/foad-logo.png',
    },
    {
      id: 'thirdmade',
      name: 'ThirdMade',
      displayName: 'THIRDMADE',
      link: 'https://discord.gg/thirdmade',
      accentColor: 'purple',
      logoUrl: '/companies/thirdmade-logo.png',
    },
    {
      id: 'uefntool',
      name: 'UEFN Tool',
      displayName: 'UEFN TOOL',
      link: 'https://discord.gg/uefntool',
      accentColor: 'blue',
      logoUrl: '/companies/uefntool-logo.png',
    },
    {
      id: 'fnsg',
      name: 'FNSG',
      displayName: 'FNSG',
      link: 'https://discord.gg/fnsg',
      accentColor: 'orange',
      logoUrl: '/companies/fnsg-logo.png',
    },
    {
      id: 'vlo',
      name: 'VLO Studios',
      displayName: 'VLO STUDIOS',
      link: 'https://discord.gg/w5Rg9yhte',
      accentColor: 'cyan',
      logoUrl: '/companies/vlo-logo.png',
    },
    {
      id: 'solrise',
      name: 'Solrise Interactive',
      displayName: 'SOLRISE',
      link: 'https://discord.gg/solrise',
      accentColor: 'yellow',
      logoUrl: '/companies/solrise-logo.png',
    },
    {
      id: 'drying',
      name: 'Drying Games',
      displayName: 'DRYING',
      link: 'https://discord.gg/drying',
      accentColor: 'cyan',
      logoUrl: '/companies/drying-logo.png',
    },
    {
      id: 'casuallegends',
      name: 'Casual Legends',
      displayName: 'CASUAL LEGENDS',
      link: 'https://discord.gg/casuallegends',
      accentColor: 'pink',
      logoUrl: '/companies/casuallegends-logo.png',
    },
    {
      id: 'getshot',
      name: 'Getshot',
      displayName: 'GETSHOT',
      link: 'https://discord.gg/getshot',
      accentColor: 'red',
      logoUrl: '/companies/getshot-logo.png',
    },
  ];

  const getAccentColors = (color: string) => {
    switch (color) {
      case 'cyan': return { glow: 'hover:shadow-neon-cyan', text: 'text-cyan-400' };
      case 'blue': return { glow: 'hover:shadow-neon-blue', text: 'text-blue-400' };
      case 'purple': return { glow: 'hover:shadow-neon-purple', text: 'text-purple-400' };
      case 'green': return { glow: 'hover:shadow-neon-green', text: 'text-green-400' };
      case 'orange': return { glow: 'hover:shadow-neon-orange', text: 'text-orange-400' };
      case 'yellow': return { glow: 'hover:shadow-neon-yellow', text: 'text-yellow-400' };
      case 'pink': return { glow: 'hover:shadow-neon-pink', text: 'text-pink-400' };
      case 'red': return { glow: 'hover:shadow-neon-red', text: 'text-red-400' };
      default: return { glow: 'hover:shadow-neon-gray', text: 'text-gray-400' };
    }
  };

  const faqs = [
    { question: 'How do you ensure the right community fit for our brand?', answer: 'We map servers using interest profiles, location data, and cultural alignment—drawing from admin insights and content analysis to predict resonance and avoid mismatches.' },
    { question: 'What makes your ad formats stand out in gaming spaces?', answer: 'Beyond static posts, we specialize in interactive spectacles like tournament sponsorships, live giveaways, and UEFN-linked Activities—formats that ignite participation and feel like community events.' },
    { question: 'Can you handle full campaign orchestration?', answer: 'Absolutely—our team translates your brief into a phased strategy: ideation, creative dev, execution, and insights reporting, with real-time adjustments for peak performance.' },
    { question: 'How do you measure and optimize success?', answer: 'Layered metrics from engagements and conversions to sentiment uplift; we provide dashboards and A/B insights to refine future orbits, ensuring every dollar drives loyalty.' },
    { question: 'What safeguards protect our brand in these communities?', answer: 'Multi-tiered: Pre-vet servers for tone and activity, leverage Discord\'s AI tools, and station mods/staff for proactive monitoring—upholding authenticity without stifling fun.' },
    { question: 'How does Modulix differ from generic ad networks?', answer: 'We\'re gaming natives: Modular, UEFN-savvy solutions that prioritize owned ecosystems over spray-and-pray tactics, delivering deeper ROI for brands ready to level up.' },
  ];

  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  // Handle scroll breakout for reviews
  const handleReviewScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;

    // If we're at the top and scrolling up, or at the bottom and scrolling down, allow page scroll
    if ((scrollTop === 0 && e.deltaY < 0) || (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0)) {
      // Don't prevent default - allow page scroll to continue
      return;
    }

    // Otherwise, prevent the event from bubbling to page scroll
    e.stopPropagation();
  };


  // Auto-advance testimonials (for fallback)
  useEffect(() => {
    if (isHoveringTestimonials) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % (testimonials.length - 1));
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, isHoveringTestimonials]);

  return (
    <>
      <Head>
        <title>Modulix Solutions - Discord Community Management</title>
        <meta name="description" content="Transform Discord into revenue-generating communities with authentic gaming brand advertising, UEFN integrations, and community management for studios and brands." />
        <meta name="keywords" content="Discord community management, gaming server advertising, UEFN marketing, Discord bot advertising, gaming community engagement, Discord marketing campaigns, gaming brand promotion, community building, Discord server management, Fortnite advertising, Discord ad network, gaming community growth, Discord advertising agency, Modulix Solutions, Chartis Games, WildFire Discord, Readyup" />
        <meta name="author" content="Modulix Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://modulixsolutions.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://modulixsolutions.com" />
        <meta property="og:title" content="Modulix Solutions - Discord Community Management & Gaming Brand Advertising" />
        <meta property="og:description" content="Transform Discord into revenue-generating communities with authentic gaming brand advertising, UEFN integrations, and community management for studios and brands." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Modulix Solutions" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://modulixsolutions.com" />
        <meta name="twitter:title" content="Modulix Solutions - Discord Community Management & Gaming Brand Advertising" />
        <meta name="twitter:description" content="Transform Discord into revenue-generating communities with authentic gaming brand advertising, UEFN integrations, and community management for studios and brands." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Modulix Solutions",
              "url": "https://modulixsolutions.com",
              "logo": "https://modulixsolutions.com/logo.png",
              "description": "Discord community management and gaming brand advertising specialists, offering authentic engagements, UEFN integrations, and community building services.",
              "foundingDate": "2024",
              "industry": "Digital Marketing, Gaming, Community Management",
              "serviceType": ["Discord Advertising", "Community Management", "Gaming Marketing", "UEFN Integration"],
              "areaServed": "Global",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": "https://modulixsolutions.com#contact"
              },
              "sameAs": [
                "https://discord.gg/modulix",
                "https://twitter.com/modulixsolutions",
                "https://www.linkedin.com/company/modulixsolution"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen relative">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <Header />

          <main>
            {/* Hero Section */}
            <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="min-h-screen flex items-center justify-center">
                  <Container className="py-20">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, staggerChildren: 0.3 }}
                  className="text-center flex flex-col items-center justify-center min-h-screen"
                >
                  {/* Congratulatory Intro */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-300 font-medium mb-4"
                  >
                    Congratulations! You've just stumbled upon...
                  </motion.p>

                  {/* H1 - Main Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
                  >
                    <motion.span
                      className="gradient-text text-glow"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      MODULIX
                    </motion.span>{' '}
                    <span className="text-white">SOLUTIONS</span>
                  </motion.h1>


                  {/* Rotating Taglines */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="h-16 md:h-20 flex items-center justify-center mb-6"
                  >
                    <motion.h2
                      key={currentTagline}
                      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {taglines[currentTagline]}
                    </motion.h2>
                  </motion.div>

                  {/* CTA Button */}
                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                  >
                    Craft authentic, scalable engagements that transform fleeting interactions into enduring brand loyalty empowering gaming studios and brands to own the conversation in the heart of gaming's digital universe.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <Button onClick={scrollToContact} size="lg" className="text-lg px-10 py-5">
                      Launch Your Campaign
                    </Button>
                  </motion.div>

                </motion.div>
              </Container>
                </div>
            </SectionWrapper>

            {/* About & Value Propositions Section */}
            <SectionWrapper id="about" className="py-16 bg-deeper-blue/60 relative">
              {/* Background Icon */}
              <div className="absolute inset-0 pointer-events-none z-[2]" style={{
                backgroundImage: `url("data:image/svg+xml;base64,${btoa(`
                  <svg viewBox="0 0 369 431" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M123.2097,256.5419c3.3564,1.7799 53.7644,28.8017 56.1421,30.1319c6.3382,2.3372 5.079,2.2875 11.6624,-0.0176c2.5274,-1.2166 43.6758,-25.6452 52.6758,-29.6452c6.5646,-3 11.4212,0.011 11.5849,6c0.0678,2.4821 -0.3991,127.7513 -0.3991,127.7513c0,0 -57.4462,34.3318 -58.3051,34.8516c-0.7469,0.4541 -1.4939,0.9081 -2.2634,1.376c-4.7664,2.779 -8.5079,4.2789 -14.1155,3.2334c-3.8871,-1.6292 -69.2518,-39.3998 -69.2518,-39.3998c0,0 0.7214,-119.6568 0.75,-127.8125c0,-4.5559 6,-9 11.5198,-6.4691zM143.1918,304.2234c0,0 -0.5018,59.7877 -0.5018,63.7877c0.723,2.7111 24,17 31.929,21.4987c12.071,5.5013 7.071,5.5013 18.5639,0.5013c10.5071,-5.7445 29.1747,-19.8304 31.0089,-21.7877c1.196,-4.0046 1,-64 1,-64c0,0 -28.2424,15.0938 -33.5018,17.7877c-7.1107,3.0497 -6.3401,3.2991 -15,0c-8.352,-3.4781 -33.4982,-17.7877 -33.4982,-17.7877z"/>
                    <path fill="white" d="M299.7864,64.2624c0,0 47.0288,27.2661 49.8263,28.8228c14.6721,8.3242 18.5414,6.9259 18.7414,22.9259c0.1814,2.5997 -0.1478,74.2208 -0.1478,74.2208c0,0 -100.1194,55.3851 -104.1224,56.1388c-10.1567,0.4837 -16.0429,-5.0602 -16.0429,-18.1188c-0.5018,-15.7356 1.1508,-49.0284 1.1508,-49.0284c0,0 -50.2786,-28.2105 -51.0681,-28.665c-3.8749,-2.6776 -5.4519,-5.7952 -6.3342,-10.4639c-1.0812,-3.1249 -1.2068,-13.6738 13.7375,-22.5902c6.7814,-4.1442 94.2595,-53.2419 94.2595,-53.2419zM333.36,170.6384c0,0 3.2625,-2.8544 3.7351,-6.49c0.0935,-1.6544 0.4808,-18.9164 0.6201,-21.7551c-0.2851,-8.6466 -0.0252,-13.0514 -2.8463,-16.8838c-7.7379,-7.4985 -31.6039,-18.3798 -35.6654,-21.0361c-3.2216,-2.0018 -3.7682,-0.81 -6.7734,1.2773c-0.7821,0.5404 -51.2383,33.4727 -51.2383,33.4727l25.6753,15.3555c0,0 7.8229,4.0558 10.3247,6.6445c1.4982,1.7877 1.375,21.5 1.375,21.5l-0.375,20.5z"/>
                    <path fill="white" d="M67.0935,64.8489c0,0 98.4979,56.6556 100.898,57.9393c8.1541,4.8922 12.1117,19.421 3.5975,26.435c-3.4338,3.9933 -52.3973,30.0001 -52.3973,30.0001c0,0 0.6479,46.986 0.6798,48.2506c-0.5033,14.0301 -7.1902,20.508 -18.513,18.799c-4.5437,-1.8932 -101.2912,-55.482 -101.2912,-55.482c0,0 -0.0079,-72.6544 0,-75.2474c0.1952,-10.2347 1.9319,-10.0437 5.4984,-13.8551c2.7523,-2.48 61.5277,-36.8396 61.5277,-36.8396zM66.69,105.61c-0.8886,0.5562 -28.6315,17.2106 -29.2153,17.5182c-2.7689,1.6596 -4.7847,2.8828 -5.7847,6.8828c-0.3503,2.4004 -1.8376,25.6401 -1.996,28.4602c-0.4379,9.0891 0.996,8.5398 4.0458,11.5662c3.8006,3.1432 56.452,33.186 56.452,33.186c0,0 1.2643,-36.2576 1.4982,-37.9568c0.2059,-1.4963 -0.0137,-3.4783 1.6735,-4.464c11.1973,-6.542 33.8283,-21.5792 33.8283,-21.5792c0,0 -48.6841,-31.334 -52.5018,-34.2123c-3.3409,-2.4132 -3.2877,-2.401 -8,0.599z"/>
                    <path fill="white" d="M201.1918,71.2234M167.1918,71.2234M217.69,59.503c0,0 -20.7688,-13.6719 -26,-16.9438c-7,-3.5481 -7,-3.5481 -13.4357,-0.0233c-0.9423,0.5607 -24.5124,14.6758 -28.0625,16.6875c0.66,0.66 34.4982,22.7877 34.4982,22.7877zM261.1871,42.0237c6.3773,3.6649 12.7134,7.3888 19.0046,11.1997c-2.5536,2.6956 -85.834,52.7356 -91.7734,56.9531c-2.9796,1.4009 -4.1209,1.1184 -7.2266,0.0469c-2.5197,-1.2741 -92,-55 -93,-57c6.4901,-3.928 53.0293,-30.7914 69.6072,-40.6501c4.4129,-2.971 16.8037,-10.8862 21.2788,-11.9181c3.7885,-0.8736 6.9926,-0.8736 9.6122,0c3.6474,1.3559 15.5248,8.1363 19.4865,10.715c1.7094,0.9634 44.4801,25.757 53.0106,30.6535z"/>
                    <path fill="white" d="M368.1918,213.2234c0,0 0.3642,96.7817 0.3733,97.59c-0.0277,5.9999 -0.751,10.4051 -4.8459,15.0975c-4.8647,4.016 -88.5273,52.3125 -88.5273,52.3125c0,0 0,-71.94 0,-109c0.0473,-0.2123 -0.0287,-4.2123 4.4982,-7.2123c3,-2.5676 88.5018,-48.7877 88.5018,-48.7877zM320.1918,314.2234M335.1918,304.2234c0,-13.86 0,-42 0,-42c0,0 -12.5018,4.7877 -28.9389,13.8507c-4.9717,3.937 -5.4328,5.7724 -5.546,12.7897c-0.0806,4.9994 0.4849,35.3596 0.4849,35.3596c0,0 33.1999,-19.2123 34,-20z"/>
                    <path fill="white" d="M0.1918,213.2234c0,0 76.8875,44.1738 82,47c9.4982,6.0904 10.2128,6.7877 11.0646,12.479c0.66,0 -0.0646,105.521 -0.0646,105.521c0,0 -67.8491,-39.074 -72.8125,-41.9375c-18.6893,-10.7905 -20.1145,-16.7673 -20.361,-27.2748c-0.0886,-1.4468 0.1735,-95.7877 0.1735,-95.7877zM33.1918,262.2234v42l34,20c0,0 1.0094,-35.3274 1.1153,-37.6574c0.5097,-3.5338 -1.9078,-7.0407 -6.5203,-9.944c-6.5068,-3.6126 -28.595,-14.3986 -28.595,-14.3986z"/>
                  </svg>
                `)}")`,
                backgroundSize: '70vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center calc(16vh)',
                backgroundAttachment: 'fixed',
                opacity: 0.02
              }}></div>
              <div className="absolute inset-0 pointer-events-none z-[1] hidden md:block" style={{
                backgroundImage: "url('/hex-bg.png')",
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'fixed',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                opacity: 1
              }}></div>
              <Container className="relative z-[10]">
                {/* About Us Section */}
                <div className="mb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                  >

                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                          About Modulix
                        </h2>

                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="text-xl text-gray-300 mb-6 leading-relaxed"
                        >
                          At Modulix, we're the pioneers revolutionizing how major corporations connect with vibrant gaming communities. For over a decade, we've partnered with Fortune 500 giants, AAA game studios launching blockbuster titles, and innovative indie developers cultivating dedicated followings. From global brands entering the metaverse to underground creators just starting out, our expertise in Discord integrations, UEFN (Unreal Engine Fortnite Network), and UGC (User-Generated Content) games sets the standard—making outdated advertising methods feel archaic.
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="text-lg text-gray-300 mb-6 leading-relaxed"
                        >
                          As confident, forward-thinking developers, we take community building to the next level. While competitors tinker with basic bots, we've engineered comprehensive ecosystems that integrate seamlessly and feel inherently organic. Our modular framework allows us to scale from targeted server enhancements to full-scale enterprise community management, always delivering that precise mix of technical innovation and genuine human connection that drives real engagement and loyalty.
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          viewport={{ once: true }}
                          className="text-lg text-gray-300 leading-relaxed"
                        >
                          Whether you're a corporation aiming to market products through immersive Discord experiences or leverage UEFN/UGC for viral community growth, Modulix delivers results that not only meet but exceed expectations. Join the ranks of industry leaders who've trusted us to turn communities into powerful marketing assets.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </div>


              </Container>
            </SectionWrapper>

            {/* Modulix Bot Teaser Section */}
            <SectionWrapper id="modulix-bot" className="relative overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-[2px] hidden md:block"></div>
              <div className="absolute inset-0 pointer-events-none z-[2] hidden md:block" style={{
                backgroundImage: "url('/hex-bg.png')",
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'fixed',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                opacity: 1
              }}></div>
              <Parallax
                bgImage="https://source.unsplash.com/random/1920x1080/?technology,network"
                strength={200}
                className="hidden md:block"
              ></Parallax>
              <div className="pt-20 pb-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 via-neon-purple/10 to-transparent"></div>
              <Container className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                      className="text-center max-w-6xl mx-auto"
                >
                      {/* Eye-catching icon with animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                        className="mb-10 relative"
                      >
                        <motion.div
                          className="w-32 h-32 mx-auto bg-gradient-to-br from-cyber-blue to-neon-purple rounded-full flex items-center justify-center shadow-2xl relative p-4"
                          animate={{
                            boxShadow: [
                              '0 0 30px rgba(0, 212, 255, 0.5)',
                              '0 0 60px rgba(168, 85, 247, 0.7)',
                              '0 0 30px rgba(0, 212, 255, 0.5)',
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <svg className="w-full h-full text-white" viewBox="0 0 369 431" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M123.2097,256.5419c3.3564,1.7799 53.7644,28.8017 56.1421,30.1319c6.3382,2.3372 5.079,2.2875 11.6624,-0.0176c2.5274,-1.2166 43.6758,-25.6452 52.6758,-29.6452c6.5646,-3 11.4212,0.011 11.5849,6c0.0678,2.4821 -0.3991,127.7513 -0.3991,127.7513c0,0 -57.4462,34.3318 -58.3051,34.8516c-0.7469,0.4541 -1.4939,0.9081 -2.2634,1.376c-4.7664,2.779 -8.5079,4.2789 -14.1155,3.2334c-3.8871,-1.6292 -69.2518,-39.3998 -69.2518,-39.3998c0,0 0.7214,-119.6568 0.75,-127.8125c0,-4.5559 6,-9 11.5198,-6.4691zM143.1918,304.2234c0,0 -0.5018,59.7877 -0.5018,63.7877c0.723,2.7111 24,17 31.929,21.4987c12.071,5.5013 7.071,5.5013 18.5639,0.5013c10.5071,-5.7445 29.1747,-19.8304 31.0089,-21.7877c1.196,-4.0046 1,-64 1,-64c0,0 -28.2424,15.0938 -33.5018,17.7877c-7.1107,3.0497 -6.3401,3.2991 -15,0c-8.352,-3.4781 -33.4982,-17.7877 -33.4982,-17.7877z"/>
                            <path d="M299.7864,64.2624c0,0 47.0288,27.2661 49.8263,28.8228c14.6721,8.3242 18.5414,6.9259 18.7414,22.9259c0.1814,2.5997 -0.1478,74.2208 -0.1478,74.2208c0,0 -100.1194,55.3851 -104.1224,56.1388c-10.1567,0.4837 -16.0429,-5.0602 -16.0429,-18.1188c-0.5018,-15.7356 1.1508,-49.0284 1.1508,-49.0284c0,0 -50.2786,-28.2105 -51.0681,-28.665c-3.8749,-2.6776 -5.4519,-5.7952 -6.3342,-10.4639c-1.0812,-3.1249 -1.2068,-13.6738 13.7375,-22.5902c6.7814,-4.1442 94.2595,-53.2419 94.2595,-53.2419zM333.36,170.6384c0,0 3.2625,-2.8544 3.7351,-6.49c0.0935,-1.6544 0.4808,-18.9164 0.6201,-21.7551c-0.2851,-8.6466 -0.0252,-13.0514 -2.8463,-16.8838c-7.7379,-7.4985 -31.6039,-18.3798 -35.6654,-21.0361c-3.2216,-2.0018 -3.7682,-0.81 -6.7734,1.2773c-0.7821,0.5404 -51.2383,33.4727 -51.2383,33.4727l25.6753,15.3555c0,0 7.8229,4.0558 10.3247,6.6445c1.4982,1.7877 1.375,21.5 1.375,21.5l-0.375,20.5z"/>
                            <path d="M67.0935,64.8489c0,0 98.4979,56.6556 100.898,57.9393c8.1541,4.8922 12.1117,19.421 3.5975,26.435c-3.4338,3.9933 -52.3973,30.0001 -52.3973,30.0001c0,0 0.6479,46.986 0.6798,48.2506c-0.5033,14.0301 -7.1902,20.508 -18.513,18.799c-4.5437,-1.8932 -101.2912,-55.482 -101.2912,-55.482c0,0 -0.0079,-72.6544 0,-75.2474c0.1952,-10.2347 1.9319,-10.0437 5.4984,-13.8551c2.7523,-2.48 61.5277,-36.8396 61.5277,-36.8396zM66.69,105.61c-0.8886,0.5562 -28.6315,17.2106 -29.2153,17.5182c-2.7689,1.6596 -4.7847,2.8828 -5.7847,6.8828c-0.3503,2.4004 -1.8376,25.6401 -1.996,28.4602c-0.4379,9.0891 0.996,8.5398 4.0458,11.5662c3.8006,3.1432 56.452,33.186 56.452,33.186c0,0 1.2643,-36.2576 1.4982,-37.9568c0.2059,-1.4963 -0.0137,-3.4783 1.6735,-4.464c11.1973,-6.542 33.8283,-21.5792 33.8283,-21.5792c0,0 -48.6841,-31.334 -52.5018,-34.2123c-3.3409,-2.4132 -3.2877,-2.401 -8,0.599z"/>
                            <path d="M201.1918,71.2234M167.1918,71.2234M217.69,59.503c0,0 -20.7688,-13.6719 -26,-16.9438c-7,-3.5481 -7,-3.5481 -13.4357,-0.0233c-0.9423,0.5607 -24.5124,14.6758 -28.0625,16.6875c0.66,0.66 34.4982,22.7877 34.4982,22.7877zM261.1871,42.0237c6.3773,3.6649 12.7134,7.3888 19.0046,11.1997c-2.5536,2.6956 -85.834,52.7356 -91.7734,56.9531c-2.9796,1.4009 -4.1209,1.1184 -7.2266,0.0469c-2.5197,-1.2741 -92,-55 -93,-57c6.4901,-3.928 53.0293,-30.7914 69.6072,-40.6501c4.4129,-2.971 16.8037,-10.8862 21.2788,-11.9181c3.7885,-0.8736 6.9926,-0.8736 9.6122,0c3.6474,1.3559 15.5248,8.1363 19.4865,10.715c1.7094,0.9634 44.4801,25.757 53.0106,30.6535z"/>
                            <path d="M368.1918,213.2234c0,0 0.3642,96.7817 0.3733,97.59c-0.0277,5.9999 -0.751,10.4051 -4.8459,15.0975c-4.8647,4.016 -88.5273,52.3125 -88.5273,52.3125c0,0 0,-71.94 0,-109c0.0473,-0.2123 -0.0287,-4.2123 4.4982,-7.2123c3,-2.5676 88.5018,-48.7877 88.5018,-48.7877zM320.1918,314.2234M335.1918,304.2234c0,-13.86 0,-42 0,-42c0,0 -12.5018,4.7877 -28.9389,13.8507c-4.9717,3.937 -5.4328,5.7724 -5.546,12.7897c-0.0806,4.9994 0.4849,35.3596 0.4849,35.3596c0,0 33.1999,-19.2123 34,-20z"/>
                            <path d="M0.1918,213.2234c0,0 76.8875,44.1738 82,47c9.4982,6.0904 10.2128,6.7877 11.0646,12.479c0.66,0 -0.0646,105.521 -0.0646,105.521c0,0 -67.8491,-39.074 -72.8125,-41.9375c-18.6893,-10.7905 -20.1145,-16.7673 -20.361,-27.2748c-0.0886,-1.4468 0.1735,-95.7877 0.1735,-95.7877zM33.1918,262.2234v42l34,20c0,0 1.0094,-35.3274 1.1153,-37.6574c0.5097,-3.5338 -1.9078,-7.0407 -6.5203,-9.944c-6.5068,-3.6126 -28.595,-14.3986 -28.595,-14.3986z"/>
                      </svg>
                          <motion.div
                            className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-neon-purple to-pink-500 rounded-full flex items-center justify-center border-4 border-dark-navy"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0789.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0789-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0067.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0408.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9758 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                            </svg>
                          </motion.div>
                  </motion.div>

                        {/* Decorative rings */}
                        <motion.div
                          className="absolute inset-0 w-32 h-32 mx-auto border-2 border-cyber-blue/30 rounded-full"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute inset-0 w-32 h-32 mx-auto border-2 border-neon-purple/30 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </motion.div>

                      {/* Main headline with better gradient */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                  >
                        Introducing the <span className="text-cyber-blue">Modulix Bot</span>
                  </motion.h2>

                      {/* Two Column Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Heading and Description */}
                        <div>
                  {/* Subheadline */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-2xl md:text-3xl font-semibold mb-6 text-white text-left"
                  >
                            The Future is Nearly Here
                  </motion.h3>

                          {/* Description */}
                          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                          >
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-left">
                              Every feature traditional Discord bots offer, <span className="text-cyber-blue font-semibold">supercharged</span>.
                              <br /><br />
                              A fully modular framework where you only pay for what you use, with <span className="text-cyber-blue font-semibold">infinite customization</span> and a powerful web dashboard.
                              <br /><br />
                              Build communities that don't just grow, they dominate. Dive into a <span className="text-cyber-blue font-semibold">revolutionary ecosystem</span> powered by event-driven architecture, AI-enhanced security, addictive leveling, and seamless integrations that turn your server into an unstoppable force.
                              <br /><br />
                              Prepare to <span className="text-cyber-blue font-semibold">redefine engagement</span>. Modulix is on the way.
                            </p>
                          </motion.div>
                        </div>

                        {/* Right Column - Cards */}
                        <div className="flex items-center justify-center">
                          {/* Rotating Feature Tile */}
                          <div
                            className="relative h-[380px] flex items-center justify-center w-full max-w-lg"
                            onMouseEnter={() => setIsHoveringBotFeature(true)}
                            onMouseLeave={() => setIsHoveringBotFeature(false)}
                          >
                            {botFeatures.map((feature, index) => {
                              const isVisible = currentBotFeature === index;
                              const isPrevious = currentBotFeature === (index + 1) % botFeatures.length;

                              return (
                  <motion.div
                                  key={feature.title}
                                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                                  animate={{
                                    opacity: isVisible ? 1 : 0,
                                    x: isVisible ? 0 : isPrevious ? -100 : 100,
                                    scale: isVisible ? 1 : 0.95,
                                    position: 'absolute' as const,
                                    pointerEvents: isVisible ? 'auto' as const : 'none' as const
                                  }}
                                  transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                    delay: isVisible ? 0.3 : 0
                                  }}
                                  className="w-full"
                                >
                                  <Card
                                    className={`text-center p-10 h-full transition-all duration-300 ${
                                      feature.color === 'purple' ? 'hover:shadow-neon-purple-glow' : 'hover:shadow-neon-blue-glow'
                                    }`}
                                    glowColor={feature.color as 'blue' | 'purple'}
                                  >
                                    <div className="flex justify-center mb-6">
                                      <div
                                        className={`w-24 h-24 rounded-full flex items-center justify-center ${
                                          feature.color === 'purple'
                                            ? 'bg-gradient-to-br from-neon-purple to-cyber-blue'
                                            : 'bg-gradient-to-br from-cyber-blue to-neon-purple'
                                        }`}
                                      >
                                        {feature.icon}
                    </div>
                    </div>
                                    <h4 className="text-2xl font-bold mb-4" style={{ color: feature.color === 'blue' ? '#00D4FF' : '#A855F7' }}>
                                      {feature.title}
                                    </h4>
                                    <div
                                      className="w-full h-1 mb-6 rounded-full"
                                      style={{
                                        background: feature.color === 'blue'
                                          ? 'linear-gradient(90deg, #00D4FF, #A855F7)'
                                          : 'linear-gradient(90deg, #A855F7, #00D4FF)'
                                      }}
                                    />
                                    <ul className="text-left space-y-4 max-w-xl mx-auto">
                                      {feature.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="flex items-start">
                                          <span
                                            className="text-2xl mr-3 flex-shrink-0 mt-[-2px]"
                                            style={{ color: feature.color === 'blue' ? '#00D4FF' : '#A855F7' }}
                                          >
                                            •
                                          </span>
                                          <span className="text-gray-300 leading-relaxed text-lg">
                                            {bullet}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </Card>
                  </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Call to action badge - Centered below columns */}
                  <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex justify-center mt-12"
                      >
                        <div className="px-8 py-4 bg-gradient-to-r from-cyber-blue/30 to-neon-purple/30 border-2 border-cyber-blue rounded-full backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            {/* Hexagonal Loading Symbol with Tumbling Inner Hexagon */}
                            <div className="relative w-6 h-6">
                              {/* Outer rotating hexagon */}
                              <motion.svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="text-cyber-blue absolute inset-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              >
                                <path
                                  d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </motion.svg>

                              {/* Inner tumbling hexagon - passively moved by outer hexagon's rotation */}
                              <motion.svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="text-cyber-blue absolute inset-0"
                                animate={{
                                  rotate: [0, 15, 30, 90, 180, 270, 330, 360],
                                  x: [0, 1, 2.5, 2.5, 2, 0, -2, 0],
                                  y: [-1.5, 1, 2.5, 2.5, 2.5, 2.5, 0.5, -1.5]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: [0.34, 0.61, 0.45, 0.99],
                                  times: [0, 0.08, 0.12, 0.25, 0.5, 0.75, 0.92, 1]
                                }}
                              >
                                <path
                                  d="M12 8L17 11V16L12 19L7 16V11L12 8Z"
                                  fill="currentColor"
                                  opacity="0.5"
                                />
                              </motion.svg>
                    </div>
                            <span className="text-white font-bold text-lg">Coming Soon</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-300">Stay tuned for the revolution</span>
                          </div>
                        </div>
                  </motion.div>
                </motion.div>
              </Container>
                </div>
            </SectionWrapper>

            {/* Services Section */}
            <SectionWrapper id="services" className="py-20 bg-deeper-blue/60 relative">
              <div className="absolute inset-0 pointer-events-none z-[1] hidden md:block" style={{
                backgroundImage: "url('/hex-bg.png')",
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'fixed',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                opacity: 1
              }}></div>
              <Parallax
                bgImage="https://source.unsplash.com/random/1920x1080/?abstract,tech"
                strength={200}
                className="hidden md:block"
              ></Parallax>
              <div className="py-0">
                <Container className="relative z-[10]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Our Service Ecosystem
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    From automated advertising to custom community builds, we deliver authentic engagement that drives results.
                  </p>
                </motion.div>

                <div className="space-y-16">
                  {/* Scalable Ad Services */}
                  <SectionContainer className="mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-3xl font-bold text-cyber-blue">
                        Scalable Ad Services
                      </h3>
                      <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                        Automated, intelligent advertising solutions that seamlessly integrate into Discord conversations, delivering authentic engagement at scale.
                      </p>
                    </motion.div>
                    <div className="service-brackets">
                      <RowContainer>
                        <Card className="flex-1 hover:shadow-neon-blue-glow transition-all duration-300" glowColor="blue">
                          <div className="flex items-center mb-3">
                            <Bot className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Automated Ads via Bots
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Deploy intelligent bots for seamless, conversation-embedded placements across active servers—delivering high-frequency, authentic exposure that blends effortlessly into daily chats, scaling with minimal oversight.
                          </p>
                        </Card>
                        <Card className="flex-1 hover:shadow-neon-blue-glow transition-all duration-300" glowColor="blue">
                          <div className="flex items-center mb-3">
                            <Network className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Network Ads Across Servers
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Tap into curated Discord networks for targeted, incentive-aligned visibility; we handle placements, ensuring genuine interactions while sharing success with community owners.
                          </p>
                        </Card>
                      </RowContainer>
                    </div>
                  </SectionContainer>

                  {/* Managed Campaigns */}
                  <SectionContainer className="mb-12 border-neon-purple/30">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-3xl font-bold text-cyber-blue">
                        Managed Campaigns
                      </h3>
                      <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                        End-to-end campaign management with strategic community selection, creative development, and comprehensive execution for maximum impact.
                      </p>
                    </motion.div>
                    <div className="service-brackets service-brackets-purple space-y-8">
                      <RowContainer>
                        <Card className="flex-1 hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                          <div className="flex items-center mb-3">
                            <Target className="w-6 h-6 text-neon-purple mr-3" />
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                              Tailored Community Selection
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Leverage proprietary insights on interests, demographics, and cultural resonance to match your brand with the perfect servers—predicting performance before launch.
                          </p>
                        </Card>
                        <Card className="flex-1 hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                          <div className="flex items-center mb-3">
                            <Gamepad2 className="w-6 h-6 text-neon-purple mr-3" />
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                              Immersive Ad Formats
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            From sponsored gaming tournaments and explosive giveaways to UGC challenges and bespoke Discord Activities, we craft touchpoints like announcements, pinned events, and chat insertions that feel organic.
                          </p>
                        </Card>
                      </RowContainer>
                      <RowContainer>
                        <Card className="flex-1 hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                          <div className="flex items-center mb-3">
                            <Palette className="w-6 h-6 text-neon-purple mr-3" />
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                              Bespoke Creative Strategy
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Develop community-first narratives with native visuals and hooks; extend top performers to Reddit and beyond for amplified reach.
                          </p>
                        </Card>
                        <Card className="flex-1 hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                          <div className="flex items-center mb-3">
                            <Settings className="w-6 h-6 text-neon-purple mr-3" />
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                              End-to-End Execution
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Full-cycle management: From brief intake and approvals to flawless rollout and post-campaign debriefs, freeing you to focus on strategy.
                          </p>
                        </Card>
                      </RowContainer>
                      <RowContainer>
                        <Card className="flex-1 hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                          <div className="flex items-center mb-3">
                            <TrendingUp className="w-6 h-6 text-neon-purple mr-3" />
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                              Comprehensive Analytics
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Real-time dashboards tracking impressions, engagements, conversions, and brand lift—proving ROI with uplift studies included standard.
                          </p>
                        </Card>
                        <Card className="flex-1 hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                          <div className="flex items-center mb-3">
                            <Shield className="w-6 h-6 text-neon-purple mr-3" />
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                              Trusted Brand Safety
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Onboard vetting, AI-moderated environments, and dedicated oversight ensure activations align with platform rules and community vibes.
                          </p>
                        </Card>
                      </RowContainer>
                    </div>
                  </SectionContainer>

                  {/* Premium Builds */}
                  <SectionContainer className="mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-3xl font-bold text-cyber-blue">
                        Premium Builds
                      </h3>
                      <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                        Custom server development and management solutions designed for long-term brand presence and community engagement.
                      </p>
                    </motion.div>
                    <div className="service-brackets">
                      <RowContainer>
                        <Card className="flex-1 hover:shadow-neon-blue-glow transition-all duration-300" glowColor="blue">
                          <div className="flex items-center mb-3">
                            <MessageCircle className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Custom Community Builds
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Design and launch branded servers as loyalty engines—modular channels, bots, and launch events; opt for full management or trained handover.
                          </p>
                        </Card>
                        <Card className="flex-1 hover:shadow-neon-blue-glow transition-all duration-300" glowColor="blue">
                          <div className="flex items-center mb-3">
                            <Users className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Moderation & Gaming Integrations
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            24/7 engagement fueling with events and content; specialize in UEFN tie-ins, weaving brands into interactive game worlds for immersive retention.
                          </p>
                        </Card>
                      </RowContainer>
                    </div>
                  </SectionContainer>

                  {/* Why Discord Drives Superior ROI */}
                  <SectionContainer className="mb-16">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <h3 className="text-2xl font-bold mb-4 text-cyber-blue">
                        Why Discord Drives Superior ROI
                      </h3>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Beyond fleeting impressions to owned universes—where your brand lives indefinitely, builds lasting relationships, and delivers measurable results that traditional platforms can't match
                      </p>
                      <div className="w-full h-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple mb-8"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <Card className="h-full text-center hover:shadow-neon-blue-glow transition-all duration-300" glowColor="blue">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-neon-purple flex items-center justify-center">
                            <Network className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold gradient-text mb-3">
                          Persistent Ownership
                        </h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple mb-4"></div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          Ditch ephemeral views—build Discord hubs where your brand lives indefinitely, owning data, rules, and relationships for sustained growth.
                        </p>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <Card className="h-full text-center hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-cyber-blue flex items-center justify-center">
                            <MessageCircle className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                          Retention
                        </h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-neon-purple to-cyber-blue mb-4"></div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          Engage in real-time dialogues that spark word-of-mouth magic; members linger for months, turning one ad into endless impressions.
                        </p>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative"
                    >
                      <Card className="h-full text-center hover:shadow-neon-blue-glow transition-all duration-300" glowColor="blue">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-neon-purple flex items-center justify-center">
                            <TrendingUp className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold gradient-text mb-3">
                          ROI in Depth
                        </h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple mb-4"></div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          Where traditional platforms chase seconds of attention, Discord delivers loops of interaction—higher participation, deeper loyalty.
                        </p>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="relative"
                    >
                      <Card className="h-full text-center hover:shadow-neon-purple-glow transition-all duration-300" glowColor="purple">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-cyber-blue flex items-center justify-center">
                            <Gamepad2 className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent">
                          Gaming Synergy
                        </h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-neon-purple to-cyber-blue mb-4"></div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          Tailored for studios: Integrate UEFN experiences seamlessly, making your brand a playable force in gaming communities.
                        </p>
                      </Card>
                    </motion.div>
                    </div>
                  </SectionContainer>
                </div>
              </Container>
                </div>
            </SectionWrapper>


            {/* Testimonials Section */}
            <SectionWrapper id="testimonials" className="hidden md:block py-20 relative">
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <Container className="relative z-10">
                {/* Hidden: Trusted by Industry Leaders heading and description */}

                {/* Hidden: Testimonials Carousel */}

                {/* Removed: Coming Soon banner */}

                {/* Companies Section - Part of Testimonials */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Companies Who Trust Us
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Industry leaders and innovative startups across gaming, tech, and entertainment trust us for excellence in community engagement
                  </p>
                </motion.div>

                {/* Company Logo Carousel */}
                <div className="relative overflow-hidden py-8" style={{ height: '360px' }}>
                  {/* Fade masks on edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0B18] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0B18] to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="absolute inset-0 flex items-center gap-8 py-4"
                    animate={{ x: [0, -(220 + 32) * companies.length] }} // Move exactly one full set of companies
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    style={{ width: `${(220 + 32) * companies.length * 2}px` }} // Width for 2 sets
                  >
                    {/* Create seamless infinite loop */}
                    {[...companies, ...companies].map((company, index) => {
                      const cardColor = index % 2 === 0 ? 'blue' : 'purple';
                      const glowClass = cardColor === 'purple' ? 'hover:shadow-neon-purple-glow' : 'hover:shadow-neon-blue-glow';
                      
                      return (
                      <motion.div
                        key={`${company.id}-${index}`}
                        className="flex-shrink-0"
                        style={{ width: '220px', height: '280px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card
                            className={`h-full cursor-pointer p-0 flex flex-col transition-all duration-300 ${glowClass}`}
                            glowColor={cardColor}
                        onClick={() => {
                          if (company.link !== '#') {
                            window.open(company.link, '_blank');
                          }
                        }}
                      >

                        {/* Company Logo Area - Larger logos to fill most of the card */}
                        <div className="flex items-center justify-center" style={{ height: '220px' }}>
                          {company.logoUrl ? (
                            <img
                              src={company.logoUrl}
                              alt={`${company.name} logo`}
                              className="w-full h-full object-contain transition-all duration-300 rounded-2xl"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                const container = target.parentElement;
                                if (container) {
                                  // Hide the broken image and show fallback
                                  target.style.display = 'none';
                                  const fallback = document.createElement('div');
                                  fallback.className = 'text-6xl font-bold transition-colors duration-300 text-gray-400';
                                  fallback.textContent = company.displayName.charAt(0);
                                  container.appendChild(fallback);
                                }
                              }}
                            />
                          ) : (
                            <div className="text-6xl font-bold transition-colors duration-300 text-gray-400 group-hover:text-white">
                              {company.displayName.charAt(0)}
                            </div>
                          )}
                        </div>

                        {/* Company Name - Bottom section */}
                        <div className="flex items-center justify-center transition-all duration-300 p-4">
                          <p className="transition-colors duration-300 text-base font-medium text-center text-gray-300">
                            {company.name}
                          </p>
                        </div>
                      </Card>
                      </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </Container>
            </SectionWrapper>

            {/* CTA/Contact Section */}
            <SectionWrapper id="contact" className="py-20 relative">
              <div className="absolute inset-0 pointer-events-none z-[1] hidden md:block" style={{
                backgroundImage: "url('/hex-bg-white.png')",
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'fixed',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.055) 12.5%, rgba(0,0,0,0.01) 25%, rgba(0,0,0,0.01) 75%, rgba(0,0,0,0.055) 87.5%, rgba(0,0,0,0.1) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.055) 12.5%, rgba(0,0,0,0.01) 25%, rgba(0,0,0,0.01) 75%, rgba(0,0,0,0.055) 87.5%, rgba(0,0,0,0.1) 100%)',
                opacity: 1
              }}></div>
              <Container className="relative z-[10]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Make a Splash?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Let's build something extraordinary together
                  </p>
                </motion.div>

                {/* 2-Panel Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Left Panel - Invitation Copy */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-cyber-blue">
                        Brands Ready to Dominate
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Whether you're launching in Fortnite, building massive Discord communities, or creating the next viral gaming experience, we specialize in turning bold ideas into reality.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-white">
                        Perfect For:
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3 flex-shrink-0"></span>
                          Fortnite brands looking to launch epic events
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3 flex-shrink-0"></span>
                          Gaming companies building engaged communities
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3 flex-shrink-0"></span>
                          Startups ready to disrupt the gaming space
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3 flex-shrink-0"></span>
                          Brands wanting to create viral moments
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-white">
                        Let's Connect
                      </h4>
                      <p className="text-gray-300 mb-4">
                        Drop us a line through the form or reach out on social media. We're always up for discussing game-changing ideas.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://discord.gg/modulix"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0789.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0789-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0067.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0408.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9758 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                          </svg>
                          Discord
                        </a>
                        <a
                          href="https://x.com/ModulixSolution"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                          <svg width="16" height="16" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                          </svg>
                          X
                        </a>
                        <a
                          href="https://www.linkedin.com/company/modulixsolution"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Panel - Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <ContactForm />
                  </motion.div>
                </div>
              </Container>
            </SectionWrapper>

            {/* FAQ Section */}
            <SectionWrapper id="faq" className="py-20 bg-deeper-blue/60 relative">
              <div className="absolute inset-0 pointer-events-none z-[1] hidden md:block" style={{
                backgroundImage: "url('/hex-bg.png')",
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'fixed',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 12.5%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 87.5%, rgba(0,0,0,0.5) 100%)',
                opacity: 1
              }}></div>
              <Container className="relative z-[10]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Everything you need to know about transforming your Discord community
                  </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqs.has(index);
                    const isBlue = index % 2 === 0;
                    const accentColor = isBlue ? '#00D4FF' : '#A855F7';
                    const glowClass = isBlue ? 'hover:shadow-neon-blue-glow' : 'hover:shadow-neon-purple-glow';

                    return (
                      <Card
                        key={index}
                        hover={true}
                        glowColor={isBlue ? 'blue' : 'purple'}
                        className={`cursor-pointer transition-all duration-300 ${glowClass}`}
                        onClick={() => {
                          const newOpenFaqs = new Set(openFaqs);
                          if (newOpenFaqs.has(index)) {
                            newOpenFaqs.delete(index);
                          } else {
                            newOpenFaqs.add(index);
                          }
                          setOpenFaqs(newOpenFaqs);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <h3 
                            className="text-lg font-bold transition-colors duration-300"
                            style={{ color: isOpen ? accentColor : '#ffffff' }}
                          >
                            {faq.question}
                          </h3>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="transition-colors duration-300"
                            style={{ 
                              color: isOpen 
                                ? (isBlue ? '#A855F7' : '#00D4FF') // Purple arrow for blue cards, blue arrow for purple cards when open
                                : '#ffffff'
                            }}
                          >
                            ▼
                          </motion.span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: isOpen ? 1 : 0,
                            height: isOpen ? 'auto' : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div 
                            className="mt-4 w-full h-0.5 rounded-full"
                            style={{
                              background: isBlue 
                                ? 'linear-gradient(90deg, #00D4FF, #A855F7)'
                                : 'linear-gradient(90deg, #A855F7, #00D4FF)'
                            }}
                          />
                          <div className="mt-4 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </Card>
                    );
                  })}
                </div>
              </Container>
            </SectionWrapper>
          </main>

          <Footer />
        </div>
    </>
  );
}