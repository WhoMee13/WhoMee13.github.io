import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

const links = [['About', '#about'], ['Work', '#work'], ['Experience', '#experience'], ['Contact', '#contact']];

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
      setHidden(y > 150 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
    <div className="scroll-progress fixed left-0 top-0 z-[60] h-[2px] w-full bg-clay" style={{ transform: `scaleX(${progress})` }} />
    <header className={`nav-bar fixed left-1/2 top-5 z-40 flex w-[calc(100%-32px)] max-w-[720px] -translate-x-1/2 items-center justify-between rounded-full border border-paper/10 bg-ink/80 px-3 py-2.5 backdrop-blur-xl sm:top-7 sm:px-5 ${hidden ? 'nav-hidden' : ''}`}>
      <a href="#top" className="display text-sm font-bold tracking-tight" aria-label={`${profile.name}, back to top`}>NS<span className="text-clay">.</span></a>
      <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-7">
        {links.map(([label, href]) => <a key={href} href={href} className="rounded-full px-1.5 py-1.5 text-[10px] text-paper/70 transition-colors hover:text-clay sm:px-0 sm:text-[11px]">{label}</a>)}
        <a href="#contact" className="whitespace-nowrap rounded-full bg-clay px-2.5 py-2 text-[10px] font-semibold text-ink transition-transform hover:scale-105 sm:px-4">Let’s talk <ArrowUpRight className="ml-1 inline" size={12} /></a>
      </nav>
    </header>
  </>;
}
