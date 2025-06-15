'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    company: 'Tech Innovations',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
    rating: 5,
    content: 'TechBastic transformed my career. The community support and learning resources are incredible.',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'UX Designer',
    company: 'Design Studio Pro',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    rating: 5,
    content: 'The networking opportunities here are unmatched. I\'ve built lifelong friendships with fellow creatives.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'AI Solutions Inc',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    rating: 5,
    content: 'The workshops and events are top-notch. I\'ve learned cutting-edge technologies.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Frontend Developer',
    company: 'StartupXYZ',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    rating: 5,
    content: 'Amazing community that helped me transition from a different field into tech successfully.',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    rating: 5,
    content: 'The mentorship and guidance I received here was invaluable for my career growth.',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    role: 'DevOps Engineer',
    company: 'CloudTech',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    rating: 5,
    content: 'Great platform for learning and connecting with like-minded professionals.',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getCurrentTestimonials = () => {
    const current = [];
    for (let i = 0; i < 3; i++) {
      current.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return current;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real members who've transformed their careers with TechBastic
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="relative w-12 h-12 rounded-full overflow-hidden mr-3"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonials}
              className="group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonials}
              className="group"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}