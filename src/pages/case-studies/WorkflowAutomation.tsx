import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const WorkflowAutomationCaseStudy: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Transforming Document Processing with AI Agents"
      client="Global Financial Services Provider"
      industry="Financial Services"
      challenge="The client was struggling with a manual document processing workflow that required multiple hand-offs between departments, leading to delays, errors, and high operational costs. Their existing system couldn't handle the increasing volume of documents, and manual verification was becoming a bottleneck."
      solution="We implemented a multi-agent AI system that automates the entire document processing workflow. The solution includes intelligent document classification, data extraction, verification, and routing. Each agent specializes in a specific task and communicates with others through a secure orchestration layer. The system integrates with existing enterprise systems and includes a comprehensive dashboard for monitoring and management."
      results={[
        {
          metric: "Processing Time Reduction",
          value: "65%"
        },
        {
          metric: "Error Rate Reduction",
          value: "92%"
        },
        {
          metric: "Cost Savings",
          value: "$2.1M/year"
        }
      ]}
      testimonial={{
        quote: "ByteBrain's AI solution has transformed our document processing operations. The multi-agent system has not only reduced our processing time but also improved accuracy significantly. The ROI has been exceptional.",
        author: "Sarah Chen",
        role: "Head of Operations"
      }}
      pdfUrl="/case-studies/workflow-automation.pdf"
    />
  );
};

export default WorkflowAutomationCaseStudy; 