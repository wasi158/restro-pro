"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "./siteConfig";

const QUICK_MESSAGES = [
  {
    label: "Book a free demo",
    text: "Hi! I'd like to book a free demo of MaxDine-POS for my restaurant."
  },
  {
    label: "Pricing & packages",
    text: "Hello, I want to know about MaxDine-POS pricing and packages."
  },
  {
    label: "Technical support",
    text: "Hi, I need technical support with MaxDine-POS."
  }
];

function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export default function WhatsAppChat() {
  const panelId = useId();
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(QUICK_MESSAGES[0].text);

  const openChat = useCallback((text) => {
    const url = buildWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div className="whatsapp-chat" ref={rootRef}>
      <div
        id={panelId}
        className={`whatsapp-panel ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${panelId}-title`}
        aria-hidden={!isOpen}
      >
        <header className="whatsapp-panel-header">
          <div className="whatsapp-avatar" aria-hidden="true">
            <WhatsAppIcon />
          </div>
          <div>
            <h3 id={`${panelId}-title`}>{siteConfig.businessName}</h3>
            <p>
              <span className="whatsapp-online" aria-hidden="true" />
              Typically replies within an hour
            </p>
          </div>
          <button
            type="button"
            className="whatsapp-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            ×
          </button>
        </header>

        <div className="whatsapp-panel-body">
          <p className="whatsapp-bubble">{siteConfig.whatsappGreeting}</p>
          <p className="whatsapp-quick-label">Quick options</p>
          <div className="whatsapp-quick-list">
            {QUICK_MESSAGES.map((item) => (
              <button
                key={item.label}
                type="button"
                className="whatsapp-quick-btn"
                onClick={() => {
                  setMessage(item.text);
                  openChat(item.text);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <label className="whatsapp-compose">
            <span>Your message</span>
            <textarea
              ref={inputRef}
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your message..."
            />
          </label>
          <button
            type="button"
            className="whatsapp-send-btn"
            onClick={() => openChat(message)}
            disabled={!message.trim()}
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`whatsapp-fab ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isOpen ? (
          <span className="whatsapp-fab-icon" aria-hidden="true">
            ×
          </span>
        ) : (
          <span className="whatsapp-fab-icon" aria-hidden="true">
            <WhatsAppIcon />
          </span>
        )}
      </button>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}
