'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function ContactForm() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '1bb2a588-01c0-4ef3-9776-ee8fd5e691f2');
    formData.append('from_name', 'Modulix Solutions Website');
    formData.append('subject', 'New Contact Form Submission - Modulix Solutions');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully! We\'ll get back to you soon.');
        event.currentTarget.reset();
      } else {
        console.log('Error', data);
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.log('Error', error);
      setResult('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResult('');
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto"
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <input type="hidden" name="redirect" value="https://modulixsolutions.com/contact-confirmed" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-input w-full"
          placeholder="Your name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="form-input w-full"
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          className="form-textarea w-full"
          placeholder="Tell us about your project..."
          disabled={isSubmitting}
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {result && (
        <div className={`text-center mt-4 p-3 rounded-lg ${
          result.includes('successfully')
            ? 'bg-green-900/20 text-green-400 border border-green-500/30'
            : result === 'Sending...'
            ? 'bg-blue-900/20 text-blue-400 border border-blue-500/30'
            : 'bg-red-900/20 text-red-400 border border-red-500/30'
        }`}>
          {result}
        </div>
      )}

      </form>
    </motion.div>
  );
}

