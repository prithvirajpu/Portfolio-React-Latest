import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ 
      background: "#0a0a0a", 
      color: "#fff", 
      minHeight: "100vh", 
      fontFamily: "'DM Sans', system-ui, sans-serif",
      overflowX: "hidden" 
    }}>
      
      {/* Google Font */}
      <link 
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700&family=DM+Mono&display=swap" 
        rel="stylesheet" 
      />

      {/* GLOBAL RESPONSIVE STYLES - Applied from first paint */}
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        /* ==================== GLOBAL MOBILE FIXES ==================== */
        @media (max-width: 480px) {
          section {
            padding: 4rem 1.1rem !important;
          }

          h1 {
            font-size: 2.8rem !important;
            line-height: 1.1 !important;
          }

          h2 {
            font-size: 2.25rem !important;
            line-height: 1.15 !important;
          }

          h3 {
            font-size: 1.35rem !important;
          }

          p {
            font-size: 1.02rem !important;
            line-height: 1.65 !important;
          }
        }

        @media (max-width: 360px) {
          section {
            padding: 3.5rem 1rem !important;
          }
        }

        /* Fix grids that break on mobile */
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        /* Projects specific fix */
        #projects > div > div {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
          gap: 1.75rem !important;
        }

        @media (max-width: 600px) {
          #projects > div > div {
            grid-template-columns: 1fr !important;
          }
        }

        /* Navbar mobile menu safety */
        nav button[aria-label="Toggle menu"] {
          display: none;
        }

        @media (max-width: 768px) {
          nav .desktop-nav {
            display: none !important;
          }
          nav button[aria-label="Toggle menu"] {
            display: block !important;
          }
        }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}