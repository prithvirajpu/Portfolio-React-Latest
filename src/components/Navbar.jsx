import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? "rgba(10,10,10,0.98)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s ease",
      padding: "0 1rem",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
      }}>
        
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 16.5, fontWeight: 500 }}>
          prithviraj<span style={{ color: "#3b82f6" }}> p.u</span>
        </span>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: "flex", gap: 8 }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.75)",
                padding: "8px 16px",
                borderRadius: 6,
                fontSize: 14.5,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "#fff"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.75)"}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger - Visible ONLY on mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            fontSize: 28,
            color: "#fff",
            cursor: "pointer",
            padding: 4,
            display: "none", // Hidden by default
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(10,10,10,0.98)",
          padding: "1.2rem 1rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "16px 20px",
                fontSize: 16.5,
                background: "rgba(255,255,255,0.03)",
                border: "none",
                borderRadius: 8,
                marginBottom: 8,
                color: "#fff",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}