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
<div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
  <link href="..." rel="stylesheet" />
  
  <style>{`
    * { box-sizing: border-box; }
    
    @media (max-width: 480px) {
      section { padding: 4rem 1.1rem !important; }
      h2 { font-size: 2.2rem !important; line-height: 1.1; }
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