import React from "react";
import { Link } from "react-router-dom";
import Art, { HeroArt } from "../components/Art";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import { waLink } from "../config";

const FEATURES = [
  { n: "01", t: "Bought fresh daily", d: "We pick flowers from the market early every morning, never from yesterday's stock." },
  { n: "02", t: "Strung by hand", d: "Each flower is tied on cotton thread the traditional way, one by one." },
  { n: "03", t: "Fair prices", d: "Honest rates for families, temples and bulk festival orders." },
];

const CATS = [
  { to: "/flowers", kind: "jasmine", t: "Hair Flowers", d: "Jasmine, mullai, kanakambaram" },
  { to: "/flowers", kind: "rose", t: "Garlands", d: "Rose, marigold, bridal" },
  { to: "/flowers", kind: "lotus", t: "Pooja Flowers", d: "Lotus and loose flowers" },
  { to: "/occasions", kind: "wedding", t: "Weddings", d: "Stage and hall decoration" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Fresh every morning · Hand strung</p>
            <h1>
              Flowers the <span>traditional</span> way.
            </h1>
            <p className="lead">
              Jasmine for her hair, garlands for the gods, and blooms for every celebration,
              tied by hand and delivered fresh.
            </p>
            <div className="hero__actions">
              <Link to="/flowers" className="btn btn--green">Shop flowers</Link>
              <a className="btn btn--ghost" href={waLink("Hello VNP Flower Shop, I would like to order.")} target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
            </div>
            <ul className="hero__stats">
              <li><strong>15+</strong><span>Years of tradition</span></li>
              <li><strong>Daily</strong><span>Fresh stock</span></li>
              <li><strong>Hand</strong><span>Strung garlands</span></li>
            </ul>
          </div>
          <div className="hero__art">
            <div className="frame frame--tall"><HeroArt /></div>
            <div className="badge badge--a">🌼 Fresh today</div>
            <div className="badge badge--b">Home delivery</div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Browse</p>
            <h2>What are you looking for?</h2>
          </div>
          <div className="cats">
            {CATS.map((c) => (
              <Link to={c.to} key={c.t} className="cat">
                <div className="cat__img"><Art kind={c.kind} /></div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section section--green">
        <div className="container why">
          <div>
            <p className="eyebrow eyebrow--light">Why VNP</p>
            <h2>Made the old way, because it's better.</h2>
            <p className="muted-light">
              No machines, no shortcuts. Just fresh flowers, cotton thread and skilled hands.
            </p>
            <Link to="/about" className="btn btn--gold">Our story</Link>
          </div>
          <ul className="features">
            {FEATURES.map((f) => (
              <li key={f.n}>
                <span>{f.n}</span>
                <div><h3>{f.t}</h3><p>{f.d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--row">
            <div>
              <p className="eyebrow">Popular</p>
              <h2>Customer favourites</h2>
            </div>
            <Link to="/flowers" className="link-arrow">View all flowers →</Link>
          </div>
          <div className="pgrid">
            {PRODUCTS.filter((p) => [1, 4, 5].includes(p.id)).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="cta">
          <div>
            <h2>Need flowers for tomorrow?</h2>
            <p>Message us your list and we'll have it fresh and ready.</p>
          </div>
          <a className="btn btn--gold" href={waLink("Hello VNP Flower Shop, I need flowers for tomorrow.")} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
