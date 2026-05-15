import { useState } from "react";
import { FadeUp } from "../components/Hooks";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Backend");

  return (
    <section id="skills" style={{
      padding: "4rem clamp(1rem,5vw,2rem)", // Reduced padding
      background: "rgba(255,255,255,0.01)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <style>{`
        @keyframes drift {
          0% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(15px, -10px, 0); }
          50% { transform: translate3d(5px, 15px, 0); }
          75% { transform: translate3d(-15px, 10px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        
        @keyframes skillFadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Reduced maxWidth to 800px to kill wasted side space */}
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeUp>
          <p style={{ color: "#3b82f6", fontSize: 11, letterSpacing: "0.2em", fontFamily: "'DM Mono', monospace", marginBottom: 8, textAlign: "center" }}>
            STACK
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.2rem)", fontWeight: 700, fontFamily: "'Syne', sans-serif", textAlign: "center", marginBottom: "2.5rem" }}>
            Technical Expertise
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 32, flexWrap: "wrap" }}>
            {Object.keys(SKILLS).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? "#3b82f6" : "rgba(255,255,255,0.04)",
                  border: activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.08)",
                  color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
                  padding: "6px 16px",
                  borderRadius: 100,
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* This container is now more compact */}
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: 12, 
            justifyContent: "center", 
            alignItems: "center",
            minHeight: "150px", // Reduced height
            padding: "20px"
          }}>
            {SKILLS[activeTab].map((skill, i) => {
              // Randomized drift logic
              const duration = 6 + (i % 4); 
              const delay = i * -800; // Negative delay starts animation mid-cycle for instant movement

              return (
                <div
                  key={skill}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    padding: "8px 18px",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.8)",
                    cursor: "default",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    animation: `
                      skillFadeIn 0.5s ease forwards,
                      drift ${duration}s ease-in-out ${delay}ms infinite alternate
                    `
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.15)";
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.animationPlayState = "paused";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.zIndex = "20";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                    e.currentTarget.style.animationPlayState = "running";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.zIndex = "1";
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}