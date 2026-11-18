import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimationProvider } from './app/providers';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { Cursor } from './components/ui/Cursor';
import { Preloader } from './components/ui/Preloader';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { EducationSection } from './components/sections/EducationSection';
import { EmailSection } from './components/sections/EmailSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectModal } from './components/sections/ProjectModal';
import { WorkSection } from './components/sections/WorkSection';
import { SkillsSection } from './components/sections/SkillsSection';
import type { Project } from './data/projects';
import { useLenis } from './hooks/useLenis';

function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  useLenis();
  return <AnimationProvider>
    <a href="#main" className="fixed left-3 top-3 z-[70] -translate-y-20 rounded-full bg-clay px-4 py-2 text-xs font-semibold text-ink focus:translate-y-0">Skip to content</a>
    <SiteHeader />
    <Preloader />
    <main id="main" className="relative z-[1]">
      <HeroSection />
      <AboutSection />
      <WorkSection onOpen={setSelected} />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <EmailSection />
      <ContactSection />
    </main>
    <SiteFooter />
    <AnimatePresence>{selected && <ProjectModal key={selected.number} project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    <Cursor />
  </AnimationProvider>;
}

export default App;
