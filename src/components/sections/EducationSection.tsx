import { motion } from 'motion/react';
import { education } from '../../data/education';
import { easeOut } from '../../lib/animation';
import { SectionHeading } from '../ui/SectionHeading';

export function EducationSection() {
  return <section id="education" className="section-wrap relative z-[1] scroll-mt-24 py-28 sm:py-40">
    <SectionHeading index="06" title="Education" note="A FOUNDATION FOR WHAT COMES NEXT." />
    <div className="divide-y divide-paper/15 border-y border-paper/15">
      {education.map((item, index) => <motion.article key={item.school} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .07, ease: easeOut }} className="grid gap-3 py-6 sm:grid-cols-[60px_1fr_220px] sm:items-center sm:py-8">
        <span className="mono text-[10px] text-clay">0{index + 1}</span>
        <div><h3 className="display text-xl sm:text-2xl">{item.school}</h3><p className="mt-2 text-xs text-muted">{item.qualification}</p></div>
        <span className="mono text-[9px] text-faint sm:text-right">{item.dates}</span>
      </motion.article>)}
    </div>
  </section>;
}
