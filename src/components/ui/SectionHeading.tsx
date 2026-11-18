import { motion, useReducedMotion } from 'motion/react';

type SectionHeadingProps = {
  index: string;
  title: string;
  note?: string;
  compact?: boolean;
};

export function SectionHeading({ index, title, note, compact = false }: SectionHeadingProps) {
  const reduced = useReducedMotion();
  return <div className={`flex items-end justify-between gap-5 border-b pb-5 hairline ${compact ? 'mb-6' : 'mb-12'}`}>
    <div><span className="section-kicker">{index} / 08</span><motion.h2 aria-label={title} className="display mt-4 text-5xl font-medium leading-none sm:text-7xl">
      {title.split(' ').map((word, i) => <motion.span aria-hidden="true" key={`${word}-${i}`} className="mr-[.22em] inline-block" initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .65 }} transition={{ duration: .55, delay: i * .045, ease: [.22, 1, .36, 1] }}>{word}</motion.span>)}
    </motion.h2></div>
    {note && <p className="mono hidden max-w-48 text-right text-[10px] leading-5 text-faint sm:block">{note}</p>}
  </div>;
}
