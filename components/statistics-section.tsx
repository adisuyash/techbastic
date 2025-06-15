'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 150000, suffix: '+', label: 'Community Members', description: 'Active developers and designers' },
  { number: 40000, suffix: '+', label: 'Value Generated', prefix: '$', description: 'In career advancement' },
  { number: 100, suffix: '+', label: 'Partner Companies', description: 'Hiring from our community' },
  { number: 14, suffix: '+', label: 'Countries', description: 'Global presence' },
];

function CounterAnimation({ 
  target, 
  prefix = '', 
  suffix = '', 
  duration = 2000 
}: { 
  target: number; 
  prefix?: string; 
  suffix?: string; 
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ 
    threshold: 0.3, 
    triggerOnce: false // Changed to false so it triggers every time
  });

  useEffect(() => {
    if (!inView) {
      setCount(0); // Reset count when not in view
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gray-900">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how TechBastic has transformed careers and built connections across the globe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4">
                <CounterAnimation
                  target={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}