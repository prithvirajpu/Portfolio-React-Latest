import { FadeUp } from "../components/Hooks";
import { JOURNEY } from "../data/portfolioData";

export default function Journey() {
  return (
    <section id="journey" style={{
      padding: "6rem 1rem",
      background: "rgba(255,255,255,0.01)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        <FadeUp>
          <p style={{
            color: "#3b82f6",
            fontSize: 12,
            letterSpacing: "0.15em",
            fontFamily: "'DM Mono', monospace",
            marginBottom: 12,
            textAlign: "center"
          }}>
            LEARNING JOURNEY
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
            fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: "3.5rem"
          }}>
            Skills Acquired
          </h2>
        </FadeUp>

        {/* Timeline Container - Centered */}
        <div style={{ 
          position: "relative", 
          maxWidth: 680, 
          margin: "0 auto" 
        }}>
          
          {/* Vertical Line */}
          <div style={{
            position: "absolute",
            left: 14,
            top: 12,
            bottom: 12,
            width: 2,
            background: "rgba(255,255,255,0.08)",
          }} />

          {JOURNEY.map((item, i) => (
            <FadeUp key={item.skill} delay={i * 70}>
              <div style={{
                display: "flex",
                gap: 24,
                marginBottom: 40,
                position: "relative",
                paddingLeft: 48,
              }}>
                
                {/* Dot */}
                <div style={{
                  position: "absolute",
                  left: 9,
                  top: 8,
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  background: "#3b82f6",
                  border: "2.5px solid #0a0a0a",
                  zIndex: 2,
                }} />

                <div style={{ flex: 1 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 8,
                    flexWrap: "wrap"
                  }}>
                    <span style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      fontFamily: "'Syne', sans-serif"
                    }}>
                      {item.skill}
                    </span>
                    <span style={{
                      fontSize: 12,
                      color: "#3b82f6",
                      fontFamily: "'DM Mono', monospace",
                      background: "rgba(59,130,246,0.1)",
                      padding: "2px 10px",
                      borderRadius: 20
                    }}>
                      {item.year}
                    </span>
                  </div>
                  
                  <p style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.65
                  }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          section {
            padding: 4.5rem 1rem !important;
          }
          h2 {
            font-size: 2.15rem !important;
            margin-bottom: 2.8rem !important;
          }
        }

        @media (max-width: 600px) {
          div[style*="gap: 24px"] {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}