import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const RAGPlatformCaseStudy: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Enterprise Knowledge Management Revolution"
      client="Global Pharmaceutical Company"
      industry="Healthcare & Life Sciences"
      challenge="The client struggled with accessing and utilizing their vast repository of research papers, clinical trials, and regulatory documents. Their existing search systems were slow and often returned irrelevant results, making it difficult for researchers and compliance teams to find critical information quickly."
      solution="We implemented an enterprise-grade RAG platform with multi-tenant architecture and advanced security controls. The solution includes custom document processing pipelines, semantic search capabilities, and a graph-based knowledge system. The platform integrates with existing enterprise systems and provides detailed audit trails for compliance purposes."
      results={[
        {
          metric: "Search Response Time",
          value: "<300ms"
        },
        {
          metric: "Information Retrieval Accuracy",
          value: "92%"
        },
        {
          metric: "Research Time Saved",
          value: "40hrs/month"
        }
      ]}
      testimonial={{
        quote: "The RAG platform has transformed how our teams access and utilize knowledge. The speed and accuracy of information retrieval have significantly accelerated our research and compliance processes.",
        author: "Dr. Emily Chen",
        role: "Head of Research Operations"
      }}
    />
  );
};

export default RAGPlatformCaseStudy; 