import { FadeUp, FadeLeft, FadeRight } from "../components/Hooks";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem clamp(1.5rem,5vw,4rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Section Heading */}
        <FadeUp>
          <p
            style={{
              color: "#3b82f6",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontFamily: "'DM Mono', monospace",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            PROJECTS
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,2.8rem)",
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              textAlign: "center",
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
            }}
          >
            What I've Built
          </h2>
        </FadeUp>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 520px), 1fr))",
            gap: 28,
          }}
        >
          {PROJECTS.map((project, i) =>
            i % 2 === 0 ? (
              <FadeLeft
                key={project.title}
                delay={i * 200}
              >
                <ProjectCard
                  project={project}
                />
              </FadeLeft>
            ) : (
              <FadeRight
                key={project.title}
                delay={i * 200}
              >
                <ProjectCard
                  project={project}
                />
              </FadeRight>
            )
          )}
        </div>
      </div>
      <style>{`
        /* Desktop - Force 2 columns */
        @media (min-width: 1024px) {
          #projects > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }

        /* Tablet */
        @media (max-width: 1023px) and (min-width: 768px) {
          #projects > div > div {
            grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)) !important;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          #projects > div > div {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>

    </section>
  );
}