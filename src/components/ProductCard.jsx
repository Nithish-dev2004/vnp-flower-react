import React from "react";
import Art from "./Art";
import { waLink } from "../config";

export default function ProductCard({ p }) {
  return (
    <article className="pcard">
      <div className="pcard__img">
        <Art kind={p.kind} />
      </div>
      <div className="pcard__body">
        <span className="pcard__local">{p.local}</span>
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <div className="pcard__foot">
          <div>
            <strong>{p.price}</strong>
            <small> {p.unit}</small>
          </div>
          <a className="btn btn--green btn--sm" href={waLink(`Hello, I want to order: ${p.name} (${p.price} ${p.unit}).`)} target="_blank" rel="noreferrer">
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
