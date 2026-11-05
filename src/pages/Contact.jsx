import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { SHOP, waLink } from "../config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Please fill in all the fields.");
      return;
    }
    setError("");
    const text = `Hello ${SHOP.name},\nName: ${form.name}\nPhone: ${form.phone}\nOrder: ${form.message}`;
    window.open(waLink(text), "_blank", "noopener");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Visit or order today"
        text="Walk in, call us, or send your order on WhatsApp. We open early so your flowers are fresh."
      />
      <section className="section section--tight">
        <div className="container contact">
          <div className="contact__info">
            <ul>
              <li><b>Address</b><span>{SHOP.address}</span></li>
              <li><b>Phone</b><a href={`tel:${SHOP.phone.replace(/\s/g, "")}`}>{SHOP.phone}</a></li>
              <li><b>Opening hours</b><span>{SHOP.hours}</span></li>
              <li><b>Email</b><a href={`mailto:${SHOP.email}`}>{SHOP.email}</a></li>
            </ul>
            <a className="btn btn--gold" href={waLink("Hello VNP Flower Shop, I would like to order.")} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <h2>Place an order</h2>
            <label>
              Your name
              <input name="name" value={form.name} onChange={onChange} placeholder="Name" />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="Phone" />
            </label>
            <label>
              What do you need?
              <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder="Eg. 5 strands jasmine, 1 rose garland for tomorrow morning" />
            </label>
            {error && <p className="form__error">{error}</p>}
            <button className="btn btn--green" type="submit">Send on WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  );
}
