import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const MediaOpsCaseStudy: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Media Operations Automation Success"
      client="Global Advertising Agency"
      industry="Media & Advertising"
      challenge="The client's media operations team was overwhelmed with manual reporting, budget tracking, and campaign optimization tasks. They needed a solution that could automate routine tasks, provide real-time insights, and help optimize campaign performance across multiple channels."
      solution="We developed a comprehensive MediaOps automation platform that integrates with major ad networks, automates report generation, and provides AI-driven budget optimization. The solution includes custom LLM-powered brief generation, real-time performance monitoring, and automated anomaly detection. The platform also features a user-friendly dashboard for campaign management and optimization."
      results={[
        {
          metric: "Reporting Time Saved",
          value: "70%"
        },
        {
          metric: "Campaign ROI Improvement",
          value: "35%"
        },
        {
          metric: "Budget Efficiency",
          value: "28%"
        }
      ]}
      testimonial={{
        quote: "ByteBrain's MediaOps platform has transformed our operations. The automated reporting and AI-driven insights have freed up our team to focus on strategy and creativity, while the budget optimization has delivered significant ROI improvements.",
        author: "James Wilson",
        role: "Media Operations Director"
      }}
    />
  );
};

export default MediaOpsCaseStudy; 