
import ContactForm from "./ContactForm";
import heroBgImage from "../assets/hero-bg.png";

function Contact() {
  return (
    <div className="page-wrapper">
      <div
        className="page-hero contact-hero page-hero-image"
        style={{ "--hero-image": `url(${heroBgImage})` }}
      >
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="page-content">
        <div className="contact-info-grid">
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+44 7540 188918</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>accounts@nexusaccountants.co.uk</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>8 Ashgrove Road, Ilford, England IG3 9XE</p>
              </div>
            </div>
            
            <div className="office-hours">
              <h3>Office Hours</h3>
              <p><strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Sat-Sun:</strong> Closed</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;