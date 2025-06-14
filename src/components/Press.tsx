import React from 'react';
import { Newspaper, Award, Calendar, ExternalLink } from 'lucide-react';

const Press = () => {
  const pressItems = [
    {
      type: 'Featured Article',
      title: 'Revolutionary AI Simulation Platform Could Transform $350 Billion Clinical Trials Industry',
      publication: 'TheStreet',
      date: '2025-06-09',
      description: 'In-depth coverage of ByteBrain\'s patent-pending MEDRAIL platform and its potential to transform clinical trial optimization through advanced AI.',
      link: 'https://www.thestreet.com/crypto/newsroom/ai-simulation-platform-clinical-trials',
      featured: true
    },
    {
      type: 'Press Release',
      title: 'ByteBrain Introduces Advanced AI Solutions to Enhance Business Efficiency and Decision-Making',
      publication: 'Morningstar',
      date: '2025-04-01',
      description: 'Priyanshu Sharma explains how ByteBrain\'s AI solutions can help businesses optimize operations and improve decision-making.',
      link: 'https://www.morningstar.com/news/globe-newswire/9415043/bytebrain-introduces-advanced-ai-solutions-to-enhance-business-efficiency-and-decision-making'
    },
    {
      type: 'Press Release',
      title: 'Priyanshu Sharma Announces New Ethical AI Milestones Through ByteBrain\'s Human-Centered Innovations',
      publication: 'GlobeNewswire',
      date: '2025-04-11',
      description: 'Exclusive interview with ByteBrain CEO discussing the intersection of AI innovation and ethics.',
      link: 'https://www.globenewswire.com/news-release/2025/04/11/3059945/0/en/Priyanshu-Sharma-Announces-New-Ethical-AI-Milestones-Through-ByteBrain-s-Human-Centered-Innovations.html'
    },
    {
      type: 'Press Release',
      title: 'ByteBrain Launches MEDRAIL: AI System to Accelerate and Safeguard Clinical Trials',
      publication: 'GlobeNewswire',
      date: '2025-06-05',
      description: 'ByteBrain launches MEDRAIL, an AI-powered platform designed to support faster, safer, and more compliant clinical trials across the pharmaceutical industry.',
      link: 'https://www.globenewswire.com/news-release/2025/06/05/3094845/0/en/ByteBrain-Launches-MEDRAIL-AI-System-to-Accelerate-and-Safeguard-Clinical-Trials.html'
    },
    {
      type: 'Research Publication',
      title: 'MEDRAIL: MEDical Reinforcement-based Agentic Intelligence for Lifesciences',
      publication: 'Journal of Medical Internet Research Preprints',
      date: '2025-06-08',
      description: 'Peer-reviewed publication detailing ByteBrain\'s research contributions to healthcare AI systems.',
      link: 'https://preprints.jmir.org/preprint/78741'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Featured Article':
      case 'Press Release':
        return Newspaper;
      case 'Award Recognition':
        return Award;
      default:
        return Newspaper;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Featured Article':
        return 'bg-[#00C9B1] text-white';
      case 'Press Release':
        return 'bg-[#2D2868] text-white';
      case 'Founder Spotlight':
        return 'bg-purple-100 text-purple-800';
      case 'Award Recognition':
        return 'bg-yellow-100 text-yellow-800';
      case 'Research Publication':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="press" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2868] mb-4">
            Press & Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition, coverage, and thought leadership in AI innovation
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#00C9B1] to-[#2D2868] rounded-2xl p-8 text-white">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured Coverage
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  {pressItems[0].title}
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  {pressItems[0].description}
                </p>
                <div className="flex items-center text-white/80 text-sm mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(pressItems[0].date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <span>{pressItems[0].publication}</span>
                </div>
                <a 
                  href={pressItems[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[#2D2868] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Full Article
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="hidden lg:block ml-8">
                <div className="w-32 h-32 bg-white/10 rounded-xl flex items-center justify-center">
                  <Newspaper className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Press Items Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {pressItems.slice(1).map((item, index) => {
            const IconComponent = getTypeIcon(item.type);
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-100 rounded-lg mr-3">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                
                <h3 className="font-bold text-[#2D2868] mb-3 group-hover:text-[#00C9B1] transition-colors">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00C9B1] transition-colors"
                  >
                    {item.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm font-medium">
                    {item.publication}
                  </span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00C9B1] hover:text-[#2D2868] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Press;