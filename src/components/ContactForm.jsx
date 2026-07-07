import { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.message) setStatus({ message: "", type: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ message: "Please fill in all fields.", type: "error" });
      return;
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      setStatus({ message: "Please enter a valid email address.", type: "error" });
      return;
    }

    setLoading(true);
    setStatus({ message: "Sending your message...", type: "info" });

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ message: data.message || "Message sent successfully!", type: "success" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ message: data.message || "Failed to send message.", type: "error" });
      }
    } catch {
      setStatus({ message: "Server offline. Please try again later.", type: "error" });
    }

    setLoading(false);
    setTimeout(() => setStatus({ message: "", type: "" }), 5000);
  };

  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <span className="contact-eyebrow">Contact Us</span>
        <h2>
          Let's Secure Your<br />
          <span>Financial Future</span>
        </h2>
        <p>
          Expert accounting, taxation, and business advisory services tailored to your needs. 
          Our team of qualified professionals is dedicated to helping you navigate the complexities 
          of UK taxation and financial management with confidence and peace of mind.
        </p>
      </div>

      {/* Form Card */}
      <div className="contact-page-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field-group">
              <label>NAME <span className="required-star">*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-group">
              <label> EMAIL <span className="required-star">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field-group message-group">
            <label>MESSAGE <span className="required-star">*</span></label>
            <textarea
              name="message"
              placeholder="Tell us about your accounting, tax, or business needs..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="button-wrapper">
            <button type="submit" className="send-btn" disabled={loading}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status.message && (
            <div className={`form-status ${status.type}`}>{status.message}</div>
          )}
        </form>
      </div>

      {/* Info Cards */}
      <div className="contact-info-cards">
        <div className="info-card">
          <span className="info-card-icon">📧</span>
          <h4>Email Us</h4>
          <a href="mailto:imran@nexusaccountants.co.uk">imran@nexusaccountants.co.uk</a>
          <span className="info-sub">We'll respond within 24 hours</span>
        </div>
        <div className="info-card">
          <span className="info-card-icon">📞</span>
          <h4>Call Us</h4>
          <a href="tel:+447540188918">+44 7540 188918</a>
          <span className="info-sub">Mon–Fri from 9am to 5:30pm</span>
        </div>
        <div className="info-card">
          <span className="info-card-icon">📍</span>
          <h4>Visit Us</h4>
          <span className="info-value">8 Ashgrove Road</span>
          <span className="info-sub">Ilford, England IG3 9XE</span>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;