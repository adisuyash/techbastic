"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  community: [
    { name: "Join Community", href: "https://discord.com/invite/MSRnjkHcxK" },
    { name: "Events", href: "#events" },
    { name: "Members", href: "#" },
    { name: "Mentorship", href: "#" },
  ],
  resources: [
    { name: "Learning Paths", href: "#" },
    { name: "Workshops", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: FaTwitter, href: "https://twitter.com/techbastic", label: "Twitter" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/tech-bastic/",
    label: "LinkedIn",
  },
  { icon: FaGithub, href: "https://github.com/techbastic", label: "GitHub" },
  {
    icon: FaDiscord,
    href: "https://discord.com/invite/MSRnjkHcxK",
    label: "Discord",
  },
];

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription submitted");
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand and Newsletter */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-xl font-bold">Tech Bastic</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  An open-source community helping you to become a self-taught
                  developer! Join thousands of developers and designers building
                  the future together.
                </p>

                {/* Newsletter Signup */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 pr-4 py-3 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-4 capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline text-left"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Tech Bastic. All rights reserved.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
