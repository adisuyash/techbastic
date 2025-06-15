'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';

const roadmaps = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Master HTML, CSS, JavaScript, React, and modern frontend tools',
    duration: '6-8 months',
    difficulty: 'Beginner to Advanced',
    students: 15420,
    rating: 4.8,
    topics: ['HTML & CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Learn server-side programming, databases, and API development',
    duration: '8-10 months',
    difficulty: 'Intermediate',
    students: 12350,
    rating: 4.7,
    topics: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Full Stack Development',
    description: 'Complete web development from frontend to backend',
    duration: '12-15 months',
    difficulty: 'Beginner to Advanced',
    students: 18750,
    rating: 4.9,
    topics: ['Frontend', 'Backend', 'Databases', 'DevOps', 'Testing', 'Deployment'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications',
    duration: '10-12 months',
    difficulty: 'Intermediate',
    students: 9840,
    rating: 4.6,
    topics: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'App Store'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Data Science & AI',
    description: 'Learn data analysis, machine learning, and artificial intelligence',
    duration: '15-18 months',
    difficulty: 'Advanced',
    students: 7650,
    rating: 4.8,
    topics: ['Python', 'Pandas', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'DevOps & Cloud',
    description: 'Master deployment, infrastructure, and cloud technologies',
    duration: '8-10 months',
    difficulty: 'Intermediate to Advanced',
    students: 6420,
    rating: 4.7,
    topics: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Monitoring'],
    color: 'from-teal-500 to-blue-500'
  }
];

export default function RoadmapsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Learning <span className="text-blue-600">Roadmaps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Structured learning paths designed by industry experts to help you master 
              the skills needed for your dream tech career. Start your journey today!
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white group"
              onClick={() => window.open('https://discord.com/invite/MSRnjkHcxK', '_blank')}
            >
              Join Community for Free Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap, index) => (
              <motion.div
                key={roadmap.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Header with Gradient */}
                <div className={`h-32 bg-gradient-to-r ${roadmap.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">{roadmap.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {roadmap.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {roadmap.rating}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {roadmap.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>Difficulty: {roadmap.difficulty}</span>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {roadmap.students.toLocaleString()} students
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {roadmap.topics.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{roadmap.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                    onClick={() => window.open('https://discord.com/invite/MSRnjkHcxK', '_blank')}
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community and get access to all roadmaps, mentorship, and exclusive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group"
                onClick={() => window.open('https://discord.com/invite/MSRnjkHcxK', '_blank')}
              >
                Join Discord Community
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 hover:bg-gray-50"
                onClick={() => window.open('https://github.com/techbastic', '_blank')}
              >
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}