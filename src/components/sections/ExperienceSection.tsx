import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../../data/experience';
import { easeOut } from '../../lib/animation';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  const line = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!line.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(line.current, { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: line.current?.parentElement, start: 'top 72%', end: 'bottom 75%', scrub: .7 },
      });
    });
    return () => context.revert();
  }, []);
  return <section id="experience" className="section-wrap relative z-[1] scroll-mt-24 py-28 sm:py-40">
    <SectionHeading index="04" title="Experience" note="THE WORK, THE COLLABORATION, THE CONTINUOUS LEARNING." />
    <div className="relative ml-2 space-y-14 border-l border-white/15 pl-7 sm:ml-8 sm:space-y-20 sm:pl-12">
      <div ref={line} className="timeline-line absolute -left-px top-0 h-full w-px bg-[#01332b]" />
      {experience.map((entry, index) => <motion.article key={entry.title + entry.dates} initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: index * .08, ease: easeOut }} className="relative grid gap-5 md:grid-cols-[.7fr_1.3fr] md:gap-12">
        <span className="absolute -left-[33px] top-1 h-2 w-2 rounded-full border border-[#01332b] bg-[#08090b] sm:-left-[53px]" />
        <div><span className="section-kicker">{entry.dates}</span><h3 className="display mt-3 text-2xl leading-tight sm:text-3xl">{entry.title}</h3><p className="mt-2 text-sm text-[#aaa9a3]">{entry.company}</p><p className="mono mt-2 text-[9px] text-[#737570]">{entry.location}</p></div>
        <ul className="space-y-3">{entry.points.map((point) => <li className="flex gap-3 text-sm leading-6 text-[#a9aaa4]" key={point}><span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-[#01332b]" />{point}</li>)}</ul>
      </motion.article>)}
    </div>
  </section>;
}
