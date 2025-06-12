import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'consultation'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create mailto link with form data
    const subject = `New Contact Form Submission - ${formData.interest}`;
    const body = `\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`.trim();
    const mailtoLink = `mailto:contact@thebytebrain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Reset form and show success after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'consultation'
      });
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'contact@thebytebrain.com',
      description: 'Get in touch for consultations and partnerships'
    },
    // {
    //   icon: Phone,
    //   title: 'Schedule a Call',
    //   info: '+1 (555) 123-4567',
    //   description: 'Direct line for urgent inquiries'
    // },
    {
      icon: MapPin,
      title: 'Headquarters',
      info: 'Sheridan, WY',
      description: 'Remote-first with global presence'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2868] mb-4">
            Let's Talk AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your vision and explore how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#2D2868] mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-[#00C9B1]/10 rounded-xl mr-4">
                    <contact.icon className="h-6 w-6 text-[#00C9B1]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2868] mb-1">{contact.title}</h4>
                    <p className="text-[#00C9B1] font-medium mb-1">{contact.info}</p>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Booking CTA */}
            <div className="bg-[#FAFAFA] rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-[#00C9B1] mr-3" />
                <h4 className="font-bold text-[#2D2868]">Schedule a Consultation</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Book a 30-minute strategy session to discuss your AI needs and explore potential solutions.
              </p>
              <a
                href="https://calendly.com/contact-thebytebrain/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2D2868] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4C46A0] transition-colors w-full sm:w-auto text-center"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#2D2868] mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C9B1] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C9B1] focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C9B1] focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C9B1] focus:border-transparent transition-colors"
                  >
                    <option value="consultation">AI Consultation</option>
                    <option value="research">Research Collaboration</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="career">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C9B1] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your AI vision and how we can help..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                    There was an error sending your message. Please try again or email us directly.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#00C9B1] text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#00B5A3]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;