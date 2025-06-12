import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Research from './components/Research';
import Press from './components/Press';
import Insights from './components/Insights';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkflowAutomationCaseStudy from './pages/case-studies/WorkflowAutomation';
import ComplianceSecurityCaseStudy from './pages/case-studies/ComplianceSecurity';
import RAGPlatformCaseStudy from './pages/case-studies/RAGPlatform';
import MediaOpsCaseStudy from './pages/case-studies/MediaOps';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Solutions />
              <Research />
              <Press />
              <Insights />
              <Team />
              <Contact />
            </main>
          } />
          <Route path="/case-studies/workflow-automation" element={<WorkflowAutomationCaseStudy />} />
          <Route path="/case-studies/compliance-security" element={<ComplianceSecurityCaseStudy />} />
          <Route path="/case-studies/rag-platform" element={<RAGPlatformCaseStudy />} />
          <Route path="/case-studies/media-ops" element={<MediaOpsCaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;