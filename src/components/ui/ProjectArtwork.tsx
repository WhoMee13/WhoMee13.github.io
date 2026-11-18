import type { CSSProperties } from 'react';
import type { Project } from '../../data/projects';

export function ProjectArtwork({ project, expanded = false }: { project: Project; expanded?: boolean }) {
  const artStyle = {
    '--art-bg': project.art.bg,
    '--art-color': project.art.color,
    '--art-light': project.art.light,
  } as CSSProperties;
  return <div className={`project-art ${project.image ? 'project-art--image' : ''} ${expanded ? 'min-h-[260px] md:min-h-[440px]' : 'h-full min-h-[265px]'}`} style={artStyle}>
    {project.image && <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading={expanded ? 'eager' : 'lazy'} />}
    <span className="mono absolute left-5 top-5 z-10 text-[9px] text-paper/70">{project.client ?? project.type}</span>
    <span className="mono absolute bottom-6 right-5 z-10 text-[9px] text-paper/60">{project.number} / 05</span>
    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
  </div>;
}
