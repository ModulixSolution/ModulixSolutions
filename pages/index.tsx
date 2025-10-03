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
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHoveringTestimonials, setIsHoveringTestimonials] = useState(false);

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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    [
      { title: 'Scalable Ad Services', description: '', iconKey: 'Bot', isHeader: true },
      { title: 'Automated Ads via Bots', description: 'Deploy intelligent bots for seamless, conversation-embedded placements across active servers—delivering high-frequency, authentic exposure that blends effortlessly into daily chats, scaling with minimal oversight.', iconKey: 'Bot' },
      { title: 'Network Ads Across Servers', description: 'Tap into curated Discord networks for targeted, incentive-aligned visibility; we handle placements, ensuring genuine interactions while sharing success with community owners.', iconKey: 'Network' },
    ],
    [
      { title: 'Managed Campaigns', description: '', iconKey: 'Target', isHeader: true },
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
      { title: 'Premium Builds', description: '', iconKey: 'MessageCircle', isHeader: true },
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
      id: 'drying',
      name: 'Drying Games',
      displayName: 'DRYING',
      link: 'https://discord.gg/drying',
      accentColor: 'cyan',
      logoUrl: '/companies/drying-logo.png',
    },
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
      id: 'nda-company-1',
      name: 'AAA Studio',
      displayName: '?',
      link: '#',
      accentColor: 'gray',
      isNDA: true,
      logoUrl: '/companies/nda-logo.png',
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
    {
      id: 'nda-company-2',
      name: 'Major Agency',
      displayName: '?',
      link: '#',
      accentColor: 'gray',
      isNDA: true,
      logoUrl: '/companies/nda-logo.png',
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
        <title>Modulix Solutions - Discord Community Management & Gaming Brand Advertising</title>
        <meta name="description" content="Transform Discord into revenue-generating communities with authentic gaming brand advertising, UEFN integrations, and community management for studios and brands." />
        <meta name="keywords" content="Discord community management, gaming server advertising, UEFN marketing, Discord bot advertising, gaming community engagement, Discord marketing campaigns, gaming brand promotion, community building, Discord server management, Fortnite advertising, Discord ad network, gaming community growth, Discord advertising agency" />
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
                "https://linkedin.com/company/modulix-solutions"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen">
        <ParticleBackground />
        <Header />

          <main>
            {/* Hero Section */}
            <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/20 z-0"></div>


              <Parallax
                bgImage="https://source.unsplash.com/random/1920x1080/?gaming,discord"
                strength={300}
              >
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
                    Craft authentic, scalable engagements that transform fleeting interactions into enduring brand loyalty—empowering gaming studios and brands to own the conversation in the heart of gaming's digital universe.
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
              </Parallax>
            </SectionWrapper>

            {/* About Us Section */}
            <SectionWrapper id="about" className="py-20 bg-deeper-blue/30">
              <Container>
                <RowContainer>
                  {/* Left side - Visual */}
                  <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative h-96 lg:h-full flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-dark-navy to-deeper-blue rounded-lg relative overflow-hidden">
                        {/* Hexagonal network nodes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-32 h-32 border-2 border-neon-purple rounded-full opacity-30"></div>
                            <div className="absolute -top-8 left-8 w-16 h-16 border-2 border-neon-blue rounded-full opacity-40"></div>
                            <div className="absolute -bottom-8 right-8 w-16 h-16 border-2 border-neon-purple rounded-full opacity-40"></div>
                            <div className="absolute top-8 -left-8 w-12 h-12 border-2 border-neon-cyan rounded-full opacity-50"></div>
                            <div className="absolute bottom-8 -right-8 w-12 h-12 border-2 border-neon-blue rounded-full opacity-50"></div>
                            {/* Connecting lines */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg width="200" height="200" className="absolute opacity-20">
                                <line x1="100" y1="40" x2="60" y2="80" stroke="url(#gradient)" strokeWidth="1"/>
                                <line x1="100" y1="40" x2="140" y2="80" stroke="url(#gradient)" strokeWidth="1"/>
                                <line x1="60" y1="80" x2="100" y2="120" stroke="url(#gradient)" strokeWidth="1"/>
                                <line x1="140" y1="80" x2="100" y2="120" stroke="url(#gradient)" strokeWidth="1"/>
                                <line x1="100" y1="120" x2="60" y2="160" stroke="url(#gradient)" strokeWidth="1"/>
                                <line x1="100" y1="120" x2="140" y2="160" stroke="url(#gradient)" strokeWidth="1"/>
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00D4FF" />
                                    <stop offset="100%" stopColor="#A855F7" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Particle effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - Content */}
                  <div className="w-full lg:w-1/2 lg:pl-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Modulix: Architects of Discord's Gaming Frontier
                      </h2>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300 mb-6 leading-relaxed"
                      >
                        Born from the shadows of UEFN's creative labs, Modulix Solutions is a covert collective of game developers and strategists. We bridge brands and Discord's vibrant ecosystems with seamless, native integrations—transforming servers into owned galaxies of engagement and retention.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300 mb-8 leading-relaxed"
                      >
                        Our edge? A modular playbook forged in world-building fires—scalable, insight-driven tactics that nail cultural fit and deliver impact, sidestepping the clutter of legacy ads.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} size="lg">
                          Explore Our Vision
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </RowContainer>
              </Container>
            </SectionWrapper>

            {/* Value Propositions Section */}
            <SectionWrapper id="value-props" className="py-20 bg-deeper-blue/30">
              <Container>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Discord Drives Superior ROI
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Beyond fleeting impressions to owned universes—where your brand lives indefinitely, builds lasting relationships, and delivers measurable results that traditional platforms can't match
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <Card className="h-full text-center" glowColor="mixed">
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
                    <Card className="h-full text-center" glowColor="mixed">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-cyber-blue flex items-center justify-center">
                          <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold gradient-text mb-3">
                        Conversational Retention
                      </h3>
                      <div className="w-full h-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple mb-4"></div>
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
                    <Card className="h-full text-center" glowColor="mixed">
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
                    <Card className="h-full text-center" glowColor="mixed">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-cyber-blue flex items-center justify-center">
                          <Gamepad2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold gradient-text mb-3">
                        Gaming Synergy
                      </h3>
                      <div className="w-full h-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple mb-4"></div>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Tailored for studios: Integrate UEFN experiences seamlessly, making your brand a playable force in gaming communities.
                      </p>
                    </Card>
                  </motion.div>
                </div>
              </Container>
            </SectionWrapper>

            {/* Services Section */}
            <SectionWrapper id="services" className="py-20">
              <Parallax
                bgImage="https://source.unsplash.com/random/1920x1080/?abstract,tech"
                strength={200}
              >
                <div className="py-20">
                  <Container>
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
                  <Card className="mb-12" hover={false}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-3xl font-bold text-cyber-blue">
                        Scalable Ad Services
                      </h3>
                    </motion.div>
                    <div className="service-brackets">
                      <RowContainer>
                        <Card className="flex-1" glowColor="mixed">
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
                        <Card className="flex-1" glowColor="mixed">
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
                  </Card>

                  {/* Managed Campaigns */}
                  <Card className="mb-12" hover={false}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-3xl font-bold text-cyber-blue">
                        Managed Campaigns
                      </h3>
                    </motion.div>
                    <div className="service-brackets space-y-8">
                      <RowContainer>
                        <Card className="flex-1" glowColor="mixed">
                          <div className="flex items-center mb-3">
                            <Target className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Tailored Community Selection
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Leverage proprietary insights on interests, demographics, and cultural resonance to match your brand with the perfect servers—predicting performance before launch.
                          </p>
                        </Card>
                        <Card className="flex-1" glowColor="mixed">
                          <div className="flex items-center mb-3">
                            <Gamepad2 className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Immersive Ad Formats
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            From sponsored gaming tournaments and explosive giveaways to UGC challenges and bespoke Discord Activities, we craft touchpoints like announcements, pinned events, and chat insertions that feel organic.
                          </p>
                        </Card>
                      </RowContainer>
                      <RowContainer>
                        <Card className="flex-1" glowColor="mixed">
                          <div className="flex items-center mb-3">
                            <Palette className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Bespoke Creative Strategy
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Develop community-first narratives with native visuals and hooks; extend top performers to Reddit and beyond for amplified reach.
                          </p>
                        </Card>
                        <Card className="flex-1" glowColor="mixed">
                          <div className="flex items-center mb-3">
                            <Settings className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              End-to-End Execution
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Full-cycle management: From brief intake and approvals to flawless rollout and post-campaign debriefs, freeing you to focus on strategy.
                          </p>
                        </Card>
                      </RowContainer>
                      <RowContainer>
                        <Card className="flex-1" glowColor="mixed">
                          <div className="flex items-center mb-3">
                            <TrendingUp className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Comprehensive Analytics
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Real-time dashboards tracking impressions, engagements, conversions, and brand lift—proving ROI with uplift studies included standard.
                          </p>
                        </Card>
                        <Card className="flex-1" glowColor="mixed">
                          <div className="flex items-center mb-3">
                            <Shield className="w-6 h-6 text-cyber-blue mr-3" />
                            <h4 className="text-xl font-semibold gradient-text">
                              Trusted Brand Safety
                            </h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            Onboard vetting, AI-moderated environments, and dedicated oversight ensure activations align with platform rules and community vibes.
                          </p>
                        </Card>
                      </RowContainer>
                    </div>
                  </Card>

                  {/* Premium Builds */}
                  <Card className="mb-12" hover={false}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-3xl font-bold text-cyber-blue">
                        Premium Builds
                      </h3>
                    </motion.div>
                    <div className="service-brackets">
                      <RowContainer>
                        <Card className="flex-1" glowColor="mixed">
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
                        <Card className="flex-1" glowColor="mixed">
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
                  </Card>
                </div>
              </Container>
                </div>
              </Parallax>
            </SectionWrapper>

            {/* Testimonials Section */}
            <SectionWrapper id="testimonials" className="py-20 bg-deeper-blue/30">
              <Container>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Real results from real partnerships—see how we've transformed Discord communities for gaming studios and brands
                  </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div
                  className="relative overflow-hidden py-4"
                  style={{ height: '400px' }}
                >
                  {/* Fade masks on edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121325] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121325] to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="absolute inset-0 flex items-center gap-8 py-4"
                    animate={{
                      x: [-(450 + 32) * testimonials.length, 0],
                    }}
                    transition={{
                      duration: isHoveringTestimonials ? 10000 : 45, // Very slow when hovering (effectively paused)
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    style={{ width: `${(450 + 32) * testimonials.length * 2}px` }}
                  >
                    {/* Create seamless infinite loop */}
                    {[...testimonials, ...testimonials].map((testimonial, index) => {
                      // Calculate opacity based on position for fade effect
                      const totalWidth = (450 + 32) * testimonials.length * 2;
                      const cardCenter = (index * (450 + 32)) + 225; // 450/2 = 225
                      const containerCenter = 400; // Approximate center of visible area
                      const distanceFromCenter = Math.abs(cardCenter % totalWidth - containerCenter);
                      const maxDistance = 800; // Distance at which opacity starts decreasing
                      const opacity = Math.max(0.95, 1 - (distanceFromCenter / maxDistance));

                      return (
                        <motion.div
                          key={`${testimonial.id}-${index}`}
                          className="flex-shrink-0"
                          style={{ width: '450px' }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            className="h-full p-6"
                            glowColor={testimonial.accentColor as 'blue' | 'purple' | 'mixed'}
                            onMouseEnter={() => setIsHoveringTestimonials(true)}
                            onMouseLeave={() => setIsHoveringTestimonials(false)}
                          >
                          {/* Header section with avatar, name, stars, role */}
                          <div className="flex items-start mb-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-6">
                              <img
                                src={testimonial.avatarUrl}
                                alt={`${testimonial.name} avatar`}
                                className="w-full h-full object-cover border-2 border-cyber-blue/30"
                              />
                            </div>

                            <div className="flex-1 pt-2">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                                <div className="flex">
                                  {[...Array(5)].map((_, starIndex) => (
                                    <Star
                                      key={starIndex}
                                      className={`w-5 h-5 ${
                                        starIndex < testimonial.rating
                                          ? 'text-yellow-400 fill-yellow-400'
                                          : 'text-gray-600'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>

                              <div>
                                <span className="text-sm text-gray-400">
                                  {testimonial.role} at {testimonial.company}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Review text spanning full width */}
                          <div
                            className="text-gray-300 leading-relaxed overflow-y-auto project-scroll"
                            style={{
                              maxHeight: '200px',
                              overflowY: testimonial.content.length > 300 ? 'auto' : 'visible'
                            }}
                            onWheel={testimonial.content.length > 300 ? handleReviewScroll : undefined}
                          >
                            "{testimonial.content}"
                          </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Companies Section - Part of Testimonials */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Companies Who Trust Us
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Trusted by industry leaders and innovative startups across gaming and tech
                  </p>
                </motion.div>

                {/* Company Logo Carousel */}
                <div className="relative overflow-hidden py-4" style={{ height: '320px' }}>
                  {/* Fade masks on edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121325] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121325] to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="absolute inset-0 flex items-center gap-12 py-4"
                    animate={{ x: [0, -(220 + 48) * companies.length] }} // Move exactly one full set of companies
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    style={{ width: `${(220 + 48) * companies.length * 2}px` }} // Width for 2 sets
                  >
                    {/* Create seamless infinite loop */}
                    {[...companies, ...companies].map((company, index) => (
                      <motion.div
                        key={`${company.id}-${index}`}
                        className={`group relative rounded-xl transition-all duration-300 cursor-pointer flex-shrink-0 ${
                          company.isNDA
                            ? "bg-white/2 border border-white/5 opacity-40 hover:opacity-60"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                        } ${!company.isNDA && getAccentColors(company.accentColor).glow}`}
                        style={{ height: '280px', width: '220px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: company.isNDA ? 0.4 : 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => {
                          if (!company.isNDA && company.link !== '#') {
                            window.open(company.link, '_blank');
                          }
                        }}
                      >
                        {/* NDA Badge for locked companies */}
                        {company.isNDA && (
                          <div className="absolute top-3 right-3 z-10">
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                              NDA
                            </span>
                          </div>
                        )}

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
                                  fallback.className = `text-6xl font-bold transition-colors duration-300 ${
                                    company.isNDA
                                      ? "text-gray-600 group-hover:text-gray-500"
                                      : "text-gray-400 group-hover:text-white"
                                  }`;
                                  fallback.textContent = company.displayName.charAt(0);
                                  container.appendChild(fallback);
                                }
                              }}
                            />
                          ) : (
                            <div className={`text-6xl font-bold transition-colors duration-300 ${
                              company.isNDA
                                ? "text-gray-600 group-hover:text-gray-500"
                                : "text-gray-400 group-hover:text-white"
                            }`}>
                              {company.displayName.charAt(0)}
                            </div>
                          )}
                        </div>

                        {/* Company Name - Bottom section */}
                        <div className={`flex items-center justify-center transition-all duration-300 ${
                          company.isNDA
                            ? "bg-gray-900/30 group-hover:bg-gray-800/40"
                            : "bg-gray-800/50 group-hover:bg-gray-700/50"
                        }`} style={{ height: '60px' }}>
                          <p className={`transition-colors duration-300 text-base font-medium text-center ${
                            company.isNDA
                              ? "text-gray-600 group-hover:text-gray-500"
                              : "text-gray-400 group-hover:text-white"
                          }`}>
                            {company.isNDA ? `${company.name} (Coming Soon)` : company.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Container>
            </SectionWrapper>

            {/* CTA/Contact Section */}
            <SectionWrapper id="contact" className="py-20">
              <Container>
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
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="text-cyber-blue hover:text-white transition-colors duration-300"
                        >
                          Twitter
                        </a>
                        <a
                          href="#"
                          className="text-cyber-blue hover:text-white transition-colors duration-300"
                        >
                          Discord
                        </a>
                        <a
                          href="#"
                          className="text-cyber-blue hover:text-white transition-colors duration-300"
                        >
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
            <SectionWrapper id="faq" className="py-20">
              <Container>
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
                    const [isHovered, setIsHovered] = useState(false);

                    return (
                      <Card
                        key={index}
                        hover={false}
                        className={`cursor-pointer transition-all duration-300 ${
                          isHovered
                            ? 'shadow-neon-blue ring-2 ring-cyber-blue/30'
                            : ''
                        }`}
                        onClick={() => {
                          const newOpenFaqs = new Set(openFaqs);
                          if (newOpenFaqs.has(index)) {
                            newOpenFaqs.delete(index);
                          } else {
                            newOpenFaqs.add(index);
                          }
                          setOpenFaqs(newOpenFaqs);
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className={`text-lg font-bold transition-colors duration-300 ${
                            isOpen ? 'text-cyber-blue' : 'text-white'
                          }`}>
                            {faq.question}
                          </h3>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className={`transition-colors duration-300 ${
                              isOpen ? 'text-neon-purple' : 'text-cyber-blue/70'
                            }`}
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
                          <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple"></div>
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