'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    id: 1,
    title: 'AI & Machine Learning Workshop',
    date: '2024-02-15',
    time: '2:00 PM - 6:00 PM',
    location: 'San Francisco, CA',
    type: 'Workshop',
    attendees: 45,
    maxAttendees: 50,
    status: 'upcoming',
    description: 'Deep dive into the latest AI/ML frameworks and practical implementations.',
    lumaUrl: 'https://lu.ma/techbastic-ai-workshop',
  },
  {
    id: 2,
    title: 'Full Stack Development Bootcamp',
    date: '2024-02-22',
    time: '10:00 AM - 4:00 PM',
    location: 'New York, NY',
    type: 'Bootcamp',
    attendees: 78,
    maxAttendees: 80,
    status: 'upcoming',
    description: 'Build a complete web application from scratch using modern tech stack.',
    lumaUrl: 'https://lu.ma/techbastic-fullstack-bootcamp',
  },
  {
    id: 3,
    title: 'Tech Career Networking Night',
    date: '2024-03-01',
    time: '6:00 PM - 9:00 PM',
    location: 'Austin, TX',
    type: 'Networking',
    attendees: 120,
    maxAttendees: 150,
    status: 'upcoming',
    description: 'Connect with industry professionals and explore new opportunities.',
    lumaUrl: 'https://lu.ma/techbastic-networking-austin',
  },
  {
    id: 4,
    title: 'Mobile App Development Workshop',
    date: '2024-03-08',
    time: '1:00 PM - 5:00 PM',
    location: 'Seattle, WA',
    type: 'Workshop',
    attendees: 32,
    maxAttendees: 40,
    status: 'upcoming',
    description: 'Learn React Native and Flutter for cross-platform mobile development.',
    lumaUrl: 'https://lu.ma/techbastic-mobile-workshop',
  },
  {
    id: 5,
    title: 'DevOps & Cloud Infrastructure',
    date: '2024-03-15',
    time: '9:00 AM - 3:00 PM',
    location: 'Denver, CO',
    type: 'Workshop',
    attendees: 28,
    maxAttendees: 35,
    status: 'upcoming',
    description: 'Master Docker, Kubernetes, and cloud deployment strategies.',
    lumaUrl: 'https://lu.ma/techbastic-devops-workshop',
  },
  {
    id: 6,
    title: 'UX/UI Design Masterclass',
    date: '2024-03-22',
    time: '11:00 AM - 5:00 PM',
    location: 'Los Angeles, CA',
    type: 'Masterclass',
    attendees: 55,
    maxAttendees: 60,
    status: 'upcoming',
    description: 'Design thinking, prototyping, and user research methodologies.',
    lumaUrl: 'https://lu.ma/techbastic-ux-masterclass',
  },
];

const eventTypes = ['All', 'Workshop', 'Bootcamp', 'Networking', 'Masterclass'];

export function EventsSection() {
  const [selectedType, setSelectedType] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  const filteredEvents = selectedType === 'All' 
    ? events 
    : events.filter(event => event.type === selectedType);

  const handleFilterChange = (type: string) => {
    setIsLoading(true);
    setSelectedType(type);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getTypeColor = (type: string) => {
    const colors = {
      Workshop: 'bg-orange-100 text-orange-800',
      Bootcamp: 'bg-green-100 text-green-800',
      Networking: 'bg-purple-100 text-purple-800',
      Masterclass: 'bg-blue-100 text-blue-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join our hands-on workshops, networking events, and masterclasses designed to accelerate your tech journey
          </p>

          {/* Event Type Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {eventTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange(type)}
                className={`transition-all duration-300 ${
                  selectedType === type 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading Skeleton
            [...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))
          ) : (
            filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {formatDate(event.date)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {event.time}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees}/{event.maxAttendees} attendees
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                  onClick={() => window.open(event.lumaUrl, '_blank')}
                >
                  Register on lu.ma
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))
          )}
        </div>

        {filteredEvents.length === 0 && !isLoading && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600">No events found for the selected category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}