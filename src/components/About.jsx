import { FadeUp } from "./Hooks";

export default function About() {
  const stats = [
    { n: "4+", label: "Projects Built" },
    { n: "10+", label: "Technologies" },
    { n: "2025", label: "Actively Learning" },
  ];

  return (
    <section id="about" style={{ padding: "6rem clamp(1.5rem,5vw,4rem)", maxWidth: 1200, margin: "0 auto" }}>
      <FadeUp>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#3b82f6", fontSize: 12, letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace", marginBottom: 16 }}>ABOUT</p>
            <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, fontFamily: "'Syne', sans-serif", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
              Focused on building things that work.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
              I'm an entry-level Python Full Stack Developer who specializes in building scalable backend systems with Django and responsive frontends with React.
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              My focus is on writing clean, maintainable code — from RESTful API design and database optimization to real-time WebSocket features and authentication workflows. Currently training at Brototype, Kochi.
            </p>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
              {stats.map(s => (
                <div key={s.n} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "1.5rem 1rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, fontFamily: "'Syne', sans-serif", color: "#fff" }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 12, padding: "1.25rem 1.5rem" }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                📍 Kerala, India &nbsp;·&nbsp; 📧 prithvirajpu999@gmail.com &nbsp;·&nbsp; 📞 +91 9072513338
              </p>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}