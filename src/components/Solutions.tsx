import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Workflow,
  Shield,
  Database,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

/**
 * <Solutions />
 * ByteBrain – Consultancy Solutions section
 * ─────────────────────────────────────────
 * Offering cards mapped to the real consulting practices ByteBrain runs today.
 * Adjust copy or add/remove practices by editing the `solutions` array.
 */

const Solutions = () => {
  const navigate = useNavigate();
  
  const solutions = [
    {
      icon: Workflow,
      title: 'Agentic Workflow Automation',
      description:
        'Design & deploy multi‑agent pipelines that replace manual hand‑offs with autonomous decision loops—delivering 30‑60 % cycle‑time savings.',
      features: [
        'Process Discovery & ROI Model',
        'Custom Agent Orchestration',
        'API & RPA Integrations',
        'Ops Dashboard & Feedback Loops',
      ],
      color: 'from-[#00C9B1] to-[#00B5A3]',
      caseStudyPath: '/case-studies/workflow-automation'
    },
    {
      icon: Shield,
      title: 'AI‑Driven Compliance & Security',
      description:
        'Build defensible KYC/AML and policy‑monitoring stacks that detect deep‑fake docs & risky behaviour—aligned to EU AI Act and FDA/ICH guidance.',
      features: [
        'Synthetic Fraud Simulation',
        'Real‑time Document & ID Verification',
        'Risk Scoring & Explainability',
        'Regulatory Reporting Toolkit',
      ],
      color: 'from-[#2D2868] to-[#4C46A0]',
      caseStudyPath: '/case-studies/compliance-security'
    },
    {
      icon: Database,
      title: 'Enterprise RAG Platforms',
      description:
        'Isolation‑first vector & graph knowledge systems that surface trustworthy answers (<300 ms) across millions of documents & data points.',
      features: [
        'Ingestion Pipelines (PDF, Web, DB)',
        'Semantic & Hybrid Search',
        'Tenant‑Level ACL & Audit',
        'Query & Retrieval Evaluation Suite',
      ],
      color: 'from-[#00C9B1] to-[#2D2868]',
      caseStudyPath: '/case-studies/rag-platform'
    },
    {
      icon: BarChart3,
      title: 'MediaOps Automation Agents',
      description:
        'Connect to ad‑network APIs, auto‑generate briefs & decks, and optimise budget allocation—cutting reporting prep by up to 70 %.',
      features: [
        'Omni‑channel Data Connectors',
        'LLM‑Generated Briefs & Decks',
        'Performance & Anomaly Insights',
        'Smart Budget Recommendations',
      ],
      color: 'from-[#4C46A0] to-[#00C9B1]',
      caseStudyPath: '/case-studies/media-ops'
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D2868] mb-4">
            Consultancy Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerating business value through autonomous AI & intelligent automation
          </p>
        </div>

        {/* Solution grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-8">
                  {/* Card header */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} mr-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D2868]">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#00C9B1] rounded-full mr-3" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {solution.caseStudyPath && (
                    <button 
                      onClick={() => navigate(solution.caseStudyPath)}
                      className="group/btn flex items-center text-[#00C9B1] font-semibold hover:text-[#2D2868] transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;