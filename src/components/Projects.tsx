import { projects } from '../data';
import TechIcon from './TechIcon';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Dự án đã làm</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.id}>
              <div className="project-content">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="pill-row">
                  {p.techStack.map((t) => (
                    <span key={t} className="pill pill--soft pill--icon">
                      <TechIcon name={t} />
                      <span className="pill-text">{t}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                {p.demoUrl && (
                  <a className="btn btn-primary" href={p.demoUrl} target="_blank" rel="noreferrer">Demo</a>
                )}
                {p.repoUrl && (
                  <a className="btn" href={p.repoUrl} target="_blank" rel="noreferrer">Mã nguồn</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


