"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <section id="about" className="py-24 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-48 h-64 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute top-12 right-0 w-56 h-72 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Technology event"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="absolute bottom-0 left-12 w-52 h-68 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Community networking"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Spacer for layout */}
            <div className="h-96"></div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Building the Future of Tech Together
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tech Bastic is more than just a community - we&#39;re a movement
                of passionate individuals who believe in the power of
                collaboration and continuous learning.
              </p>
              <p className="text-lg text-gray-600">
                Since our founding, we&#39;ve connected thousands of developers,
                designers, and tech enthusiasts across the globe, creating
                opportunities for growth, innovation, and meaningful
                relationships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Learn
                </h3>
                <p className="text-gray-600">
                  Access cutting-edge workshops, tutorials, and resources
                  curated by industry experts.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Network
                </h3>
                <p className="text-gray-600">
                  Connect with like-minded professionals and build lasting
                  relationships in tech.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
