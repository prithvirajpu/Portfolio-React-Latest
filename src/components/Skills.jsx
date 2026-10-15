import { useState } from "react";
import { FadeUp } from "../components/Hooks";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Backend");

  const categories = ["All", ...Object.keys(SKILLS)];

  // Get skills for the currently active tab
  const getActiveSkills = () => {
    if (activeTab === "All") {
      return Object.values(SKILLS).flat();
    }
    return SKILLS[activeTab] || [];
  };

  const activeSkills = getActiveSkills();

  // Ensure enough items to create an unbroken seamless infinite loop
  const buildSeamlessList = (items) => {
    if (!items || items.length === 0) return [];
    let base = [...items];
    while (base.length < 14) {
      base = [...base, ...items];
    }
    // Duplicate base exactly once so 0% -> -50% translation loops seamlessly
    return [...base, ...base];
  };

  const displayList = buildSeamlessList(activeSkills);
  const duration = activeTab === "All" ? 34 : 24;

  return (
    <section id="skills" style={{
      padding: "4.5rem clamp(1rem,5vw,2rem)",
      background: "rgba(255,255,255,0.01)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      overflow: "hidden"
    }}>
      <style>{`
        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .marquee-row {
          display: flex;
          width: max-content;
        }

        .marquee-row-left {
          animation-name: marqueeLeft;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .marquee-container:hover .marquee-row {
          animation-play-state: paused;
        }

        .skill-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 10px 22px;
          margin: 0 7px;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s ease,
                      border-color 0.25s ease,
                      color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .skill-badge:hover {
          transform: translateY(-4px) scale(1.04);
          background: rgba(59, 130, 246, 0.15) !important;
          border-color: #3b82f6 !important;
          color: #ffffff !important;
          box-shadow: 0 10px 25px -3px rgba(59, 130, 246, 0.35), 0 3px 8px rgba(0, 0, 0, 0.5) !important;
          z-index: 10;
        }
      `}</style>

      {/* Main container */}
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeUp>
          <p style={{ color: "#3b82f6", fontSize: 11, letterSpacing: "0.2em", fontFamily: "'DM Mono', monospace", marginBottom: 8, textAlign: "center" }}>
            STACK
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.2rem)", fontWeight: 700, fontFamily: "'Syne', sans-serif", textAlign: "center", marginBottom: "2.5rem" }}>
            Technical Expertise
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32, flexWrap: "wrap" }}>
            {categories.map(tab => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: isActive ? "#3b82f6" : "rgba(255,255,255,0.04)",
                    border: isActive ? "1px solid #60a5fa" : "1px solid rgba(255,255,255,0.08)",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    padding: "7px 18px",
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: isActive ? 600 : 500,
                    cursor: "pointer",
                    boxShadow: isActive ? "0 0 16px rgba(59,130,246,0.35)" : "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Single line smooth marquee with edge fades */}
          <div
            className="marquee-container"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "16px 0",
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div
              key={`track-${activeTab}`}
              className="marquee-row marquee-row-left"
              style={{ animationDuration: `${duration}s` }}
            >
              {displayList.map((skill, index) => (
                <div key={`${activeTab}-${skill}-${index}`} className="skill-badge">
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#3b82f6",
                      display: "inline-block",
                      marginRight: 9,
                      boxShadow: "0 0 6px rgba(59,130,246,0.9)",
                      flexShrink: 0
                    }}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}