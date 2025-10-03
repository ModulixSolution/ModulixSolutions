import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Container from './Container';

interface HeaderProps {
  simple?: boolean;
}

export default function Header({ simple = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fullNavItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' }
  ];

  const simpleNavItems = [
    { name: 'Home', href: '/' }
  ];

  const navItems = simple ? simpleNavItems : fullNavItems;

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Anchor link for same page scrolling
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For regular links, let the browser handle navigation
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-navy/80 backdrop-blur-md border-b border-cyber-blue/30"
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center cursor-pointer"
              >
                <span className="text-4xl font-bold logo-font text-white">
                  MODULIX
                </span>
              </motion.div>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-cyber-blue transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ) : (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white hover:text-cyber-blue transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyber-blue transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-cyber-blue/20 pt-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-white hover:text-cyber-blue transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link key={item.name} href={item.href}>
                    <div
                      onClick={() => setIsMenuOpen(false)}
                      className="text-left text-white hover:text-cyber-blue transition-colors duration-300 cursor-pointer"
                    >
                      {item.name}
                    </div>
                  </Link>
                )
              ))}
            </div>
          </motion.nav>
        )}
      </Container>
    </motion.header>
  );
}