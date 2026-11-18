import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { easeOut } from '../../lib/animation';
import { magneticMove, resetMagnetic } from '../../lib/magnetic';

export function HeroSection() {
  const reduce = useReducedMotion();
  const nameParts = profile.name.trim().split(/\s+/);
  const familyName = nameParts.pop();
  const givenName = nameParts.join(' ');
  return <section id="top" className="grain relative z-[1] flex min-h-[780px] items-end overflow-hidden pb-16 pt-32 supports-[height:100svh]:min-h-[100svh] sm:pb-20">
    <div className="section-wrap relative z-10 w-full">
      <div className="grid items-end gap-y-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-x-10">
        <div className="relative z-10">
          <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: easeOut }} className="mb-9 flex items-center gap-3">
            <span className="h-px w-9 bg-clay" /><span className="mono text-[10px] text-muted">{profile.location}</span>
          </motion.div>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .22, duration: .8 }} className="mono mb-4 text-[10px] text-clay">PORTFOLIO · KATHMANDU</motion.p>
          <motion.h1 initial={reduce ? false : { opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: 1.1, ease: easeOut }} className="display relative z-10 max-w-[1100px] text-[clamp(3.5rem,10.5vw,8.6rem)] font-medium leading-[.82] tracking-[-.085em]">
            {givenName}<br /><span className="text-clay">{familyName}</span>
          </motion.h1>
          <div className="mt-10 grid max-w-2xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><p className="display text-2xl text-paper/85 sm:text-3xl">{profile.role}</p><p className="mt-3 max-w-md text-sm leading-7 text-muted">{profile.intro}</p>
              <div className="mono mt-5 inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-2 text-[9px] text-paper/75"><span className="h-1.5 w-1.5 rounded-full bg-clay" />{profile.stackLine}</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#work" onPointerMove={magneticMove} onPointerLeave={resetMagnetic} className="group inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3.5 text-xs font-semibold text-ink transition-transform hover:scale-[1.03]">View Work <ArrowDownRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
              <a href="#contact" onPointerMove={magneticMove} onPointerLeave={resetMagnetic} className="inline-flex items-center gap-3 rounded-full border border-paper/25 px-5 py-3.5 text-xs text-paper transition-colors hover:border-clay hover:text-clay">Get in Touch <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="mt-14 flex items-center justify-between border-t border-paper/15 pt-4">
            <span className="mono text-[9px] text-faint">Scroll to explore</span><ArrowDown size={15} className="animate-bounce text-clay" />
            <span className="mono hidden text-[9px] text-faint sm:block">NEPAL · UTC +05:45</span>
          </div>
        </div>
        <div className="hero-stage pointer-events-none absolute right-[-14%] top-[2%] z-0 h-[70%] w-[96%] opacity-30 sm:right-[-4%] lg:right-0 lg:-top-16 lg:-bottom-6 lg:h-auto lg:w-[46%] lg:opacity-100">
          <span className="hero-halo" aria-hidden="true" />
          <span className="hero-ring" aria-hidden="true" />
          <span className="hero-ring hero-ring--b" aria-hidden="true" />
          <span className="hero-figure">
            <img src="/images/assets/hero-image1.png" alt="Nishith Shrestha playing guitar" width={339} height={735} fetchPriority="high" className="hero-portrait" />
          </span>
          <span className="mono absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap text-[8px] text-faint lg:block">OFF THE CLOCK · KATHMANDU</span>
        </div>
      </div>
    </div>
  </section>;
}
