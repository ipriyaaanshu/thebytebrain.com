import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2D2868 0%, #1A1A1A 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00C9B1] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#00C9B1] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Neural Network Animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C9B1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2D2868" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Animated neural network lines */}
          <g stroke="url(#lineGradient)" strokeWidth="1" fill="none">
            <line x1="100" y1="200" x2="300" y2="150" className="animate-pulse">
              <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="150" x2="500" y2="250" className="animate-pulse">
              <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </line>
            <line x1="500" y1="250" x2="700" y2="180" className="animate-pulse">
              <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
            </line>
            <line x1="700" y1="180" x2="900" y2="220" className="animate-pulse">
              <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </line>
          </g>
          {/* Neural nodes */}
          <g fill="#00C9B1" opacity="0.6">
            <circle cx="100" cy="200" r="4" className="animate-pulse" />
            <circle cx="300" cy="150" r="4" className="animate-pulse" />
            <circle cx="500" cy="250" r="4" className="animate-pulse" />
            <circle cx="700" cy="180" r="4" className="animate-pulse" />
            <circle cx="900" cy="220" r="4" className="animate-pulse" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-6 w-6 text-[#00C9B1] mr-2" />
          <span className="text-[#00C9B1] font-medium text-sm uppercase tracking-wide">
            AI Innovation Lab & Consultancy
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Research-Driven AI Solutions.
          <br />
          <span className="text-[#00C9B1]">Real-World Impact.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          ByteBrain is a consultancy and AI research lab building innovative, 
          patent-pending AI systems that automate complex workflows and unlock business potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('research')}
            className="group bg-[#00C9B1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00B5A3] transition-all duration-300 flex items-center"
          >
            Explore Our Research
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollToSection('solutions')}
            className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2D2868] transition-all duration-300"
          >
            View Case Studies
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#00C9B1] rounded-full mr-2"></div>
            IEEE Reviewers
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#00C9B1] rounded-full mr-2"></div>
            Springer Nature Authors
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#00C9B1] rounded-full mr-2"></div>
            Patent-Pending Systems
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#00C9B1] rounded-full mr-2"></div>
            Media Featured
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;