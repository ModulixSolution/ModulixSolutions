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
                "https://linkedin.com/company/modulix-solutions"
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
              </Parallax>
            </SectionWrapper>

            {/* About & Value Propositions Section */}
            <SectionWrapper id="about" className="py-20 bg-deeper-blue/60">
              <Container>
                {/* About Us Section */}
                <div className="mb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                  >
                    {/* Decorative element */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="w-24 h-24 border-2 border-neon-purple/30 rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 border-2 border-cyber-blue/40 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-neon-cyan/50 rounded-full"></div>
                          </div>
                        </div>
                        {/* Connecting lines */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg width="96" height="96" className="absolute opacity-30">
                            <line x1="48" y1="16" x2="24" y2="32" stroke="url(#about-gradient)" strokeWidth="1"/>
                            <line x1="48" y1="16" x2="72" y2="32" stroke="url(#about-gradient)" strokeWidth="1"/>
                            <line x1="24" y1="32" x2="48" y2="48" stroke="url(#about-gradient)" strokeWidth="1"/>
                            <line x1="72" y1="32" x2="48" y2="48" stroke="url(#about-gradient)" strokeWidth="1"/>
                            <line x1="48" y1="48" x2="24" y2="64" stroke="url(#about-gradient)" strokeWidth="1"/>
                            <line x1="48" y1="48" x2="72" y2="64" stroke="url(#about-gradient)" strokeWidth="1"/>
                            <defs>
                              <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00D4FF" />
                                <stop offset="100%" stopColor="#A855F7" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>

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
                  </SectionContainer>

                  {/* Managed Campaigns */}
                  <SectionContainer className="mb-12">
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
                  </SectionContainer>
                </div>
              </Container>
                </div>
              </Parallax>
            </SectionWrapper>

            {/* Testimonials Section */}
            <SectionWrapper id="testimonials" className="py-20 bg-deeper-blue/60">
              <Container>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Real results from real partnerships—revolutionizing Discord communities worldwide with measurable growth and authentic engagement
                  </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div
                  className="relative overflow-hidden mb-16 py-4"
                  style={{ height: '340px' }}
                >
                  {/* Fade masks on edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#151629] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#151629] to-transparent z-10 pointer-events-none" />

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
                          style={{ height : '280px', width: '450px' }}
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

                {/* Temporary Placeholder Banner */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-12 mt-8"
                >
                  <div className="bg-cyber-blue/20 border border-cyber-blue/40 rounded-lg p-4 text-center max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-cyber-blue" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-cyber-blue font-semibold text-sm uppercase tracking-wide">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      These testimonials are temporary placeholders. We're currently updating our website with accurate reviews from our valued clients.
                    </p>
                  </div>
                </motion.div>

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
                <div className="relative overflow-hidden py-4" style={{ height: '340px' }}>
                  {/* Fade masks on edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#151629] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#151629] to-transparent z-10 pointer-events-none" />

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
                    {[...companies, ...companies].map((company, index) => (
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
                          className={`h-full cursor-pointer p-0 flex flex-col ${company.isNDA ? 'opacity-40 hover:opacity-60' : ''}`}
                          glowColor={company.accentColor as 'blue' | 'purple' | 'mixed'}
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
                                    ? "text-gray-600"
                                    : "text-gray-400"
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
                            ? "bg-gray-900/30"
                            : "bg-gray-800/50"
                        }`} style={{ height: '60px' }}>
                          <p className={`transition-colors duration-300 text-base font-medium text-center ${
                            company.isNDA
                              ? "text-gray-600"
                              : "text-gray-400"
                          }`}>
                            {company.isNDA ? `${company.name} (Coming Soon)` : company.name}
                          </p>
                        </div>
                      </Card>
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
                          href="https://linkedin.com/company/modulixsolution"
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
            <SectionWrapper id="faq" className="py-20 bg-deeper-blue/60">
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

                    return (
                      <Card
                        key={index}
                        hover={true}
                        glowColor="mixed"
                        className="cursor-pointer"
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