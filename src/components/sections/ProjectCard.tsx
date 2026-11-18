import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';
import { ProjectArtwork } from '../ui/ProjectArtwork';

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return <motion.article layoutId={`project-${project.number}`} className={`project-panel group relative overflow-hidden rounded-2xl border border-paper/10 bg-surface-raised ${project.flagship ? 'is-flagship' : ''}`}>
    <button type="button" data-cursor="View" onClick={() => onOpen(project)} aria-label={`Open ${project.name} case study`} className="absolute inset-0 z-10 block h-full w-full text-left">
      <ProjectArtwork project={project} />
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0" />
      <span aria-hidden="true" className="absolute inset-0 flex flex-col justify-end bg-pine/70 p-5 backdrop-blur-xl transition-opacity duration-500 sm:p-8 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
        <span className="flex items-end justify-between gap-5">
          <span className="block min-w-0">
            <span className="mono block text-[9px] text-clay">{project.number} / {project.client ?? project.type}</span>
            <span className="display mt-2 block text-3xl font-medium tracking-[-.04em] text-paper sm:text-4xl lg:text-5xl">{project.name}</span>
            <span className="mt-3 block max-w-xl text-xs leading-6 text-paper/75">{project.description}</span>
            <span className="mt-4 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((tag) => <span className="mono rounded-full border border-paper/20 px-2.5 py-1.5 text-[8px] text-paper/80" key={tag}>{tag}</span>)}</span>
          </span>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-paper/25 text-paper"><ArrowUpRight size={17} /></span>
        </span>
      </span>
    </button>
    <a href={project.url} target="_blank" rel="noreferrer" className="mono absolute right-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-2 text-[8px] text-ink transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">Visit live site <ArrowUpRight size={12} /></a>
  </motion.article>;
}
