'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useLang, useT } from './LanguageProvider';

export type NavSection = 'acasa' | 'despre' | 'articole' | 'servicii' | 'intrebari' | 'contact';

interface NavbarProps {
  activePage?: NavSection;
}

const SCROLL_SECTIONS: { id: string; section: NavSection }[] = [
  { id: 'top', section: 'acasa' },
  { id: 'servicii', section: 'servicii' },
  { id: 'intrebari', section: 'intrebari' },
  { id: 'contact', section: 'contact' },
];

export default function Navbar({ activePage }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { lang, toggleLang } = useLang();
  const t = useT();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollSection, setScrollSection] = useState<NavSection>('acasa');

  const updateScrollSection = useCallback(() => {
    if (!isHome) return;

    const offset = 120;
    const scrollY = window.scrollY + offset;
    let active: NavSection = 'acasa';

    for (const { id, section } of SCROLL_SECTIONS) {
      const el = document.getElementById(id);
      if (el && scrollY >= el.offsetTop) {
        active = section;
      }
    }

    setScrollSection(active);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    updateScrollSection();
    window.addEventListener('scroll', updateScrollSection, { passive: true });
    window.addEventListener('hashchange', updateScrollSection);

    const timeout = setTimeout(updateScrollSection, 150);

    return () => {
      window.removeEventListener('scroll', updateScrollSection);
      window.removeEventListener('hashchange', updateScrollSection);
      clearTimeout(timeout);
    };
  }, [isHome, pathname, updateScrollSection]);

  const active = isHome ? scrollSection : (activePage ?? 'acasa');

  const linkClass = (section: NavSection, mobile = false) => {
    const base = mobile
      ? 'block font-sans text-sm transition-colors py-2'
      : 'font-sans text-sm transition-colors';
    return `${base} ${active === section ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`;
  };

  const closeMobile = () => setMobileMenuOpen(false);
  const hashHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  const navLinks = (mobile = false) => (
    <>
      <Link
        href="/"
        onClick={mobile ? closeMobile : undefined}
        className={linkClass('acasa', mobile)}
      >
        {t('nav.home')}
      </Link>
      <Link
        href="/despre"
        onClick={mobile ? closeMobile : undefined}
        className={linkClass('despre', mobile)}
      >
        {t('nav.about')}
      </Link>
      <Link
        href="/articole"
        onClick={mobile ? closeMobile : undefined}
        className={linkClass('articole', mobile)}
      >
        {t('nav.articles')}
      </Link>
      <Link
        href="/servicii"
        onClick={mobile ? closeMobile : undefined}
        className={linkClass('servicii', mobile)}
      >
        {t('nav.services')}
      </Link>
      <a
        href={hashHref('intrebari')}
        onClick={mobile ? closeMobile : undefined}
        className={linkClass('intrebari', mobile)}
      >
        {t('nav.faq')}
      </a>
      <a
        href={hashHref('contact')}
        onClick={mobile ? closeMobile : undefined}
        className={linkClass('contact', mobile)}
      >
        {t('nav.contact')}
      </a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <h1 className="text-md font-semibold text-gray-900" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Irina Gospodaru
          </h1>
          <p className="font-script text-lg text-gray-600">
            {t('nav.tagline')}
          </p>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {navLinks()}
          <button
            onClick={() => toggleLang()}
            className="ml-4 px-3 py-2 bg-emerald-600 text-white rounded-full font-semibold shadow-md hover:bg-emerald-500 transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'ro' ? 'EN' : 'RO'}
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 space-y-4 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          {navLinks(true)}
          <div className="pt-2">
            <button onClick={() => toggleLang()} className="px-3 py-2 bg-emerald-600 text-white rounded-md font-medium">
              {lang === 'ro' ? 'EN' : 'RO'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

