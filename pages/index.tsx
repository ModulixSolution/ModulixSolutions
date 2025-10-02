import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import RowContainer from '../components/RowContainer';
import ListContainer from '../components/ListContainer';
import SectionWrapper from '../components/SectionWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import ParticleBackground from '../components/ParticleBackground';
import LoadingScreen from '../components/LoadingScreen';
import TypingEffect from '../components/TypingEffect';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    [
      { title: 'Automated Ads', description: 'Seamless bot-driven placements in active conversations for authentic, high-frequency brand exposure.' },
      { title: 'Network Ads', description: 'Targeted reach in vibrant Discord communities, fostering genuine engagement through aligned incentives.' },
    ],
    [
      { title: 'Tailored Selection', description: 'Insights on interests, location, and cultural fit for optimal performance.' },
      { title: 'Immersive Formats', description: 'Tournaments, announcements, giveaways, UGC challenges, and custom Activities; natural touchpoints.' },
    ],
    [
      { title: 'Bespoke Creative', description: 'Native activations that resonate deeply, extending to platforms like Reddit.' },
      { title: 'End-to-End', description: 'From concept to insights, ensuring smooth delivery.' },
    ],
    [
      { title: 'Analytics', description: 'Track impressions, interactions, conversions, and uplift for proven impact.' },
      { title: 'Safety', description: 'Rigorous vetting, moderation, and oversight.' },
    ],
    [
      { title: 'Custom Builds', description: 'Tailored server designs to own conversations, build loyalty, and drive retention—full management or handover.' },
      { title: 'Moderation/Gaming', description: 'Vibrant 24/7 interactions and events. Specialized UEFN tie-ins for immersive brand experiences.' },
    ],
  ];

  const valueProps = [
    'Transform Discord into an owned hub for lasting relationships, not fleeting views.',
    'Elevate engagement and retention—where brands thrive in conversations.',
    'Instead of renting eyeballs on YouTube or TikTok, own the relationship with your audience.',
    'Ads become part of the conversation, turning spend into recurring impressions.',
  ];

  const testimonials = [
    { quote: 'Modulix turned our Discord vision into a loyalty powerhouse.', author: 'Gaming Brand Lead' },
    { quote: 'Seamless integrations that scaled our community overnight.', author: 'Studio Exec' },
    { quote: 'Professional execution with unmatched authenticity.', author: 'Brand Director' },
  ];

  const faqs = [
    { question: 'How do you select communities?', answer: 'Tailored matching via insights on interests, location, and fit.' },
    { question: 'What ad formats?', answer: 'Immersive options like tournaments, giveaways, and custom Activities.' },
    { question: 'Do you manage campaigns?', answer: 'End-to-end, from strategy to measurement.' },
    { question: 'What analytics?', answer: 'Comprehensive tracking of interactions and uplift.' },
    { question: 'Brand safety?', answer: 'Rigorous vetting and oversight.' },
    { question: 'Case studies?', answer: 'Get in touch for tailored examples.' },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Modulix Solutions - Discord Community Solutions for Brands</title>
        <meta name="description" content="Transform Discord into an owned hub for lasting relationships—authentic engagements for brands in gaming/UEFN communities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Modulix Solutions - Discord Community Solutions" />
        <meta property="og:description" content="Elevate engagement and retention beyond traditional platforms with authentic Discord integrations." />
        <meta property="og:type" content="website" />
      </Head>

      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <div className="min-h-screen">
          <ParticleBackground />
          <Header />

          <main>
            {/* Hero Section */}
            <SectionWrapper id="hero" className="min-h-screen flex items-center hex-pattern">
              <Container className="py-20">
                <RowContainer className="items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                      Unlock Discord's Passionate Communities:{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                        Authentic Engagements
                      </span>{' '}
                      for Brands That Build Loyalty.
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                      <TypingEffect
                        text="Transform Discord into an owned hub for lasting relationships—elevate engagement and retention beyond traditional platforms."
                        speed={50}
                      />
                    </div>
                    <Button onClick={scrollToContact} size="lg">
                      Discuss Your Project
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 mt-12 md:mt-0"
                  >
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg backdrop-blur-sm border border-neon-blue/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🚀</div>
                          <p className="text-gray-400">Hero Visual Placeholder</p>
                          <p className="text-sm text-gray-500 mt-2">Space network background image</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </RowContainer>
              </Container>
            </SectionWrapper>

            {/* Services Section */}
            <SectionWrapper id="services" className="py-20">
              <Container>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Comprehensive Discord Solutions
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    From automated advertising to custom community builds, we deliver authentic engagement that drives results.
                  </p>
                </motion.div>

                <ListContainer>
                  {services.map((serviceRow, rowIndex) => (
                    <RowContainer key={rowIndex}>
                      {serviceRow.map((service, serviceIndex) => (
                        <Card key={serviceIndex} className="flex-1" glowColor="mixed">
                          <h3 className="text-xl font-semibold text-neon-blue mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {service.description}
                          </p>
                        </Card>
                      ))}
                    </RowContainer>
                  ))}
                </ListContainer>
              </Container>
            </SectionWrapper>

            {/* Value Props Section */}
            <SectionWrapper className="py-20 bg-deeper-blue/30">
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
                </motion.div>

                <ListContainer>
                  {valueProps.map((prop, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-8 rounded-lg ${
                        index % 2 === 0
                          ? 'bg-dark-navy border border-neon-blue/20'
                          : 'bg-deeper-blue border border-neon-purple/20'
                      }`}
                    >
                      <p className="text-lg md:text-xl text-center leading-relaxed">
                        {prop}
                      </p>
                    </motion.div>
                  ))}
                </ListContainer>
              </Container>
            </SectionWrapper>

            {/* Testimonials Section */}
            <SectionWrapper className="py-20">
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
                </motion.div>

                <RowContainer>
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="flex-1 text-center" glowColor="blue">
                      <blockquote className="text-lg italic text-gray-300 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="text-neon-blue font-semibold">
                        — {testimonial.author}
                      </cite>
                    </Card>
                  ))}
                </RowContainer>
              </Container>
            </SectionWrapper>

            {/* FAQ Section */}
            <SectionWrapper className="py-20 bg-deeper-blue/30">
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
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} hover={false} className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-white">
                          {faq.question}
                        </h3>
                        <motion.span
                          animate={{ rotate: openFaq === index ? 180 : 0 }}
                          className="text-neon-blue"
                        >
                          ▼
                        </motion.span>
                      </div>
                      {openFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 text-gray-300"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </Card>
                  ))}
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
                    Tailored Solutions Await
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Ready to transform your brand's community engagement? Let's discuss your unique requirements.
                  </p>
                </motion.div>

                <ContactForm />
              </Container>
            </SectionWrapper>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}