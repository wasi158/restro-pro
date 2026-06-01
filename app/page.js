"use client"

import ScrollTopButton from "./ScrollTopButton";
import Navbar from "./Navbar";
import WhatsAppChat from "./WhatsAppChat";
import { siteConfig } from "./siteConfig";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Modules", href: "#modules" },
  { label: "Management", href: "#management" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const whyChooseReasons = [
  {
    title: "Restaurant-First Design",
    text: "Every workflow is built for real dining floors, rush hours, and multi-station teams."
  },
  {
    title: "Faster Daily Operations",
    text: "Reduce manual work with connected billing, kitchen, inventory, and reporting in one place."
  },
  {
    title: "Trusted by Growing Brands",
    text: "From single outlets to multi-branch setups, scale operations with confidence."
  }
];

const advantageCards = [
  {
    id: "offline-support",
    icon: "offline",
    title: "Offline Support",
    text: "Keep taking orders and printing bills even when internet drops. Data syncs automatically when you are back online."
  },
  {
    id: "support-247",
    icon: "support",
    title: "24/7 Support",
    text: "Our support team is available around the clock to help your staff with setup, billing, and day-to-day POS issues."
  },
  {
    id: "secure-data",
    icon: "secure",
    title: "Secure Data",
    text: "Protect sales, customer, and business records with secure backups, role-based access, and encrypted data handling."
  },
  {
    id: "easy-billing",
    icon: "billing",
    title: "Easy Billing",
    text: "Create bills in seconds with split payments, discounts, taxes, and receipts designed for fast checkout."
  }
];

const moduleCards = [
  {
    title: "Point of Sale",
    text: "Fast billing, split payments, and error-free checkout during rush hours."
  },
  {
    title: "Kitchen Display",
    text: "Instant order flow to kitchen screens with clear prep priority and status."
  },
  {
    title: "Inventory Control",
    text: "Auto ingredient tracking and low-stock alerts to reduce wastage."
  },
  {
    title: "Staff Management",
    text: "Assign roles, monitor performance, and streamline shift operations."
  }
];

const testimonials = [
  {
    name: "Marcus V.",
    role: "General Manager",
    text: "MaxDine-POS made our service faster and gave us clear daily insights for better decisions."
  },
  {
    name: "Riya A.",
    role: "Cafe Owner",
    text: "Table turnover improved, billing became smooth, and our team adapted in just one day."
  },
  {
    name: "Chef Daniel",
    role: "Kitchen Lead",
    text: "Kitchen display removed confusion between waitstaff and kitchen during peak hours."
  },
  {
    name: "Sana K.",
    role: "Restaurant Owner",
    text: "Offline support saved us during internet outages. Billing never stopped on busy weekends."
  },
  {
    name: "Imran H.",
    role: "Operations Head",
    text: "24/7 support is real. Their team helped us fix issues late night during dinner service."
  },
  {
    name: "Aisha M.",
    role: "Finance Manager",
    text: "Secure data and easy billing reports helped us track sales and control costs confidently."
  }
];

const managementCards = [
  {
    icon: "inventory",
    title: "Inventory",
    text: "Track stock levels in real-time and get instant low-stock alerts before items run out."
  },
  {
    icon: "recipe",
    title: "Recipe",
    text: "Standardize recipes with ingredient-level costing to maintain taste and profit margins."
  },
  {
    icon: "staff",
    title: "Staff",
    text: "Manage roles, shifts, attendance, and productivity from a single control panel."
  },
  {
    icon: "vendor",
    title: "Vendor",
    text: "Maintain supplier records, purchase history, and reorder cycles without manual sheets."
  },
  {
    icon: "customer",
    title: "Customer",
    text: "Store customer preferences, loyalty insights, and visit history for better service."
  },
  {
    icon: "reports",
    title: "Reports",
    text: "View smart daily, weekly, and monthly reports for sales, expenses, and growth trends."
  },
  {
    icon: "deals",
    title: "Deals",
    text: "Launch combo offers and seasonal promotions quickly to increase order value."
  }
];

function AdvantageIcon({ type }) {
  const icons = {
    offline: (
      <path d="M3 12a9 9 0 0 1 15.5-6.5M21 12a9 9 0 0 1-15.5 6.5M8 12h8" />
    ),
    support: (
      <path d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
    secure: (
      <path d="M12 3 5 6v6c0 4.4 3 7.7 7 8.8 4-1.1 7-4.4 7-8.8V6l-7-3Zm0 8v3" />
    ),
    billing: (
      <path d="M7 4h10v16H7zM9 8h6M9 12h6M9 16h4" />
    )
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function ManagementIcon({ type }) {
  const icons = {
    inventory: (
      <path d="M4 7h16v10H4zM4 7l8-4 8 4M8 11h8M8 15h5" />
    ),
    recipe: (
      <path d="M7 4h10v16H7zM9 8h6M9 12h6M9 16h4" />
    ),
    staff: (
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0" />
    ),
    vendor: (
      <path d="M4 10h16v10H4zM6 10V7a6 6 0 0 1 12 0v3M9 14h6" />
    ),
    customer: (
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />
    ),
    reports: (
      <path d="M5 19V9M10 19V5M15 19v-7M20 19v-4M3 19h18" />
    ),
    deals: (
      <path d="m12 3 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 15l-4.6 2.4.9-5.2-3.8-3.7 5.2-.8z" />
    )
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="page">
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="brand brand-nav">
            <div className="brand-mark">M</div>
            <div>
              <h1>
                MaxDine-<span>POS</span>
              </h1>
            </div>
          </a>

          <Navbar links={navLinks} />

          <a href="#contact" className="btn-primary nav-btn">
            Book Demo
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content reveal">
              <h2 className="hero-title-animate">
                Run Your Restaurant <br />
                <span>Smarter, Faster, Better.</span>
              </h2>

              <p className="subtext hero-subtext-animate">
                All-in-one POS solution to manage orders, menu, staff, and more
                effortlessly.
              </p>

              <div className="actions hero-actions-animate">
                <a href="#demo" className="btn-primary">
                  Watch Demo
                </a>
                <a href="#why-choose-us" className="btn-secondary">
                  Why Choose Us
                </a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="screen-card">
                <div className="screen-top">
                  <span className="pill">KITCHEN LIVE</span>
                  <span className="status">+12.5%</span>
                </div>
                <h3>Service Overview</h3>
                <div className="stats-grid">
                  <div className="stat-box">
                    <p>Total Revenue</p>
                    <strong>$12,842.00</strong>
                  </div>
                  <div className="stat-box">
                    <p>Total Guests</p>
                    <strong>248</strong>
                  </div>
                  <div className="stat-box">
                    <p>Avg. Check</p>
                    <strong>$51.78</strong>
                  </div>
                  <div className="stat-box">
                    <p>Avg. Table Time</p>
                    <strong>54 min</strong>
                  </div>
                </div>
                <div className="trend-box">
                  <p>Revenue Trend</p>
                  <div className="trend-line" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="section reveal" id="about">
        <div className="container">
          <div className="section-head">
            <p className="kicker">About MaxDine-POS</p>
            <h2>Built for modern restaurants that move fast.</h2>
            <p>
              MaxDine-POS is designed for cafes, cloud kitchens, and full-service
              restaurants to manage every operation from one dashboard.
            </p>
          </div>
          <div className="about-grid">
            <article className="info-card">
              <h3>Powerful Analytics</h3>
              <p>
                Understand sales patterns, top sellers, and table performance in
                real-time.
              </p>
            </article>
            <article className="info-card">
              <h3>Operational Speed</h3>
              <p>
                Reduce manual work with connected modules for billing, kitchen, and
                inventory.
              </p>
            </article>
            <article className="info-card">
              <h3>Scalable for Growth</h3>
              <p>
                From single outlet to multi-location setup, run your business with
                consistency.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section why-choose reveal" id="why-choose-us">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Why Choose Us</p>
            <h2>Everything your restaurant needs to run smoothly every day.</h2>
            <p>
              MaxDine-POS combines speed, reliability, and support so your team can
              focus on guests—not manual work.
            </p>
          </div>
          <div className="why-choose-grid">
            {whyChooseReasons.map((item) => (
              <article key={item.title} className="why-card card-animate">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="feature-tree" role="tree" aria-label="MaxDine-POS advantages">
            <div className="feature-tree-root" role="treeitem" aria-expanded="true">
              <span className="feature-tree-node-dot feature-tree-node-dot--root">
                M
              </span>
              <h3>MaxDine-POS</h3>
              <p>One platform. Complete restaurant control.</p>
            </div>

            <div className="feature-tree-connector" aria-hidden="true">
              <span className="tree-line tree-line--stem" />
              <span className="tree-line tree-line--branch" />
            </div>

            <div className="feature-tree-children" role="group">
              {advantageCards.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="feature-tree-node"
                  role="treeitem"
                >
                  <span className="tree-line tree-line--drop" aria-hidden="true" />
                  <span className="feature-tree-node-dot" aria-hidden="true">
                    <AdvantageIcon type={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" id="modules">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Core Modules</p>
            <h2>Everything your team needs in one smart platform.</h2>
          </div>
          <div className="module-grid">
            {moduleCards.map((module) => (
              <article className="module-card card-animate" key={module.title}>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" id="management">
        <div className="container split-layout">
          <div className="split-left">
            <p className="kicker">Restaurant Management Suite</p>
            <h2>Control inventory, recipes, staff, vendors, and reporting in one place.</h2>
            <p>
              This section is built for complete back-office operations so your team
              can manage supply, people, customer relationships, and deals without
              switching tools.
            </p>
            <div className="split-points">
              <span>Operational visibility</span>
              <span>Cost control</span>
              <span>Data-driven decisions</span>
            </div>
          </div>
          <div className="split-right">
            {managementCards.map((item) => (
              <article key={item.title} className="management-card card-animate">
                <div className="management-top">
                  <span className="management-icon" aria-hidden="true">
                    <ManagementIcon type={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section reveal" id="testimonials">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Client Testimonials</p>
            <h2>Real feedback from restaurants using MaxDine-POS.</h2>
            <p>
              Owners, managers, and kitchen teams share how MaxDine-POS improved
              billing, support, and daily operations.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card card-animate">
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="testimonial-quote">&ldquo;{item.text}&rdquo;</p>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" id="demo">
        <div className="container demo-section">
          <div className="section-head">
            <p className="kicker">Watch Demo</p>
            <h2>See MaxDine-POS in action.</h2>
            <p>
              Explore how billing, kitchen, inventory, staff and reports work
              together in a single smart dashboard.
            </p>
          </div>
          <div className="demo-video full-demo-video">
            {/* <p>Product Demo Video</p> */}
            <div className="demo-video-frame">
              <video controls preload="metadata">
                <source src="/demo1.mp4" type="video/mp4" />
                Your browser does not support the demo video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact reveal" id="contact">
        <div className="container contact-wrap">
          <div className="contact-panel">
            <p className="kicker">Get in Touch</p>
            <h2>Tell us about your restaurant, we will plan your perfect POS setup.</h2>
            <p>
              Share your requirements and our team will contact you with a custom
              demo, pricing details, and onboarding plan.
            </p>
            <div className="contact-points">
              <span>Fast setup support</span>
              <span>Custom package</span>
              <span>1:1 onboarding</span>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi! I'd like to discuss MaxDine-POS for my restaurant."
              )}`}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <form className="contact-form contact-form-card" action="#" method="post">
            <div className="form-head">
              <h3>Request a Free Consultation</h3>
              <p>Fill the form and our POS expert will reach out shortly.</p>
            </div>
            <div className="form-grid">
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Enter your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="Enter your email" required />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="Enter your phone" />
              </label>
              <label>
                <span>Restaurant Name</span>
                <input type="text" name="restaurant" placeholder="Enter restaurant name" />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your restaurant needs"
                required
              />
            </label>
            <button type="submit" className="btn-primary">
              Send Request
            </button>
          </form>
        </div>
      </section>

      <WhatsAppChat />

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand footer-brand">
              <div className="brand-mark">M</div>
              <h3>
                MaxDine-<span>POS</span>
              </h3>
            </div>
            <p>
              Smart POS. Smarter business. Built to simplify restaurant
              operations.
            </p>
          </div>
          <div className="footer-arrows">
            <ScrollTopButton />
          </div>
        </div>
      </footer>
    </main>
  );
}
