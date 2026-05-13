import { useState } from "react";
import { FadeUp } from "../components/Hooks";

export default function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${hovered ? project.color + "40" : "rgba(255,255,255,0.07)"}`,
          borderRadius: 16,
          overflow: "hidden",
          transition: "all 0.35s ease",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          boxShadow: hovered ? `0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px ${project.color}18` : "none",
        }}
      >
        {/* Project Image Area */}
        <div style={{
          position: "relative",
          height: 230,
          overflow: "hidden",
          background: `linear-gradient(135deg, ${project.color}10 0%, rgba(10,10,10,0.9) 100%)`,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}>
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />

          {!imgErr ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgErr(true)}
              style={{
                position: "absolute",
                left: "50%", top: "54%",
                transform: "translate(-50%, -50%)",
                width: "88%", height: "82%",
                objectFit: "cover",
                borderRadius: 10,
                border: `1px solid ${project.color}30`,
                boxShadow: `0 10px 36px rgba(0,0,0,0.6), 0 0 0 1px ${project.color}18`,
                zIndex: 1,
                animation: "floatImg 4s ease-in-out infinite",
              }}
            />
          ) : (
            <div style={{
              position: "absolute",
              left: "50%", top: "54%",
              transform: "translate(-50%, -50%)",
              width: "88%", height: "78%",
              background: `${project.color}0c`,
              border: `1.5px dashed ${project.color}35`,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              zIndex: 1,
            }}>
              <div style={{ fontSize: 40 }}>{project.icon}</div>
              <span style={{ fontSize: 11, color: `${project.color}90` }}>screenshot.png</span>
            </div>
          )}

          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 70, zIndex: 2,
            background: "linear-gradient(transparent, rgba(10,10,10,0.95))",
          }} />

          {/* Action Buttons */}
          <div style={{ position: "absolute", top: 14, right: 14, display: "flex", gap: 8, zIndex: 3 }}>
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{
                fontSize: 11, color: "rgba(255,255,255,0.5)", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6,
                padding: "5px 12px", fontFamily: "'DM Mono', monospace",
                background: "rgba(10,10,10,0.75)", backdropFilter: "blur(8px)"
              }}
            >
              GitHub ↗
            </a>
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{
                fontSize: 11, color: "#fff", textDecoration: "none",
                background: project.color, borderRadius: 6,
                padding: "5px 12px", fontFamily: "'DM Mono', monospace"
              }}
            >
              Live ↗
            </a>
          </div>
        </div>

        {/* Card Content */}
        <div style={{ padding: "1.5rem 1.75rem 0.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Syne', sans-serif", marginBottom: 4 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 12, color: project.color, fontFamily: "'DM Mono', monospace", marginBottom: 10 }}>
            {project.subtitle}
          </p>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
            {project.description}
          </p>
        </div>

        <div style={{ padding: "0.75rem 1.75rem 1.5rem" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 10px" }}>
            {project.features.map(f => (
              <li key={f} style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: project.color, fontSize: 9 }}>▸</span> {f}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.tech.map(t => (
              <span key={t} style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
                padding: "3px 8px",
                fontFamily: "'DM Mono', monospace"
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatImg {
          0%,100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-9px); }
        }
      `}</style>
    </FadeUp>
  );
}