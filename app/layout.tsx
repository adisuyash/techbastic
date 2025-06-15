'use client';

import './globals.css';
import { Space_Mono } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { useEffect } from 'react';
import Lenis from 'lenis';

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>TechBastic - Learn, Build, Collaborate</title>
        <meta
          name="description"
          content="An open-source community helping you to become a self-taught developer!"
        />
        <meta
          name="keywords"
          content="technology, community, events, networking, learning, collaboration, open-source, self-taught, developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={spaceMono.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}