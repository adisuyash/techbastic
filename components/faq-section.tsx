"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    id: 1,
    question: "How do I join the Tech Bastic community?",
    answer:
      'Joining Tech Bastic is completely free! Simply click the "Join Us" button and create your profile. You\'ll get instant access to our community platform, events, and resources.',
  },
  {
    id: 2,
    question: "What kind of events do you organize?",
    answer:
      "We organize a variety of events including workshops, bootcamps, networking sessions, masterclasses, and tech talks. All events are designed to help you learn new skills, build projects, and connect with fellow tech enthusiasts.",
  },
  {
    id: 3,
    question: "Are the events suitable for beginners?",
    answer:
      "Absolutely! We welcome members at all skill levels. Our events are clearly labeled with difficulty levels, and we have dedicated beginner-friendly sessions and mentorship programs.",
  },
  {
    id: 4,
    question: "How much do events cost?",
    answer:
      "Most of our community events are free for members. Some specialized workshops or bootcamps may have a small fee to cover materials and venue costs, but we keep everything as affordable as possible.",
  },
  {
    id: 5,
    question: "Can I host my own event or workshop?",
    answer:
      "Yes! We encourage community members to share their expertise. If you'd like to host an event, reach out to our team and we'll help you organize and promote it to our community.",
  },
  {
    id: 6,
    question: "Do you offer remote/online events?",
    answer:
      "Yes, we offer both in-person and online events. Many of our workshops and talks are hybrid, allowing both local and remote participation to accommodate our global community.",
  },
  {
    id: 7,
    question: "How can I stay updated on new events?",
    answer:
      "Once you join, you'll receive email notifications about upcoming events. You can also follow us on social media and check our events page regularly for the latest updates.",
  },
  {
    id: 8,
    question: "What programming languages and technologies do you cover?",
    answer:
      "We cover a wide range of technologies including JavaScript, Python, React, Node.js, AI/ML, mobile development, DevOps, UI/UX design, and emerging technologies. Our content evolves with industry trends.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColumnFAQs = filteredFAQs.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = filteredFAQs.filter((_, index) => index % 2 === 1);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about Tech Bastic community and
            events
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </motion.div>

        {filteredFAQs.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600">No FAQs found matching your search.</p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumnFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <Minus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumnFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (index + leftColumnFAQs.length) * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <Minus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
