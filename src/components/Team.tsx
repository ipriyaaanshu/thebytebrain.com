import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

/**
 * <Team />
 * ByteBrain – Founding Team & Culture section
 * ────────────────────────────────────────────
 * We currently operate as a lean, founder–led laboratory with no external
 * advisory board. If/when strategic advisors are added, expand the
 * `advisors` array and un‑comment the Advisory Board markup below.
 */

const Team = () => {
  const founders = [
    {
      name: 'Priyanshu Sharma',
      role: 'Co‑Founder & CEO – AI Consultant',
      bio: 'IEEE reviewer, Springer author, and inventor of MEDRAIL. Leads product strategy & multi‑agent R&D for clinical and enterprise AI.',
      image: '/Priyanshu_Headshot.jpg',
      achievements: [
        'AI Systems Architecture',
        'MEDRAIL Patent‑Pending Inventor',
        'AI Ethics Thought‑Leader',
        'IEEE Reviewer & Session Chair',
        'Published Author & Researcher',
        'Invited Hackathon Judge',
      ],
      links: {
        linkedin: 'https://www.linkedin.com/in/ipriyaaanshu/',
        email: 'priyanshu.sharma@thebytebrain.com',
      },
    },
    {
      name: 'Priyanshi Bhatnagar',
      role: 'Co‑Founder – AI Researcher',
      bio: 'Drives day‑to‑day R&D ops, scaling prototypes into production and ensuring ethical, sustainable AI deployments.',
      image: '/Priyanshi_Headshot.jpg',
      achievements: [
        'AI Research & Development',
        'Product Strategy Expert',
        'Operations Excellence',
        'R&D Project Leadership',
        'Published Author & Researcher',
        'Sustainable AI Advocate',
      ],
      links: {
        linkedin: 'https://www.linkedin.com/in/ipriyanshi/',
        email: 'priyanshi.bhatnagar@thebytebrain.com',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2868] mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the founders driving ByteBrain’s AI innovation
          </p>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2D2868] mb-8 text-center">
            Founding Team
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{founder.name}</h4>
                    <p className="text-[#00C9B1] font-medium">{founder.role}</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-[#2D2868] mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-[#00C9B1]" />
                      Key Achievements
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {founder.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-[#00C9B1] rounded-full mr-2" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={founder.links.linkedin}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${founder.links.email}`}
                      className="p-2 bg-[#00C9B1]/10 text-[#00C9B1] rounded-lg hover:bg-[#00C9B1]/20 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture & values */}
        <div className="bg-gradient-to-r from-[#00C9B1] to-[#2D2868] rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Our Culture & Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Innovation First</h4>
              <p className="text-white/90 text-sm">
                We prioritise breakthrough thinking and research‑driven solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Collaborative Excellence</h4>
              <p className="text-white/90 text-sm">
                Remote‑first culture fostering global collaboration and growth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ethical Leadership</h4>
              <p className="text-white/90 text-sm">
                Committed to responsible AI development and transparent practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
