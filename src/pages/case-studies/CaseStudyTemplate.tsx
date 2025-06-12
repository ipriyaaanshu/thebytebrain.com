import React from 'react';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CaseStudyTemplateProps {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  pdfUrl?: string;
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  title,
  client,
  industry,
  challenge,
  solution,
  results,
  testimonial,
  pdfUrl
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2D2868] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Solutions
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[#00C9B1] font-medium">{industry}</span>
              <h1 className="text-4xl font-bold text-[#2D2868] mt-2">{title}</h1>
              <p className="text-xl text-gray-600 mt-2">Client: {client}</p>
            </div>
            <div className="flex gap-4">
              {pdfUrl && (
                <button
                  onClick={() => window.open(pdfUrl, '_blank')}
                  className="flex items-center bg-[#00C9B1] text-white px-4 py-2 rounded-lg hover:bg-[#00B5A3] transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </button>
              )}
              <button
                onClick={() => {
                  navigator.share({
                    title,
                    text: `Check out this case study: ${title}`,
                    url: window.location.href,
                  });
                }}
                className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#2D2868] mb-4">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#2D2868] mb-4">Our Solution</h2>
            <p className="text-gray-700 leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FAFAFA] rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#2D2868] mb-8">Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#00C9B1] mb-2">
                  {result.value}
                </div>
                <div className="text-gray-600">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {testimonial && (
          <div className="bg-gradient-to-r from-[#2D2868] to-[#4C46A0] rounded-2xl p-8 text-white">
            <blockquote className="text-xl italic mb-4">"{testimonial.quote}"</blockquote>
            <div className="font-medium">{testimonial.author}</div>
            <div className="text-white/80">{testimonial.role}</div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CaseStudyTemplate; 