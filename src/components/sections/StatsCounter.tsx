import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
import type { stats } from '../../data/profile';

type Stat = (typeof stats)[number];

function CountValue({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: .65 });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? stat.target : 0);
  useEffect(() => {
    if (!visible || reduced) return;
    let frame = 0;
    let start = 0;
    const duration = 3000;
    const tick = (now: number) => {
      if (!start) start = now;
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(stat.target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, reduced, stat.target]);
  return <span ref={ref}>{String(count).padStart(stat.pad, '0')}{stat.suffix}</span>;
}

export function StatsCounter({ stats: items }: { stats: readonly Stat[] }) {
  return <div className="grid grid-cols-3 gap-3">
    {items.map((stat) => <div key={stat.label} className="border-t border-paper/20 pt-4"><div className="display text-3xl tabular-nums text-clay sm:text-4xl"><CountValue stat={stat} /></div><div className="mt-2 text-[10px] leading-4 text-muted">{stat.label}</div></div>)}
  </div>;
}
