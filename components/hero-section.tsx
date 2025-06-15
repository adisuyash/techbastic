'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const pills = [
  { text: 'Learn', color: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
  { text: 'Build', color: 'bg-orange-500', hoverColor: 'hover:bg-orange-600' },
  { text: 'Collaborate', color: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' }
];

export function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'Accelerate Your Tech Career';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Floating Pills */}
        <div className="flex justify-center space-x-4 mb-12">
          {pills.map((pill, i) => (
            <motion.div
              key={pill.text}
              className={`floating-pill ${pill.color} ${pill.hoverColor} text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 + 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-sm font-medium">{pill.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Main Heading with Typewriter Effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            An open-source community helping you to become a self-taught developer!
          </p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white group"
            onClick={() => window.open('https://discord.com/invite/MSRnjkHcxK', '_blank')}
          >
            Join our community
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 hover:bg-gray-50 group"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Events
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">150k+</div>
            <div className="text-sm text-gray-600">Community</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">$40k+</div>
            <div className="text-sm text-gray-600">Value</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600">Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">14+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}