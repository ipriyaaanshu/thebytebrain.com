import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Research & Products', id: 'research' },
    { label: 'Press & Media', id: 'press' },
    { label: 'Insights', id: 'insights' },
    { label: 'Team', id: 'team' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <Brain className="h-8 w-8 text-[#00C9B1]" />
              <div className="absolute inset-0 bg-[#00C9B1] opacity-20 blur-md"></div>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-[#2D2868]' : 'text-white'
            }`}>
              ByteBrain
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#00C9B1] ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#00C9B1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#00B5A3] transition-colors ml-4"
            >
              Let's Discuss Your AI Vision
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#00C9B1] font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-3 bg-[#00C9B1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#00B5A3] transition-colors"
              >
                Let's Discuss Your AI Vision
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;