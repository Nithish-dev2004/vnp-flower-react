import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SHOP, waLink } from "../config";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/flowers", label: "Flowers" },
  { to: "/occasions", label: "Occasions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__row">
        <Link to="/" className="brand" aria-label={SHOP.name}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="26" height="26">
              <g fill="#FFFBF2">
                {[0, 72, 144, 216, 288].map((a) => (
                  <ellipse key={a} cx="20" cy="9.5" rx="5.2" ry="8" transform={`rotate(${a} 20 20)`} />
                ))}
              </g>
              <circle cx="20" cy="20" r="4.4" fill="#F59E0B" />
            </svg>
          </span>
          <span className="brand__text">
            VNP <em>Flower Shop</em>
          </span>
        </Link>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
          <a className="btn btn--gold nav__cta-mobile" href={waLink("Hello VNP Flower Shop, I would like to order.")} target="_blank" rel="noreferrer">
            Order on WhatsApp
          </a>
        </nav>

        <a className="btn btn--gold nav__cta" href={waLink("Hello VNP Flower Shop, I would like to order.")} target="_blank" rel="noreferrer">
          Order now
        </a>
        <button className={`burger ${open ? "is-open" : ""}`} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
