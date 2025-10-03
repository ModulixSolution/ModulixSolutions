'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldValidity, setFieldValidity] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'name':
        return value.length >= 2;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      case 'message':
        return value.length >= 10;
      default:
        return false;
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    const isValid = validateField(field, value);
    setFieldValidity(prev => ({
      ...prev,
      [field]: isValid
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(event.currentTarget);

    // Web3Forms expects 'access_key', not 'apikey'
    formData.append('access_key', 'ac55144c-ed04-4d25-8b83-fe6847721ebf');
    formData.append('subject', 'New Contact Form Submission - Modulix Solutions');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        // Add CORS headers for debugging
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully! We\'ll get back to you soon.');
        event.currentTarget.reset();
        // Clear validation states on success
        setFieldValidity({ name: false, email: false, message: false });
      } else {
        console.log('Web3Forms Error:', data);
        setResult(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.log('Network Error:', error);
      setResult('Network error. Please check your connection and try again.');
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
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            required
            className="form-input w-full pr-10"
            placeholder="Your name"
            disabled={isSubmitting}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
          {fieldValidity.name && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Check className="w-5 h-5 text-green-400" />
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="form-input w-full pr-10"
            placeholder="your.email@example.com"
            disabled={isSubmitting}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          {fieldValidity.email && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Check className="w-5 h-5 text-green-400" />
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <div className="relative">
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="form-textarea w-full pr-10"
            placeholder="Tell us about your project..."
            disabled={isSubmitting}
            onChange={(e) => handleFieldChange('message', e.target.value)}
          />
          {fieldValidity.message && (
            <div className="absolute bottom-3 right-3">
              <Check className="w-5 h-5 text-green-400" />
            </div>
          )}
        </div>
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

