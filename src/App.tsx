import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Certifications } from './components/certifications/Certifications';
import { ResumeSection } from './components/resume/ResumeSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="portfolio-app">
        {/* Top Sticky Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <ResumeSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
