import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const ComplianceSecurityCaseStudy: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="AI-Powered KYC/AML Transformation"
      client="European Banking Group"
      industry="Banking & Compliance"
      challenge="The client faced increasing regulatory pressure and sophisticated fraud attempts. Their manual KYC/AML processes were slow, error-prone, and couldn't scale with growing transaction volumes. They needed a solution that could detect deep-fake documents and suspicious patterns while maintaining compliance with EU AI Act and banking regulations."
      solution="We developed a comprehensive AI-driven compliance platform that combines document verification, behavioral analysis, and risk scoring. The system uses advanced computer vision to detect document tampering, implements real-time transaction monitoring, and provides explainable AI decisions for regulatory compliance. The solution includes automated reporting tools and audit trails for regulatory requirements."
      results={[
        {
          metric: "Fraud Detection Rate",
          value: "94%"
        },
        {
          metric: "Processing Time",
          value: "85% Faster"
        },
        {
          metric: "Compliance Cost Reduction",
          value: "€1.8M/year"
        }
      ]}
      testimonial={{
        quote: "ByteBrain's AI solution has revolutionized our compliance operations. The system's ability to detect sophisticated fraud attempts while maintaining full regulatory compliance has been a game-changer for our organization.",
        author: "Dr. Michael Weber",
        role: "Chief Compliance Officer"
      }}
    />
  );
};

export default ComplianceSecurityCaseStudy; 