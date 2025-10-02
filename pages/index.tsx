import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Head from 'next/head';
import type { NextPage } from 'next';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import RowContainer from '../components/RowContainer';
import ListContainer from '../components/ListContainer';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import InteractiveParallax from '../components/InteractiveParallax';
import ExplosiveReveal from '../components/ExplosiveReveal';

// Form validation schema
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Loading screen animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data: FormData) => {
    alert('Thanks for your message! We\'ll respond soon.');
    reset();
  };

  const services: Service[] = [
    {
      title: 'Automated Ads',
      description: 'Seamless bot-driven placements that integrate naturally into community conversations.',
      icon: '🤖'
    },
    {
      title: 'Network Ads',
      description: 'Targeted reach across multiple Discord communities with strategic placement.',
      icon: '🌐'
    },
    {
      title: 'Tailored Selection',
      description: 'Careful matching of brands with communities based on interests and engagement patterns.',
      icon: '🎯'
    },
    {
      title: 'Immersive Formats',
      description: 'Interactive tournaments, challenges, and gaming events that captivate audiences.',
      icon: '🎮'
    },
    {
      title: 'Bespoke Creative',
      description: 'Custom content activations designed specifically for Discord\'s unique environment.',
      icon: '🎨'
    },
    {
      title: 'End-to-End',
      description: 'Complete campaign management from concept to execution and analytics.',
      icon: '⚡'
    },
    {
      title: 'Analytics',
      description: 'Comprehensive tracking of impressions, engagement, and conversion metrics.',
      icon: '📊'
    },
    {
      title: 'Safety',
      description: 'Rigorous community vetting and content moderation for brand protection.',
      icon: '🛡️'
    },
    {
      title: 'Custom Builds',
      description: 'Tailored server designs and bot integrations for unique brand experiences.',
      icon: '🔧'
    },
    {
      title: 'Moderation/Gaming',
      description: 'Professional moderation services with UEFN tie-ins and gaming integrations.',
      icon: '🎯'
    }
  ];

  const valueProps: string[] = [
    'Transform Discord into more than just a communication platform—build lasting relationships that convert casual users into passionate brand advocates.',
    'Elevate engagement beyond traditional metrics. Instead of fleeting impressions, create meaningful interactions that foster genuine community loyalty.',
    'Move beyond renting audience attention. Own the conversation in dedicated spaces where your brand becomes part of the community fabric.',
    'Turn advertisements into community experiences. Each campaign becomes a shared story that strengthens bonds and builds authentic connections.'
  ];

  const testimonials: Testimonial[] = [
    {
      quote: 'Modulix turned our Discord vision into reality. Their gaming-focused approach perfectly captured our audience\'s passion for competitive play.',
      author: 'Sarah Chen',
      title: 'Community Manager, Apex Gaming Studios'
    },
    {
      quote: 'The UEFN integrations they built transformed our server into an extension of our game. Engagement metrics doubled within weeks.',
      author: 'Marcus Rodriguez',
      title: 'Marketing Director, Epic Ventures'
    },
    {
      quote: 'Finally, a partner that understands Discord\'s unique culture. Their authentic approach delivered results that traditional marketing never could.',
      author: 'Alex Thompson',
      title: 'Brand Manager, Pixel Forge'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How do you select communities for brand partnerships?',
      answer: 'We conduct thorough community analysis focusing on engagement rates, audience demographics, content themes, and cultural fit. Only communities that align with your brand values and target audience are considered.'
    },
    {
      question: 'What makes Discord advertising different from other platforms?',
      answer: 'Discord offers owned, dedicated spaces where brands can build genuine relationships rather than renting attention. Communities are built around shared interests, creating more authentic and lasting connections.'
    },
    {
      question: 'Do you work with gaming brands specifically?',
      answer: 'While we work with all brands, we specialize in gaming and have deep expertise in UEFN integrations, esports communities, and gaming culture. Our team understands the unique dynamics of gaming audiences.'
    },
    {
      question: 'How do you measure campaign success?',
      answer: 'We track comprehensive metrics including engagement rates, community growth, conversion tracking, sentiment analysis, and long-term retention. Success goes beyond immediate conversions to sustainable community building.'
    },
    {
      question: 'What\'s your approach to content moderation?',
      answer: 'We employ professional moderators and implement automated systems to ensure brand safety. All communities are vetted, and we maintain strict content guidelines to protect both brands and community members.'
    },
    {
      question: 'Can you integrate with our existing marketing stack?',
      answer: 'Absolutely. We provide detailed analytics exports, API integrations, and custom reporting that can feed into your existing marketing dashboards and attribution models.'
    }
  ];

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-grid">
          {Array.from({ length: 100 }, (_, i) => (
            <motion.div
              key={i}
              className="loading-pixel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * 0.01,
                duration: 0.1
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Modulix Solutions - Discord Community Marketing for Brands</title>
        <meta name="description" content="Transform Discord into owned hubs for lasting brand relationships through authentic gaming-focused engagements and UEFN integrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen" role="main">
        {/* Hero Section */}
        <SectionWrapper
          id="hero"
          className="flex items-center justify-center min-h-screen bg-dark-navy text-white relative overflow-hidden"
          bgImage="https://source.unsplash.com/random/1920x1080/?gaming,discord"
          strength={300}
          aria-labelledby="hero-heading"
        >
          {/* Interactive Parallax Background */}
          <InteractiveParallax />

          <Container className="relative z-10">
            <RowContainer className="items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                  tabIndex={-1}
                >
                  Unlock Discord's Passionate Communities:{' '}
                  <span className="text-cyber-blue">Authentic Engagements</span> for Brands That Build Loyalty
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Transform Discord into an owned hub for lasting relationships—elevate engagement and retention beyond traditional platforms.
                </p>
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Discuss Your Project
                </Button>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* 3D Discord Model Placeholder */}
                <div className="bg-gradient-to-br from-cyber-blue to-neon-pink p-8 rounded-lg shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💬</div>
                    <p className="text-white font-semibold">Interactive 3D Discord Server</p>
                    <p className="text-gray-300 text-sm">Hover to explore</p>
                  </div>
                </div>
              </motion.div>
            </RowContainer>
          </Container>
        </SectionWrapper>

        {/* Services Section */}
        <SectionWrapper id="services" className="py-20 bg-gray-50">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">
                Comprehensive Discord Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From automated advertising to custom server builds, we deliver end-to-end Discord marketing solutions.
              </p>
            </motion.div>

            <ListContainer>
              {[0, 1, 2, 3, 4].map((rowIndex) => (
                <RowContainer key={rowIndex}>
                  {services.slice(rowIndex * 2, (rowIndex * 2) + 2).map((service, index) => (
                    <ExplosiveReveal
                      key={service.title}
                      delay={rowIndex * 0.2 + index * 0.1}
                      direction={index % 2 === 0 ? 'left' : 'right'}
                    >
                      <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-dark-navy mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </motion.div>
                    </ExplosiveReveal>
                  ))}
                </RowContainer>
              ))}
            </ListContainer>
          </Container>
        </SectionWrapper>

        {/* Value Props Section */}
        <SectionWrapper className="py-20 bg-dark-navy text-white">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Discord <span className="text-cyber-blue">Transforms</span> Marketing
              </h2>
            </motion.div>

            <ListContainer>
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-lg ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-lg leading-relaxed">{prop}</p>
                </motion.div>
              ))}
            </ListContainer>
          </Container>
        </SectionWrapper>

        {/* Testimonials Section */}
        <SectionWrapper className="py-20 bg-gray-50">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">
                Trusted by Gaming Brands
              </h2>
            </motion.div>

            <RowContainer>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-dark-navy">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </RowContainer>
          </Container>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper className="py-20 bg-white">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <ListContainer>
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <summary className="font-semibold text-dark-navy text-lg mb-2">
                    {faq.question}
                  </summary>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </motion.details>
              ))}
            </ListContainer>
          </Container>
        </SectionWrapper>

        {/* Contact/CTA Section */}
        <SectionWrapper id="contact" className="py-20 bg-dark-navy text-white">
          <Container>
            <RowContainer className="items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tailored Solutions <span className="text-cyber-blue">Await</span>
                </h2>
                <p className="text-xl mb-8 text-gray-300">
                  Ready to transform your Discord presence? Let's discuss how we can build authentic community experiences that drive real results.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3"></span>
                    Strategic community matching
                  </p>
                  <p className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3"></span>
                    Custom UEFN integrations
                  </p>
                  <p className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyber-blue rounded-full mr-3"></span>
                    End-to-end campaign management
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gray-800 p-8 rounded-lg"
                  noValidate
                  aria-labelledby="contact-form-heading"
                >
                  <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>

                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-white mb-2 font-medium"
                    >
                      Name <span className="text-neon-pink" aria-label="required">*</span>
                    </label>
                    <input
                      {...register('name')}
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-colors"
                      placeholder="Your name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      required
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-neon-pink text-sm mt-1"
                        role="alert"
                        aria-live="polite"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-white mb-2 font-medium"
                    >
                      Email <span className="text-neon-pink" aria-label="required">*</span>
                    </label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue transition-colors"
                      placeholder="your@email.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      required
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-neon-pink text-sm mt-1"
                        role="alert"
                        aria-live="polite"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-white mb-2 font-medium"
                    >
                      Message <span className="text-neon-pink" aria-label="required">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue resize-none transition-colors"
                      placeholder="Tell us about your Discord community goals..."
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}
                      required
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-neon-pink text-sm mt-1"
                        role="alert"
                        aria-live="polite"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </RowContainer>
          </Container>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
};

export default Home;
