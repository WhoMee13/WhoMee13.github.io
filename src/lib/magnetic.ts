import type { PointerEvent } from 'react';

export function magneticMove(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const dx = event.clientX - rect.left - rect.width / 2;
  const dy = event.clientY - rect.top - rect.height / 2;
  event.currentTarget.style.transform = `translate(${dx * .08}px, ${dy * .08}px)`;
}

export function resetMagnetic(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.transform = '';
}
