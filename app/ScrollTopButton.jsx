"use client";

import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isUpMode, setIsUpMode] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsVisible(y > 80);
      setIsUpMode(y > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={isUpMode ? "#home" : "#contact"}
      className={`scroll-top-btn ${isVisible ? "show" : ""} ${isUpMode ? "up-mode" : "down-mode"}`}
      aria-label={isUpMode ? "Back to top" : "Scroll to contact"}
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isUpMode ? (
          <path d="M6.5 14.5 12 9l5.5 5.5" />
        ) : (
          <path d="M6.5 9.5 12 15l5.5-5.5" />
        )}
      </svg>
    </a>
  );
}
