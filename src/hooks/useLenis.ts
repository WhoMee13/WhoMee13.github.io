import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let activeLenis: Lenis | null = null;

/**
 * Locks page scrolling while an overlay is open. Works with or without smooth
 * scrolling enabled, since it also pins overflow on the document element.
 */
export function lockScroll() {
  document.documentElement.classList.add('modal-lock');
  activeLenis?.stop();
}

export function unlockScroll() {
  document.documentElement.classList.remove('modal-lock');
  activeLenis?.start();
}

export function useLenis() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true });
    activeLenis = lenis;
    const tick = (time: number) => lenis.raf(time * 1000);
    const update = () => ScrollTrigger.update();
    gsap.ticker.add(tick);
    lenis.on('scroll', update);
    gsap.ticker.lagSmoothing(0);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => {
      gsap.ticker.remove(tick);
      lenis.off('scroll', update);
      lenis.destroy();
      activeLenis = null;
    };
  }, []);
}
