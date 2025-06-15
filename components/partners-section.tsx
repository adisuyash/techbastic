'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const partners = [
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com' },
  { name: 'Spotify', logo: 'https://logo.clearbit.com/spotify.com' },
  { name: 'Airbnb', logo: 'https://logo.clearbit.com/airbnb.com' },
  { name: 'Uber', logo: 'https://logo.clearbit.com/uber.com' },
  { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com' },
  { name: 'GitHub', logo: 'https://logo.clearbit.com/github.com' },
  { name: 'Figma', logo: 'https://logo.clearbit.com/figma.com' },
  { name: 'Slack', logo: 'https://logo.clearbit.com/slack.com' },
  { name: 'Zoom', logo: 'https://logo.clearbit.com/zoom.us' },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our community members work at top companies worldwide, and these organizations trust us to help develop talent
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-sm font-semibold text-gray-600 group-hover:text-gray-900">${partner.name}</span>`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Partner with Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our network of partner companies to access top talent, host events, and contribute to the tech community's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group"
                onClick={() => window.open('https://discord.com/invite/MSRnjkHcxK', '_blank')}
              >
                Partner with Us
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}