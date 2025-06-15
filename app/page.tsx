import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { StatisticsSection } from '@/components/statistics-section';
import { EventsSection } from '@/components/events-section';
import { FAQSection } from '@/components/faq-section';
import { PartnersSection } from '@/components/partners-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <TestimonialsSection />
      <EventsSection />
      <PartnersSection />
      <FAQSection />
      <Footer />
    </main>
  );
}