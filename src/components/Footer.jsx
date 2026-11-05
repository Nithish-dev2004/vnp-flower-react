import React from "react";
import { Link } from "react-router-dom";
import { SHOP } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3 className="footer__brand">VNP Flower Shop</h3>
          <p>Traditional flowers, hand-strung fresh every morning.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/flowers">Flowers</Link></li>
            <li><Link to="/occasions">Occasions</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Visit us</h4>
          <ul>
            <li>{SHOP.address}</li>
            <li>{SHOP.hours}</li>
            <li><a href={`tel:${SHOP.phone.replace(/\s/g, "")}`}>{SHOP.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bar">
        <span>© {new Date().getFullYear()} {SHOP.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
