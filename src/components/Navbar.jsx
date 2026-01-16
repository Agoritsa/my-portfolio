import React, { useState, useRef, useLayoutEffect } from "react";
import "../index.css";

function Navbar() {
  // State for pill position/size and hovered link index
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Refs to each nav link DOM node
  const linkRefs = useRef([]);

  // When hoveredIdx changes, update pill position/size to match hovered link
  useLayoutEffect(() => {
    if (hoveredIdx !== null && linkRefs.current[hoveredIdx]) {
      const el = linkRefs.current[hoveredIdx];
      const parent = el.parentElement.parentElement;
      const elRect = el.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - parentRect.left,
        width: elRect.width,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIdx]);

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-container">
        <a href="#landing" className="custom-navbar-logo">
          MyPortfolio
        </a>

        {/* Pills menu */}
        <div className={`pill-nav-wrapper ${
            isMenuOpen ? "open" : ""
          }`}>
          <ul className="pill-nav pill-nav-animated">
            <div
              className="pill-nav-animated-bg"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="pill-nav-link"
                  ref={(el) => (linkRefs.current[idx] = el)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setIsMenuOpen(false)} // close when clicking link
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger button */}
        <button
          className={`custom-navbar-hamburger ${isMenuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
