import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { profile } from '../../data/profile';
import { easeOut } from '../../lib/animation';

export function Preloader() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (reduced) return;
    let value = 0;
    let finishTimer = 0;
    const timer = window.setInterval(() => {
      value = Math.min(100, value + 10);
      setProgress(value);
      if (value === 100) {
        window.clearInterval(timer);
        finishTimer = window.setTimeout(() => setVisible(false), 100);
      }
    }, 25);
    return () => { window.clearInterval(timer); window.clearTimeout(finishTimer); };
  }, [reduced]);
  if (reduced) return null;
  return <AnimatePresence>{visible && <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-ink" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .32, ease: easeOut } }} aria-hidden="true">
    <div className="w-[min(330px,76vw)]">
      <div className="flex items-end justify-between"><span className="display text-2xl tracking-[-.05em]">{profile.name}</span><span className="mono text-[10px] text-clay">{String(progress).padStart(2, '0')}%</span></div>
      <div className="mt-5 h-px bg-paper/15"><div className="h-full bg-clay transition-[width] duration-100" style={{ width: `${progress}%` }} /></div>
      <span className="mono mt-3 block text-[8px] text-faint">KATHMANDU · PORTFOLIO</span>
    </div>
  </motion.div>}</AnimatePresence>;
}
