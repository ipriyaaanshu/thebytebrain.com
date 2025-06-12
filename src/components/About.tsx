import React from 'react';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: '2 Founders. 1 Vision.', description: 'Endless Possibilities.' },
    { icon: Award, label: 'Multiple Patents', description: 'Patent-Pending Systems' },
    { icon: Lightbulb, label: 'Research-Driven', description: 'Innovation Focus' },
    { icon: Target, label: 'Real Impact', description: 'Production Solutions' }
  ];

  const badges = [
    'IEEE Reviewer',
    'Springer Nature Author',
    'Patent Pending AI Inventor',
    'Stevie Awards Judge'
  ];

  return (
    <section id="about" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2868] mb-4">
            About ByteBrain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where cutting-edge AI research meets practical business solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#2D2868] mb-6">
              From Vision to Reality
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              ByteBrain began as a bold vision to bridge the gap between groundbreaking AI research 
              and real-world applications. Today, we've evolved into both a premier AI consultancy 
              and an ambitious research lab, dedicated to creating patent-pending systems that 
              solve complex business challenges.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach combines deep technical expertise with practical business acumen, 
              ensuring that every solution we develop isn't just theoretically sound, but 
              delivers measurable impact in production environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in research-driven innovation that transforms how organizations operate, 
              making complex workflows accessible through intelligent automation and AI-powered insights.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="h-8 w-8 text-[#00C9B1] mb-4" />
                <h4 className="font-bold text-[#2D2868] mb-2">{stat.label}</h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-[#2D2868] mb-6 text-center">
            Recognition & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-[#00C9B1] to-[#2D2868] text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;