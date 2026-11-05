import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/products";

export default function Flowers() {
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <>
      <PageHeader
        eyebrow="Our flowers"
        title="Fresh flowers, every day"
        text="Choose from hair flowers, garlands and pooja flowers. Rates change with the market, so confirm today's price when you order."
      />
      <section className="section section--tight">
        <div className="container">
          <div className="tabs" role="tablist">
            {CATEGORIES.map((c) => (
              <button key={c.id} role="tab" aria-selected={cat === c.id} className={cat === c.id ? "tab is-active" : "tab"} onClick={() => setCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="pgrid">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
