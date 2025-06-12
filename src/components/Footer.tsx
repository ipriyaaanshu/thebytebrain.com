import React from 'react';
import { Brain, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { label: 'About', action: () => scrollToSection('about') },
      { label: 'Team', action: () => scrollToSection('team') },
      { label: 'Careers', action: () => scrollToSection('careers') },
      { label: 'Contact', action: () => scrollToSection('contact') }
    ],
    solutions: [
      { label: 'MEDRAIL', action: () => scrollToSection('research') },
      { label: 'RAG Systems', action: () => scrollToSection('research') },
      { label: 'Compliance Benchmark', action: () => scrollToSection('research') },
      { label: 'Media Automation', action: () => scrollToSection('solutions') }
    ],
    resources: [
      { label: 'Press Releases', action: () => scrollToSection('press') },
      { label: 'Blog & Insights', action: () => scrollToSection('insights') },
      { label: 'Newsletter', action: () => scrollToSection('insights') },
      { label: 'Research Papers', action: () => scrollToSection('research') }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/thebytebrain/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ipriyaaanshu', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@thebytebrain.com', label: 'Email' }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Brain className="h-8 w-8 text-[#00C9B1]" />
                <div className="absolute inset-0 bg-[#00C9B1] opacity-20 blur-md"></div>
              </div>
              <span className="text-xl font-bold">ByteBrain</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering AI research and consultancy, building intelligent solutions 
              that transform businesses and advance human potential.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-[#00C9B1] transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-[#00C9B1] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Research & Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-[#00C9B1] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-[#00C9B1] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2025 ByteBrain LLC. Built to pioneer the future of AI.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00C9B1] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00C9B1] transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00C9B1] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;