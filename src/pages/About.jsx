import React from "react";
import { Link } from "react-router-dom";
import Art from "../components/Art";
import PageHeader from "../components/PageHeader";

const STEPS = [
  { t: "Market at dawn", d: "We reach the flower market before sunrise and choose the freshest buds by hand." },
  { t: "Sorting", d: "Flowers are cleaned and sorted by kind and size for garlands and hair strands." },
  { t: "Stringing", d: "Each flower is tied on cotton thread, the way it has always been done." },
  { t: "Fresh to you", d: "Ready for pick-up or delivery the same morning, still fragrant." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A shop built on tradition"
        text="We still buy and string flowers the traditional way, and we think you can smell the difference."
      />

      <section className="section section--tight">
        <div className="container split">
          <div className="frame"><Art kind="basket" /></div>
          <div>
            <h2>Our story</h2>
            <p>
              VNP Flower Shop began with a simple idea: sell flowers the way families have
              always bought them, fresh from the market, tied on thread, and ready for the day.
            </p>
            <p>
              Today we make jasmine hair flowers for women, garlands for temples and homes,
              and full decoration for weddings and festivals. We know many of our customers
              by name, and many of them have been with us for years.
            </p>
            <ul className="ticks">
              <li>Fresh from the market every morning</li>
              <li>Hand strung on cotton thread</li>
              <li>Honest, fair prices</li>
            </ul>
            <Link className="btn btn--green" to="/contact">Visit the shop</Link>
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow eyebrow--light">How we work</p>
            <h2>From market to your hands</h2>
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.t}>
                <span className="steps__n">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
