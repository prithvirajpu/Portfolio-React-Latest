import { useState } from "react";
import { FadeUp } from "../components/Hooks";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Backend");

  return (
    <section id="skills" style={{
      padding: "6rem clamp(1.5rem,5vw,4rem)",
      background: "rgba(255,255,255,0.01)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <p style={{ color: "#3b82f6", fontSize: 12, letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace", marginBottom: 12, textAlign: "center" }}>
            SKILLS
          </p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, fontFamily: "'Syne', sans-serif", textAlign: "center", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
            Technical Expertise
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
            {Object.keys(SKILLS).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? "#3b82f6" : "rgba(255,255,255,0.04)",
                  border: activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.08)",
                  color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
                  padding: "8px 20px",
                  borderRadius: 100,
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontWeight: 500,
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", minHeight: 100 }}>
            {SKILLS[activeTab].map((skill, i) => (
              <div
                key={skill}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  padding: "10px 20px",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                  transition: "all 0.2s",
                  animation: `fadeSlide 0.3s ease ${i * 40}ms both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

    </section>
  );
}