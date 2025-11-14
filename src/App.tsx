import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, FileText } from 'lucide-react';
import Scene from './components/Scene';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// ✅ Import your PDF from src/pdf/
import resumePDF from './pdf/sandy.pdf';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

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
    <div className="relative w-full h-screen overflow-hidden">
      <Scene activeSection={activeSection} />

      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          {activeSection === 'home' && (
            <div className="text-center z-10 animate-fade-in">
              <div className="mb-6 animate-bounce-slow">
                <div className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                  ◆
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
                SANTHOSH G
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest mb-12">
                FULL STACK DEVELOPER AND DESIGNER 
              </p>
              <button
                onClick={() => scrollToSection('about')}
                className="group relative px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all group-hover:blur-md"></div>
                <div className="relative bg-black px-8 py-4 rounded-full group-hover:bg-opacity-80 transition-all">
                  Explore My World
                </div>
              </button>
            </div>
          )}

          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </div>

      {/* Social + Resume Icons */}
      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-20">
        <a
          href="https://github.com/Sandysharpo"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/30 transition-all transform hover:scale-125 duration-300"
        >
          <Github className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
        </a>

        <a
          href="https://www.linkedin.com/in/santhosh-g-81aa75360"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/30 transition-all transform hover:scale-125 duration-300"
        >
          <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
        </a>

        <a
          href="mailto:santhoshsandy9840l@gmail.com"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center hover:border-purple-400 hover:bg-purple-500/30 transition-all transform hover:scale-125 duration-300"
        >
          <Mail className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
        </a>

        {/* ✅ Resume Icon with working PDF link */}
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-500/30 transition-all transform hover:scale-125 duration-300"
        >
          <FileText className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
}

export default App;
