import { backendSkills, frontendSkills, toolingSkills } from '../data';
import TechIcon from './TechIcon';
import { useReveal } from '../hooks/useReveal';

function SkillPill({ name }: { name: string }) {
  return (
    <span className="pill pill--icon">
      <TechIcon name={name} />
      <span className="pill-text">{name}</span>
    </span>
  );
}

export default function Skills() {
  const fe = useReveal<HTMLDivElement>();
  const be = useReveal<HTMLDivElement>();
  const tl = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <h2>Kỹ năng</h2>
        <div className="skills-grid">
          <div id="skills-frontend" ref={fe.ref} className={`card-reveal ${fe.isVisible ? 'reveal-in-left' : ''}`}>
            <h3>Frontend</h3>
            <div className="pill-row">
              {frontendSkills.map((s, idx) => (
                <span key={s.name} style={{ transitionDelay: `${idx * 40}ms` }} className={`reveal-item ${fe.isVisible ? 'reveal-item-in' : ''}`}>
                  <SkillPill name={s.name} />
                </span>
              ))}
            </div>
          </div>
          <div id="skills-backend" ref={be.ref} className={`card-reveal ${be.isVisible ? 'reveal-in-right' : ''}`}>
            <h3>Backend</h3>
            <div className="pill-row">
              {backendSkills.map((s, idx) => (
                <span key={s.name} style={{ transitionDelay: `${idx * 40}ms` }} className={`reveal-item ${be.isVisible ? 'reveal-item-in' : ''}`}>
                  <SkillPill name={s.name} />
                </span>
              ))}
            </div>
          </div>
          <div id="skills-tooling" ref={tl.ref} className={`card-reveal ${tl.isVisible ? 'reveal-in-up' : ''}`}>
            <h3>Tooling & Khác</h3>
            <div className="pill-row">
              {toolingSkills.map((s, idx) => (
                <span key={s.name} style={{ transitionDelay: `${idx * 40}ms` }} className={`reveal-item ${tl.isVisible ? 'reveal-item-in' : ''}`}>
                  <SkillPill name={s.name} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


