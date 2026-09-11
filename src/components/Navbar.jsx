import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export default function Navbar({ onOpenContact }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  const usesOverlayNavigation = isHome && !isScrolled && !mobileMenuOpen;

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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        usesOverlayNavigation
          ? 'border-ivory-300 bg-ivory-50/95 shadow-paper backdrop-blur-md'
          : 'border-ivory-400 bg-ivory-100/95 shadow-paper backdrop-blur-md'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group relative isolate flex items-center transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          aria-label="Grow Consultants home"
        >
          {usesOverlayNavigation && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-10 rounded-md bg-ivory-50/55 blur-lg"
            />
          )}
          <img
            src="/brand/grow-consultants-nav-transparent.webp"
            alt="Grow Consultants & Co."
            className="relative h-9 w-28 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:h-10 sm:w-32"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = '/brand/grow-consultants-nav.webp';
            }}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.filter((l) => l.path !== '/contact').map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-navy-800' : 'text-stone-500 hover:text-navy-800'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={onOpenContact}
            className="btn border border-ivory-400 bg-transparent px-5 py-2.5 text-navy-800 hover:border-gold-400 hover:text-gold-600"
          >
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
