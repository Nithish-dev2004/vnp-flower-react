import React from "react";

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="pagehead">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="pagehead__text">{text}</p>}
      </div>
    </section>
  );
}
