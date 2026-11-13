import React, { useEffect, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { profile } from '../data';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skillset', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // figures out which section is on screen so the right nav link lights up
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const ids = [...links.map((l) => l.id), 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' } // only counts when the section is around the middle of the screen
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // header gets its background after a tiny bit of scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // mobile menu: freeze the page behind it while its open, esc closes it
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // used on every link so the menu closes after you tap one
  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <a href="#home" className="logo" onClick={close} aria-label={`${profile.handle}, back to top`}>
        {profile.handle}
      </a>

      <nav id="site-nav" className="nav" aria-label="Main">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={close}
            className={current === l.id ? 'active' : ''}
            aria-current={current === l.id ? 'true' : undefined}
          >
            {l.label}
          </a>
        ))}
        {/* contact link is styled like a button */}
        <a
          href="#contact"
          onClick={close}
          className={`nav-cta ${current === 'contact' ? 'active' : ''}`}
          aria-current={current === 'contact' ? 'true' : undefined}
        >
          Contact
        </a>
      </nav>

      {/* hamburger, only visible on small screens */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="site-nav"
      >
        {open ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>
    </header>
  );
};

export default Header;
