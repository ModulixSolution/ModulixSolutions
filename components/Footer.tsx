import React from 'react';
import { MessageCircle, Twitter, Mail } from 'lucide-react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-deeper-blue border-t border-cyber-blue/30">
      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
          {/* Copyright - Far Left */}
          <div className="text-gray-400 text-xs text-center lg:text-left">
            © 2025 Modulix Solutions LLC
          </div>

          {/* Logo - Center */}
          <div className="flex items-center justify-center">
            <h3 className="text-4xl font-bold logo-font text-white">MODULIX</h3>
          </div>

          {/* Socials + Email Icon - Far Right */}
          <div className="flex items-center justify-center lg:justify-end space-x-4">
            <a
              href="mailto:info@modulixsolutions.com"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
              aria-label="Email us"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
              aria-label="Join our Discord"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}