import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [imgErr, setImgErr] = useState(false);
  const words = ["Django Backends", "React UIs", "REST APIs", "PostgreSQL DBs", "Real-Time Apps"];
  const wordRef = useRef(0);
  const charRef = useRef(0);
  const dirRef = useRef(1);

  useEffect(() => {
    const tick = () => {
      const word = words[wordRef.current];
      if (dirRef.current === 1) {
        charRef.current++;
        if (charRef.current > word.length) {
          dirRef.current = -1;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charRef.current--;
        if (charRef.current < 0) {
          dirRef.current = 1;
          wordRef.current = (wordRef.current + 1) % words.length;
          charRef.current = 0;
        }
      }
      setTyped(word.slice(0, charRef.current));
    };

    const id = setInterval(tick, 75);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 1rem 60px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Elements */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 720, textAlign: "center", width: "100%" }}>
        
        {/* Profile Image - FIXED for iPhone SE */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div style={{ position: "relative", width: 110, height: 110 }}>
            {/* Orbit Ring */}
            <div style={{
              position: "absolute", inset: -8, borderRadius: "50%",
              border: "1.5px dashed rgba(59,130,246,0.35)",
              animation: "spinRing 14s linear infinite",
            }} />

            {!imgErr ? (
              <img
                src="/profile.jpg"
                alt="Prithviraj P.U"
                onError={() => setImgErr(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center 20%",   // ← This is the key fix
                  border: "3px solid rgba(59,130,246,0.45)",
                }}
              />
            ) : (
              <div style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: "rgba(59,130,246,0.1)",
                border: "3px solid rgba(59,130,246,0.45)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32, fontWeight: 700, color: "#3b82f6"
              }}>PP</div>
            )}

            {/* Available Dot */}
            <div style={{
              position: "absolute", bottom: 4, right: 4,
              width: 16, height: 16, borderRadius: "50%",
              background: "#10b981", border: "2.5px solid #0a0a0a",
            }} />
          </div>
        </div>

        <h1 style={{ 
          fontSize: "clamp(2.35rem, 8.8vw, 4.8rem)", 
          fontWeight: 700, 
          lineHeight: 1.05, 
          marginBottom: "0.6rem" 
        }}>
          Prithviraj P.U
        </h1>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.4rem" }}>
          Python Full Stack Developer
        </p>

        <p style={{ 
          fontSize: "1rem", 
          color: "rgba(255,255,255,0.75)", 
          marginBottom: "2.2rem", 
          minHeight: "2.4em" 
        }}>
          Building{" "}
          <span style={{ color: "#3b82f6", fontFamily: "'DM Mono', monospace" }}>
            {typed}
            <span style={{ borderRight: "2px solid #3b82f6", animation: "blink 1s step-end infinite" }} />
          </span>
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: "#3b82f6", color: "#fff", padding: "14px 32px", borderRadius: 8, fontSize: 15, border: "none", cursor: "pointer" }}
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 32px", borderRadius: 8, fontSize: 15, cursor: "pointer" }}
          >
            Contact Me
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blink { 50%{opacity:0} }
        @keyframes spinRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}