import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { EMAIL } from '../../data/profile';

type CopyStatus = 'idle' | 'copied' | 'error';

export function EmailSection() {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copyEmail = async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
        copied = true;
      }
    } catch {
      copied = false;
    }
    if (!copied) {
      const field = document.createElement('textarea');
      field.value = EMAIL;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      try {
        field.select();
        copied = document.execCommand('copy');
      } catch {
        copied = false;
      } finally {
        field.remove();
      }
    }
    setStatus(copied ? 'copied' : 'error');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus('idle'), 2400);
  };
  return <section id="email" className="relative z-[1] overflow-hidden border-y border-paper/10 bg-pine py-24 sm:py-32">
    <div aria-hidden="true" className="absolute -right-28 -top-44 h-[440px] w-[440px] rounded-full bg-clay/20 blur-[110px]" />
    <div aria-hidden="true" className="absolute -bottom-36 left-8 h-[380px] w-[380px] rounded-full bg-paper/[.06] blur-[100px]" />
    <div className="section-wrap relative">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <span className="section-kicker">07 / 08 · SAY HELLO</span>
        <span className="mono text-[9px] text-paper/45">ONE CLICK · NO FORMS</span>
      </div>
      <p className="display mt-8 max-w-2xl text-2xl leading-tight text-paper/70 sm:text-3xl">Have an idea, a role, or a project in mind? My inbox is open — click the address to copy it.</p>
      <button type="button" onClick={copyEmail} aria-label={`Copy email address ${EMAIL}`} className="group mt-10 block w-full text-left">
        <span className="display block break-all text-[clamp(1.55rem,5.6vw,5.6rem)] font-medium leading-[1.04] tracking-[-.055em] text-paper transition-colors duration-300 group-hover:text-clay">{EMAIL}</span>
        <span className={`mono mt-6 inline-flex items-center gap-3 rounded-full border px-4 py-2.5 text-[9px] transition-colors ${status === 'error' ? 'border-clay/60 text-clay' : 'border-paper/25 text-paper/80 group-hover:border-clay group-hover:text-clay'}`}>
          {status === 'copied' ? <Check size={14} /> : <Copy size={14} />}
          {status === 'copied' ? 'Copied to clipboard' : status === 'error' ? 'Copy unavailable — select the address' : 'Click to copy'}
        </span>
      </button>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6">
        <a href={`mailto:${EMAIL}`} className="mono inline-flex items-center gap-2 text-[9px] text-paper/70 transition-colors hover:text-clay">Or open in your mail app <ArrowUpRight size={12} /></a>
        <span aria-live="polite" className="mono text-[9px] text-paper/45">{status === 'copied' ? 'Email address copied' : ''}</span>
      </div>
    </div>
  </section>;
}
