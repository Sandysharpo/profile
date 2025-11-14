import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Navigation = ({ activeSection, onNavigate, menuOpen, setMenuOpen }: NavigationProps) => {
  const sections = ['home', 'about', 'projects', 'contact'];

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-500 transition-all"
      >
        {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-12 space-y-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className={`text-3xl font-light tracking-wider transition-all ${
                activeSection === section
                  ? 'text-cyan-400 scale-110'
                  : 'text-white hover:text-cyan-400 hover:translate-x-2'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onNavigate(section)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === section
                ? 'bg-cyan-400 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Navigation;
