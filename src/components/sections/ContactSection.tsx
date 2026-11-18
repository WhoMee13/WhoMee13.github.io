import { ArrowUpRight } from 'lucide-react';
import { profile, EMAIL } from '../../data/profile';
import { magneticMove, resetMagnetic } from '../../lib/magnetic';

const links = [
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}` },
  { label: 'Mail', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'GitHub', value: profile.github.replace(/^https?:\/\//, ''), href: profile.github },
  // { label: 'Portfolio', value: profile.portfolio.replace(/^https?:\/\//, ''), href: profile.portfolio },
  { label: 'LinkedIn', value: profile.linkedin.replace(/^https?:\/\//, ''), href: profile.linkedin },
];

export function ContactSection() {
  const emailAvailable = !EMAIL.startsWith('TODO');
  return <section id="contact" className="relative z-[1] scroll-mt-24 border-t border-paper/10 bg-surface py-24 sm:py-36">
    <div className="section-wrap">
      <div className="section-kicker">08 / 08 · CONTACT</div>
      <h2 className="display mt-7 max-w-5xl text-[clamp(3.5rem,10vw,9rem)] leading-[.88] tracking-[-.075em]">Let’s build<br /><span className="text-clay">something great.</span></h2>
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a onPointerMove={magneticMove} onPointerLeave={resetMagnetic} href={emailAvailable ? `mailto:${EMAIL}` : 'mailto:'} title={emailAvailable ? 'Send an email' : EMAIL} className="inline-flex items-center gap-3 rounded-full bg-clay px-6 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]">{emailAvailable ? 'Send a message' : 'Email · address to be added'}<ArrowUpRight size={16} /></a>
        <p className="mono max-w-xs text-[9px] leading-5 text-faint">{emailAvailable ? 'A note is always welcome.' : EMAIL}</p>
      </div>
      <div id="contact-details" className="mt-20 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => <a key={link.label} href={link.href} onPointerMove={magneticMove} onPointerLeave={resetMagnetic} target={link.label === 'Phone' ? undefined : '_blank'} rel="noreferrer" className="group border-t border-paper/15 py-4 transition-[transform,border-color] hover:border-clay">
          <span className="mono block text-[9px] text-faint">{link.label}</span>
          <span className="mt-3 flex items-center justify-between gap-2 text-xs text-paper/80">{link.value}<ArrowUpRight size={13} className="shrink-0 text-clay transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
        </a>)}
      </div>
    </div>
  </section>;
}
