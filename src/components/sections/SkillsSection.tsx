import { marqueeSkills, skillGroups } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';

const loop = [...marqueeSkills, ...marqueeSkills];

export function SkillsSection() {
  return <section id="skills" className="relative z-[1] overflow-hidden border-y border-paper/10 bg-surface py-24 sm:py-32">
    <div className="section-wrap"><SectionHeading index="05" title="Tools of the trade" note="A WORKING SET, ALWAYS GROWING." /></div>
    <div className="marquee space-y-3 py-3" aria-label="Technology skills">
      {[false, true].map((reverse) => <div key={String(reverse)} className={`marquee-track gap-3 ${reverse ? 'marquee-reverse' : ''}`} aria-hidden="true">
        {loop.map((skill, index) => <span key={`${skill}-${index}`} className="display rounded-full border border-paper/15 px-5 py-3 text-xl text-paper/80 sm:px-7 sm:text-2xl">{skill}<span className="ml-6 text-clay">/</span></span>)}
      </div>)}
    </div>
    <div className="section-wrap mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
      {skillGroups.map((group, index) => <div key={group.title} className="border-t border-paper/15 pt-4">
        <div className="flex items-center justify-between"><h3 className="display text-xl">{group.title}</h3><span className="mono text-[9px] text-clay">0{index + 1}</span></div>
        <div className="mt-4 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="rounded-full bg-paper/[.045] px-3 py-2 text-xs text-muted">{skill}</span>)}</div>
      </div>)}
    </div>
  </section>;
}
