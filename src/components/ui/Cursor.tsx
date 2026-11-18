import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

const FINE_POINTER = '(pointer: fine)';

function subscribeFinePointer(onChange: () => void) {
  const media = window.matchMedia(FINE_POINTER);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

function getFinePointer() {
  return window.matchMedia(FINE_POINTER).matches;
}

export function Cursor() {
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 170, damping: 24, mass: .2 });
  const y = useSpring(rawY, { stiffness: 170, damping: 24, mass: .2 });
  const rawGlowX = useMotionValue(-400);
  const rawGlowY = useMotionValue(-400);
  const glowX = useSpring(rawGlowX, { stiffness: 50, damping: 24 });
  const glowY = useSpring(rawGlowY, { stiffness: 50, damping: 24 });
  const [label, setLabel] = useState('');
  const reduced = useReducedMotion();
  const finePointer = useSyncExternalStore(subscribeFinePointer, getFinePointer, () => false);
  const enabled = finePointer && !reduced;
  useEffect(() => {
    if (!enabled) return;
    const move = (event: PointerEvent) => {
      rawX.set(event.clientX - 23);
      rawY.set(event.clientY - 23);
      rawGlowX.set(event.clientX - 300);
      rawGlowY.set(event.clientY - 300);
    };
    const over = (event: PointerEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
      setLabel(element?.dataset.cursor ?? '');
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', over); };
  }, [enabled, rawX, rawY, rawGlowX, rawGlowY]);
  if (!enabled) return null;
  return <>
    <motion.div aria-hidden="true" className="pointer-glow" style={{ x: glowX, y: glowY }} />
    <motion.div aria-hidden="true" className="cursor-ring grid h-[46px] w-[46px] place-items-center rounded-full border border-clay/70 bg-clay/[.08] text-[8px] text-paper backdrop-blur-sm" style={{ x, y }} animate={{ scale: label ? 1 : .75, opacity: label ? 1 : .5 }}>{label}</motion.div>
  </>;
}
