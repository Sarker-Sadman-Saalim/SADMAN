import React, { useState, useEffect } from 'react';
import { CinematicCanvas } from './components/CinematicCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AIFocusSection } from './components/AIFocusSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);

  // Smooth scroll tracking
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (maxScroll > 0) {
            const rawProgress = scrollY / maxScroll;
            const clamped = Math.min(1, Math.max(0, rawProgress));
            setScrollProgress(clamped);
            const frameNum = Math.min(300, Math.max(1, Math.round(1 + clamped * 299)));
            setCurrentFrame(frameNum);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-obsidian text-titanium overflow-x-hidden selection:bg-crimson selection:text-white">
      {/* Background Scroll-Driven Canvas */}
      <CinematicCanvas scrollProgress={scrollProgress} />

      {/* Global Navigation HUD */}
      <Navbar currentFrame={currentFrame} />

      {/* Foreground Content Flow */}
      <main className="relative z-10 flex flex-col w-full">
        <HeroSection scrollProgress={scrollProgress} />
        <AboutSection />
        <AIFocusSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
