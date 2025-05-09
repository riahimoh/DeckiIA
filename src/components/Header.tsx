import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="w-full md:w-auto flex justify-between items-center">
            <Logo />
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <button
                  onClick={() => scrollToSection('why-ai')}
                  className="text-gray-800 hover:text-accent transition-colors font-medium"
                >
                  Pourquoi l'IA ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('public-cible')}
                  className="text-gray-800 hover:text-accent transition-colors font-medium"
                >
                  À qui s'adresse la formation ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('program')}
                  className="text-gray-800 hover:text-accent transition-colors font-medium"
                >
                  Ce que tu vas apprendre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('financing')}
                  className="text-gray-800 hover:text-accent transition-colors font-medium"
                >
                  Financements
                </button>
              </li>
              <li>
                <a
                  href="https://forms.gle/pYKrGKp5AUzfA3sj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
                >
                  Réserve ton appel
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden w-full -mt-6">
            <a
              href="https://forms.gle/pYKrGKp5AUzfA3sj8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors text-sm"
            >
              Réserve ton appel
            </a>
          </div>

          <div className={`md:hidden w-full ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="bg-white rounded-lg shadow-lg mt-2 p-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={() => scrollToSection('why-ai')}
                    className="w-full text-left text-gray-800 hover:text-accent transition-colors font-medium py-2"
                  >
                    Pourquoi l'IA ?
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('public-cible')}
                    className="w-full text-left text-gray-800 hover:text-accent transition-colors font-medium py-2"
                  >
                    À qui s'adresse la formation ?
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('program')}
                    className="w-full text-left text-gray-800 hover:text-accent transition-colors font-medium py-2"
                  >
                    Ce que tu vas apprendre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('financing')}
                    className="w-full text-left text-gray-800 hover:text-accent transition-colors font-medium py-2"
                  >
                    Financements
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;