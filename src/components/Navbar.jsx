import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stop the page scrolling behind the open drawer.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'border-b border-ivory-400 bg-ivory-100/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex flex-col leading-none"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-navy-800 transition-colors group-hover:text-gold-600">
            Grow Consultants
          </span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-gold-500">
            Specialised Financial Structuring
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.filter((l) => l.path !== '/contact').map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-navy-800' : 'text-stone-500 hover:text-navy-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button type="button" onClick={onOpenContact} className="btn-ghost px-5 py-2.5">
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-sm p-2 text-navy-800 transition-colors hover:bg-ivory-200 lg:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-nav" className="border-t border-ivory-400 bg-ivory-100 lg:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-ivory-300 py-3.5 text-sm font-medium last:border-0 ${
                    isActive ? 'text-gold-600' : 'text-navy-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="btn-primary mt-4 w-full"
            >
              Talk to Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
