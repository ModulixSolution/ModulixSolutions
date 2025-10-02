import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import Button from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = async () => {
    if (!audioContext) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(ctx);

      // Create ambient synth sound
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.setValueAtTime(220, ctx.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 2);

      setIsAudioEnabled(true);
    } else {
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus management for accessibility
      element.focus({ preventScroll: true });
    }
    setIsMenuOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      role="banner"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            className="text-2xl font-bold logo-font text-cyber-blue cursor-pointer neon-text bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded px-2 py-1"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
            onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('hero'))}
            aria-label="Modulix Solutions - Go to home section"
          >
            MODULIX
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('hero')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('hero'))}
              className="text-white hover:text-cyber-blue transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded px-2 py-1"
              aria-label="Navigate to home section"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('services'))}
              className="text-white hover:text-cyber-blue transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded px-2 py-1"
              aria-label="Navigate to services section"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
              className="text-white hover:text-cyber-blue transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded px-2 py-1"
              aria-label="Navigate to contact section"
            >
              Contact
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              onKeyDown={(e) => handleKeyDown(e, toggleAudio)}
              className="text-white hover:text-cyber-blue transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded"
              aria-label={`Toggle ambient audio ${isAudioEnabled ? 'off' : 'on'}`}
              aria-pressed={isAudioEnabled}
            >
              {isAudioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleAudio}
              onKeyDown={(e) => handleKeyDown(e, toggleAudio)}
              className="text-white hover:text-cyber-blue transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded"
              aria-label={`Toggle ambient audio ${isAudioEnabled ? 'off' : 'on'}`}
              aria-pressed={isAudioEnabled}
            >
              {isAudioEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
              className="text-white hover:text-cyber-blue transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded p-1"
              aria-label={`${isMenuOpen ? 'Close' : 'Open'} mobile menu`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('hero'))}
                className="text-white hover:text-cyber-blue transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded px-2 py-1"
                aria-label="Navigate to home section"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('services'))}
                className="text-white hover:text-cyber-blue transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded px-2 py-1"
                aria-label="Navigate to services section"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
                className="text-white hover:text-cyber-blue transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded px-2 py-1"
                aria-label="Navigate to contact section"
              >
                Contact
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
