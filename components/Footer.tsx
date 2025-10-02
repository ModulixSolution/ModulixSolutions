import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-deeper-blue border-t border-neon-blue/20">
      <Container className="py-12">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold logo-font text-neon-blue mb-2">MODULIX</h3>
            <p className="text-gray-400 text-sm">
              Discord community solutions for brands
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              aria-label="Join our Discord"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            <p>© 2025 Modulix Solutions LLC. All rights reserved.</p>
            <p className="mt-1">info@modulixsolutions.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}