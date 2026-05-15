import { useState } from "react";
import { FadeUp } from "../components/Hooks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // You can later integrate EmailJS or backend here
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    color: "#fff",
    padding: "12px 16px",
    fontSize: 14,
    width: "100%",
    outline: "none",
    boxSizing: "border-box"
  };

  return (
    <section id="contact" style={{ padding: "6rem clamp(1.5rem,5vw,4rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <p style={{ color: "#3b82f6", fontSize: 12, letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace", marginBottom: 12, textAlign: "center" }}>
            CONTACT
          </p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, fontFamily: "'Syne', sans-serif", textAlign: "center", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Let's Work Together
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", marginBottom: "3.5rem", fontSize: "0.95rem" }}>
            Open to full-time roles, internships, and freelance projects.
          </p>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <FadeUp delay={100}>
            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 24, fontFamily: "'Syne', sans-serif" }}>Get in Touch</h3>
              {[
                { label: "Email", val: "prithvirajpu999@gmail.com", href: "mailto:prithvirajpu999@gmail.com" },
                { label: "Phone", val: "+91 9072513338", href: "tel:+919072513338" },
                { label: "GitHub", val: "github.com/prithvirajpu", href: "https://github.com/prithvirajpu" },
                { label: "LinkedIn", val: "linkedin.com/in/prithviraj-p-u", href: "https://linkedin.com/in/prithviraj-p-u" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace", minWidth: 60 }}>{c.label}</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{c.val}</span>
                </a>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 16, background: "rgba(16,185,129,0.04)" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <p style={{ color: "#10b981", fontWeight: 500 }}>Message sent!</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input style={inputStyle} placeholder="Your Name" required
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                <input style={inputStyle} type="email" placeholder="Email Address" required
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                <textarea style={{ ...inputStyle, minHeight: 130, resize: "vertical" }} placeholder="Your Message" required
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                <button type="submit"
                  style={{
                    background: "#3b82f6",
                    border: "none",
                    color: "#fff",
                    padding: "14px 28px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer"
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>

    </section>
  );
}