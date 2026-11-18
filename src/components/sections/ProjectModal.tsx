import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '../../data/projects';
import { easeOut } from '../../lib/animation';
import { ProjectArtwork } from '../ui/ProjectArtwork';
import { lockScroll, unlockScroll } from '../../hooks/useLenis';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    const oldFocus = document.activeElement as HTMLElement | null;
    lockScroll();
    (panel.current?.querySelector<HTMLElement>('button, a[href]') ?? panel.current)?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab' && panel.current) {
        const focusables = [...panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')];
        if (!focusables.length) return;
        if (event.shiftKey && document.activeElement === focusables[0]) { event.preventDefault(); focusables.at(-1)?.focus(); }
        else if (!event.shiftKey && document.activeElement === focusables.at(-1)) { event.preventDefault(); focusables[0].focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { unlockScroll(); window.removeEventListener('keydown', onKey); oldFocus?.focus(); };
  }, [onClose]);
  return <motion.div className="fixed inset-0 z-50 overflow-y-auto bg-ink/95 p-3 backdrop-blur-md sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <motion.article ref={panel} role="dialog" aria-modal="true" aria-labelledby="case-study-title" tabIndex={-1} layoutId={`project-${project.number}`} className="relative mx-auto my-2 max-w-5xl overflow-hidden rounded-[22px] border border-paper/15 bg-surface outline-none sm:my-8" transition={{ duration: .55, ease: easeOut }}>
      <div className="flex items-center justify-between border-b border-paper/10 px-5 py-4 sm:px-8"><span className="mono text-[10px] text-clay">{project.number} / CASE STUDY</span><button onClick={onClose} className="flex items-center gap-2 text-xs text-muted hover:text-paper" aria-label="Close case study">Close <X size={17} /></button></div>
      <div className="p-3 sm:p-6"><ProjectArtwork project={project} expanded /></div>
      <div className="grid gap-10 px-5 pb-8 sm:grid-cols-[1.1fr_.9fr] sm:px-10 sm:pb-12">
        <div><h2 id="case-study-title" className="display text-4xl leading-[.98] tracking-[-.06em] sm:text-6xl">{project.name}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-muted">{project.description}</p></div>
        <div><p className="section-kicker">Role · {project.role}</p><ul className="mt-5 space-y-3">{project.details.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-paper/80"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay" />{item}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-paper/15 px-3 py-2 text-[10px] text-muted">{item}</span>)}</div><a className="mt-7 inline-flex items-center gap-2 text-xs text-clay" href={project.url} target="_blank" rel="noreferrer">Visit {project.displayUrl}<ArrowUpRight size={14} /></a></div>
      </div>
    </motion.article>
  </motion.div>;
}
