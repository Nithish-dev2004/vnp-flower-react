import React from "react";
import Art from "../components/Art";
import PageHeader from "../components/PageHeader";
import { OCCASIONS, PACKAGES } from "../data/products";
import { waLink } from "../config";

export default function Occasions() {
  return (
    <>
      <PageHeader
        eyebrow="For every moment"
        title="Flowers for your occasion"
        text="From a quiet morning pooja to a big wedding hall, we prepare it fresh and on time."
      />

      <section className="section section--tight">
        <div className="container occ">
          {OCCASIONS.map((o, i) => (
            <article key={o.id} className={`occ__row ${i % 2 ? "occ__row--rev" : ""}`}>
              <div className="frame"><Art kind={o.kind} /></div>
              <div>
                <h2>{o.title}</h2>
                <p>{o.text}</p>
                <a className="link-arrow" href={waLink(`Hello, I want to ask about flowers for: ${o.title}`)} target="_blank" rel="noreferrer">
                  Ask about this →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Wedding packages</p>
            <h2>Simple packages to start from</h2>
            <p className="muted">Every wedding is different. These are starting points, and we'll make a custom quote for you.</p>
          </div>
          <div className="packs">
            {PACKAGES.map((p) => (
              <div key={p.name} className={`pack ${p.featured ? "pack--featured" : ""}`}>
                {p.featured && <span className="pack__tag">Most chosen</span>}
                <h3>{p.name}</h3>
                <div className="pack__price">{p.price}</div>
                <ul>
                  {p.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <a className={p.featured ? "btn btn--gold" : "btn btn--green"} href={waLink(`Hello, I am interested in the ${p.name} wedding package.`)} target="_blank" rel="noreferrer">
                  Get a quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
