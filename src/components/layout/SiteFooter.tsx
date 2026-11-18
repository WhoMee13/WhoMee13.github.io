import { ArrowDown } from 'lucide-react';
import { profile } from '../../data/profile';

export function SiteFooter() {
  return <footer className="section-wrap relative z-[1] flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
    <span className="mono text-[9px] text-faint">{profile.copyright}</span>
    <a href="#top" className="mono inline-flex items-center gap-2 text-[9px] text-paper/80 hover:text-clay">Back to top <ArrowDown className="rotate-180" size={12} /></a>
  </footer>;
}
