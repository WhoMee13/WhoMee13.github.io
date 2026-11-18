import { motion } from 'motion/react';
import { profile, stats } from '../../data/profile';
import { easeOut } from '../../lib/animation';
import { SectionHeading } from '../ui/SectionHeading';
import { StatsCounter } from './StatsCounter';

export function AboutSection() {
  return <section id="about" className="section-wrap relative z-[1] scroll-mt-28 py-28 sm:py-40">
    <SectionHeading index="02" title="A little about me" note="BUILDING WITH CLARITY, FROM DATA TO DETAIL." />
    <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr] md:gap-24">
      <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8, ease: easeOut }} className="max-w-3xl text-lg leading-[1.9] text-paper/80 sm:text-xl">{profile.about}</motion.p>
      <div className="flex flex-col justify-between gap-10">
        <p className="mono text-[10px] leading-6 text-faint">{profile.educationNote}</p>
        <StatsCounter stats={stats} />
      </div>
    </div>
  </section>;
}
