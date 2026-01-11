import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { THLogo } from '../assets';

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { to: '/about', label: 'About Me' },
    { to: '/engineering', label: 'Engineering' },
    { to: '/design', label: 'Design' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
        }`}
    >
      <div className="w-full px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group relative">
          <div className={`transition-all duration-300 ${scrolled ? 'w-12 h-12' : 'w-14 h-14'}`}>
            <img 
              src={THLogo} 
              alt="Tyler Harp Logo" 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-300
                ${location.pathname === link.to 
                  ? 'bg-gradient-to-r from-[#cc83c0] to-[#FAA098] text-white shadow-md' 
                  : scrolled
                    ? 'text-gray-600 hover:text-[#cc83c0] hover:bg-[#cc83c0]/10'
                    : 'text-[#FAA098] hover:text-[#cc83c0] hover:bg-white/20'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
