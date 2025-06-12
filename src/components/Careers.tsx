import React from 'react';
import { Briefcase, Users, Globe, Lightbulb, ArrowRight, Heart } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: 'Senior AI Research Engineer',
      department: 'Research & Development',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Lead research initiatives in multi-agent systems and contribute to patent-pending AI solutions.',
      requirements: ['PhD in AI/ML or equivalent experience', 'Published research in top-tier venues', 'Experience with reinforcement learning']
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Drive product strategy for enterprise AI solutions and guide research-to-product transitions.',
      requirements: ['5+ years in AI product management', 'Experience with enterprise software', 'Technical background preferred']
    },
    {
      title: 'Research Intern - AI Ethics',
      department: 'Research & Development',
      location: 'Remote',
      type: 'Internship',
      description: 'Contribute to cutting-edge research in AI ethics and compliance frameworks.',
      requirements: ['Currently pursuing advanced degree', 'Interest in AI ethics', 'Strong analytical skills']
    },
    {
      title: 'Machine Learning Engineer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      description: 'Build and scale AI systems for production deployment across various industries.',
      requirements: ['3+ years ML engineering experience', 'Cloud platform expertise', 'Python/PyTorch proficiency']
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere while collaborating with a global team of AI innovators.'
    },
    {
      icon: Lightbulb,
      title: 'Research Freedom',
      description: 'Dedicated time for personal research projects and publishing in top-tier venues.'
    },
    {
      icon: Users,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, conference attendance, and skill development programs.'
    },
    {
      icon: Heart,
      title: 'Impact-Driven Work',
      description: 'Work on projects that make a real difference in healthcare, compliance, and enterprise AI.'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800';
      case 'Internship':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="careers" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2868] mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us push the frontiers of AI research while building solutions that transform industries
          </p>
        </div>

        {/* Culture & Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2D2868] mb-8 text-center">
            Why ByteBrain?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C9B1] to-[#2D2868] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-[#2D2868] mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2D2868] mb-8 text-center">
            Open Positions
          </h3>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h4 className="text-xl font-bold text-[#2D2868] mr-4">{job.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span className="mr-4">{job.department}</span>
                      <Globe className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div>
                      <h5 className="font-semibold text-[#2D2868] mb-2">Key Requirements:</h5>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-gray-600 text-sm">
                            <div className="w-2 h-2 bg-[#00C9B1] rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto bg-[#00C9B1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#00B5A3] transition-colors flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#2D2868] to-[#4C46A0] rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Don't See Your Role?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            We're always looking for exceptional talent in AI research, engineering, and product development. 
            Send us your resume and let's explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#00C9B1] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00B5A3] transition-colors">
              Send Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2D2868] transition-colors">
              Join Our Talent Network
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;