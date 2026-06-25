import { useState } from "react";
import "../styles/ContactForm.css";
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
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
    setStatus({ message: "Sending message...", type: "info" });

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus({ message: data.message || "Message sent successfully!", type: "success" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ message: data.message || "Failed to send message.", type: "error" });
      }
    } catch (error) {
      setStatus({ message: "Server offline. Please try again later.", type: "error" });
    }

    setLoading(false);
    setTimeout(() => setStatus({ message: "", type: "" }), 5000);
  };

  return (
    <div className="contact-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Contact Us</h2>
        <hr className="form-divider" />

        <div className="form-row">
          <div className="field-group">
            <label>YOUR NAME <span className="required-star">*</span></label>
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
            <label>YOUR EMAIL <span className="required-star">*</span></label>
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

        <hr className="field-divider" />

        <div className="field-group">
          <label>YOUR MESSAGE <span className="required-star">*</span></label>
          <textarea
            name="message"
            placeholder="Tell us about your project and how we can help..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <hr className="field-divider" />

        <div className="button-wrapper">
          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status.message && (
          <div className={`form-status ${status.type}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;