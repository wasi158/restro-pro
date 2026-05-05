"use client";

import { useEffect, useMemo, useState } from "react";

export default function Navbar({ links }) {
  const [activeHref, setActiveHref] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => links.map((link) => link.href.replace("#", "")).filter(Boolean),
    [links]
  );

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [sectionIds]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="nav-shell">
      <button
        type="button"
        className="nav-toggle-btn"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <button
          type="button"
          className="nav-close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          ×
        </button>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeHref === link.href ? "active" : ""}
            onClick={() => {
              setActiveHref(link.href);
              setIsMenuOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
