import React from 'react';
import {
  BookOpen,
  ArrowRight,
  Calendar,
  User,
  Mail,
} from 'lucide-react';

/**
 * <Insights />
 * ByteBrain – Insights & Thought‑Leadership blog roll
 * ──────────────────────────────────────────────────
 * Articles array populated with *actual* (or anonymised) press coverage,
 * product updates, and research posts as of June 2025.
 */

const Insights = () => {
  const articles = [
    {
      title:
        'AI Simulation Platform Could Transform $350 B Clinical Trials Industry',
      excerpt:
        'TheStreet covers MEDRAIL™, ByteBrain’s patent‑pending multi‑agent simulation engine that predicts safety risks and trims development costs.',
      author: 'TheStreet Financial Tech Times',
      date: '2025-06-09',
      category: 'Press Coverage',
      readTime: '6 min read',
      image:
        'https://images.pexels.com/photos/7163956/pexels-photo-7163956.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'ByteBrain Ships RAG‑as‑a‑Service 1.0',
      excerpt:
        'Our multi‑tenant Retrieval‑Augmented Generation platform is now GA, delivering sub‑300 ms answers across 100k‑document corpora.',
      author: 'ByteBrain Engineering',
      date: '2024-10-30',
      category: 'Product Update',
      readTime: '5 min read',
      image:
        '/case-studies/rag-service.png',
    },
    {
      title: 'Benchmarking KYC Systems Against AI‑Generated Forgeries',
      excerpt:
        'Inside our open evaluation suite that measures how leading compliance APIs fare against synthetic passports & IDs produced by GPT‑4o‑Vision.',
      author: 'Priyanshu Sharma',
      date: '2025-06-05',
      category: 'Compliance Research',
      readTime: '9 min read',
      image:
        '/case-studies/kyc-compliance.png',
    },
    {
      title: 'MediaOps Agent Enters Private Beta',
      excerpt:
        'Early adopters report 70 % faster briefing & reporting cycles with our automated campaign‑planning assistant for advertising agencies.',
      author: 'Priyanshi Bhatnagar',
      date: '2025-04-20',
      category: 'Beta Launch',
      readTime: '7 min read',
      image:
        'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Press Coverage':
        return 'bg-purple-100 text-purple-800';
      case 'Product Update':
        return 'bg-green-100 text-green-800';
      case 'Compliance Research':
        return 'bg-yellow-100 text-yellow-800';
      case 'Beta Launch':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="insights" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2868] mb-4">
            Insights &amp; Thought Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research breakthroughs, product milestones &amp; industry commentary
          </p>
        </div>

        {/* Featured article */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D2868]/20 to-[#00C9B1]/20" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      articles[0].category,
                    )}`}
                  >
                    {articles[0].category}
                  </span>
                  <span className="text-gray-500 text-sm ml-3">Featured</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#2D2868] mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{articles[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">
                    {new Date(articles[0].date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span>{articles[0].readTime}</span>
                </div>
                <button className="flex items-center text-[#00C9B1] font-semibold hover:text-[#2D2868] transition-colors group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      article.category,
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#2D2868] mb-3 group-hover:text-[#00C9B1] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-xs mb-4">
                  <User className="h-3 w-3 mr-1" />
                  <span className="mr-3">{article.author}</span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <button className="flex items-center text-[#00C9B1] font-medium text-sm hover:text-[#2D2868] transition-colors group">
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-[#2D2868] to-[#4C46A0] rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-[#00C9B1] mr-3" />
            <h3 className="text-2xl font-bold">Stay Ahead in AI</h3>
          </div>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to ByteBrain Insights and get research findings, product
            updates &amp; industry analysis delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00C9B1]"
            />
            <button className="bg-[#00C9B1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00B5A3] transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
