export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem clamp(1.5rem,5vw,4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: "'DM Mono', monospace" }}>
          prithviraj
        </span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
          © 2025 Prithviraj P.U
        </span>
      </div>
    </footer>
  );
}