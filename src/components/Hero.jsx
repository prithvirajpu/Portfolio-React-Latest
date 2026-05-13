import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [imgErr, setImgErr] = useState(false);
  const containerRef = useRef(null);

  const name = "Prithviraj";
  const initials = "P.U";
  
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

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    containerRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  // Logic to calculate the "Accelerating" delay
  // Starts slow (0.4s gap) and shrinks down to 0.05s gap
  const getAcceleratingDelay = (index) => {
    let delay = 0;
    let currentGap = 0.4; // Starting gap (slow)
    for (let i = 0; i < index; i++) {
      delay += currentGap;
      currentGap = Math.max(0.05, currentGap * 0.7); // Shrink gap by 30% each time
    }
    return delay;
  };

  return (
    <section 
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 1rem 60px", position: "relative", overflow: "hidden",
        backgroundColor: "#0a0a0a", "--mouse-x": "50%", "--mouse-y": "50%",
        perspective: "1200px"
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `radial-gradient(700px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.08), transparent 45%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 850, textAlign: "center", width: "100%" }}>
        
        {/* Profile Image Container */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div style={{ position: "relative", width: 110, height: 110 }}>
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
                  width: "100%", height: "100%", borderRadius: "50%",
                  objectFit: "cover", objectPosition: "center 20%",
                  border: "3px solid rgba(59,130,246,0.45)",
                }}
              />
            ) : (
              <div style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: "rgba(59,130,246,0.1)", border: "3px solid rgba(59,130,246,0.45)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32, fontWeight: 700, color: "#3b82f6"
              }}>PP</div>
            )}
            <div style={{
              position: "absolute", bottom: 4, right: 4,
              width: 16, height: 16, borderRadius: "50%",
              background: "#10b981", border: "2.5px solid #0a0a0a",
            }} />
          </div>
        </div>

        {/* ACCELERATING KNIFE THROW */}
        <h1 style={{
          fontSize: "clamp(2.5rem, 9vw, 5.2rem)",
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: "0.6rem",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          <div style={{ display: "flex" }}>
            {name.split("").map((char, i) => (
              <span key={i} style={{
                display: "inline-block",
                whiteSpace: "pre",
                animation: `povKnifeThrow 0.25s cubic-bezier(0.1, 0, 0.4, 1) forwards`,
                animationDelay: `${getAcceleratingDelay(i)}s`,
                opacity: 0,
              }}>
                {char}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", marginLeft: "18px", color: "#3b82f6" }}>
            {initials.split("").map((char, i) => (
              <span key={i} style={{
                display: "inline-block",
                animation: `povKnifeThrow 0.25s cubic-bezier(0.1, 0, 0.4, 1) forwards`,
                animationDelay: `${getAcceleratingDelay(name.length + i) + 0.2}s`,
                opacity: 0,
              }}>
                {char}
              </span>
            ))}
          </div>
        </h1>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.4rem" }}>
          Python Full Stack Developer
        </p>

        <p style={{
          fontSize: "1rem", color: "rgba(255,255,255,0.75)",
          marginBottom: "2.2rem", minHeight: "2.4em"
        }}>
          Building{" "}
          <span style={{ color: "#3b82f6", fontFamily: "'DM Mono', monospace" }}>
            {typed}
            <span style={{ borderRight: "2px solid #3b82f6", animation: "blink 1s step-end infinite" }} />
          </span>
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: "#3b82f6", color: "#fff", padding: "14px 32px", borderRadius: 8, border: "none", fontWeight: 600 }}>View Projects</button>
          <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 32px", borderRadius: 8 }}>Contact Me</button>
        </div>
      </div>
      
      <style>{`
        @keyframes povKnifeThrow {
          0% {
            opacity: 0;
            transform: translateZ(600px) scale(4) translateY(20px);
            filter: blur(15px);
          }
          100% {
            opacity: 1;
            transform: translateZ(0) scale(1) translateY(0);
            filter: blur(0);
          }
        }
        @keyframes blink { 50%{opacity:0} }
        @keyframes spinRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}