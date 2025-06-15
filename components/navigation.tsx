"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "#events", label: "Events" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQs" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">Tech Bastic</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ) : (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 group cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </motion.span>
                </Link>
              )
            )}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() =>
                window.open("https://discord.com/invite/MSRnjkHcxK", "_blank")
              }
            >
              Join Our Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span className="block w-full text-left py-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                )
              )}
              <Button
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() =>
                  window.open("https://discord.com/invite/MSRnjkHcxK", "_blank")
                }
              >
                Join Our Community
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
