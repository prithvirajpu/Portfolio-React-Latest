import { FadeUp } from "../components/Hooks";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem clamp(1.5rem,5vw,4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <p style={{ color: "#3b82f6", fontSize: 12, letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace", marginBottom: 12, textAlign: "center" }}>
            PROJECTS
          </p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, fontFamily: "'Syne', sans-serif", textAlign: "center", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
            What I've Built
          </h2>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))",
          gap: 28
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
      {/* Add this style block at the end of each section */}
<style>{`
  @media (max-width: 480px) {
    section {
      padding: 4rem 1rem !important;
    }
    
    h2 {
      font-size: 2.1rem !important;
    }
  }
  
  /* Force single column on very small screens */
  @media (max-width: 600px) {
    div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
  }
`}</style>
    </section>
  );
}