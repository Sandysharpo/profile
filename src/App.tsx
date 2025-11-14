import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Scene from './components/Scene';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import resumePDF from './pdf/sandy.pdf';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loading simulation
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900); // keep it short for dev
    return () => clearTimeout(t);
  }, []);

  // Defensive: make sure page is allowed to scroll
  useEffect(() => {
    // Force sensible defaults so nothing accidentally prevents scroll
    const prevHtmlOverflow = document.documentElement.style.overflowY;
    const prevBodyOverflow = document.body.style.overflowY;
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    // clean up on unmount
    return () => {
      document.documentElement.style.overflowY = prevHtmlOverflow;
      document.body.style.overflowY = prevBodyOverflow;
    };
  }, []);

  // scroll helper
  const scrollToSection = (section) => {
    setMenuOpen(false);
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // keep activeSection in sync while user scrolls
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const onScroll = () => {
      let current = sections[0];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // When top passes 35% of viewport height we mark it active
        if (rect.top <= window.innerHeight * 0.35) current = s;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="inline-block relative w-20 h-20 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-spin opacity-75"></div>
            <div className="absolute inset-2 bg-black rounded-full"></div>
          </div>
          <p className="text-cyan-400 text-xl font-light tracking-widest mb-2">Loading Experience</p>
          <div className="flex gap-1 justify-center">
            <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-100"></span>
            <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-200"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    // allow natural scrolling (min-h-screen so hero fills viewport but page can grow)
    <div className="relative w-full min-h-screen bg-neutral-900 text-white">
      {/* Background Scene - pointer-events-none so it never blocks scroll/touch */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Scene activeSection={activeSection} />
      </div>

      {/* Navigation (keeps existing API) */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Main content in normal document flow so it scrolls */}
      <main className="relative z-10">
        {/* HERO / HOME */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-12">
          <div className="text-center max-w-4xl">
            <div className="mb-6 animate-bounce-slow">
              <div className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                ◆
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
              SANTHOSH G
            </h1>

            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-300 font-light tracking-widest mb-8">
              FULL STACK DEVELOPER AND DESIGNER
            </p>

            <button
              onClick={() => scrollToSection('about')}
              className="relative inline-flex items-center px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-80 blur-sm"></div>
              <div className="relative px-8 py-2 rounded-full bg-black bg-opacity-40">Explore My World</div>
            </button>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>

        <footer className="px-6 py-12 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Santhosh G
        </footer>
      </main>

      {/* Social + Resume Icons (fixed but small and not covering content) */}
      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-20">
        <a
          href="https://github.com/Sandysharpo"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/30 transition-all transform hover:scale-125 duration-300"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
        </a>

        <a
          href="https://www.linkedin.com/in/santhosh-g-81aa75360"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/30 transition-all transform hover:scale-125 duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
        </a>

        <a
          href="mailto:santhoshsandy9840l@gmail.com"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center hover:border-purple-400 hover:bg-purple-500/30 transition-all transform hover:scale-125 duration-300"
          aria-label="Email"
        >
          <Mail className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
        </a>

        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-500/30 transition-all transform hover:scale-125 duration-300"
          aria-label="Resume"
        >
          <FileText className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
}
