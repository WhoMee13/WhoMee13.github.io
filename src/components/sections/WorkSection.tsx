import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, type Project } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';

export function WorkSection({ onOpen }: { onOpen: (project: Project) => void }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!section.current || !track.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      if (!section.current || !track.current) return;
      const context = gsap.context(() => {
        const distance = () => Math.max(0, track.current!.scrollWidth - window.innerWidth + 48);
        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }, section);
      return () => context.revert();
    });
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => media.revert();
  }, []);
  return <section ref={section} id="work" className="relative z-[1] min-h-[100svh] scroll-mt-0 overflow-hidden bg-surface py-12 sm:flex sm:flex-col sm:justify-center sm:py-7">
    <div className="section-wrap"><SectionHeading index="03" title="Selected work" note="A FEW THINGS BUILT WITH CARE." compact /></div>
    <div className="work-viewport">
      <div ref={track} className="work-track">
        {projects.map((project) => <ProjectCard key={project.number} project={project} onOpen={onOpen} />)}
      </div>
    </div>
  </section>;
}
