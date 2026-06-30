import { useState } from "react";
import NexusLogo from "../assets/NexusLogo.png";
import "../styles/Footer.css";

function Footer() {
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    if (!message.trim()) return;
    const phoneNumber = "447540188918";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendWhatsApp();
    }
  };

  return (
    <>
      <footer className="footer">
      <div className="footer-left">
        <img src={NexusLogo} alt="Nexus Accountants" className="footer-logo" />

        <p className="footer-tagline">Focused on Your Growth</p>
        <p className="footer-tagline">Committed to Your Peace of Mind</p>

        <div className="footer-socials">
          <a href="https://www.facebook.com/NexusAccountantsAndTaxationLtd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/nexus_accountants/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
         <a href="https://www.tiktok.com/@nexus_accountants_ltd?fbclid=IwY2xjawFhJCZleHRuA2FlbQIxMAABHTo-fKP7ocA3bMwihlwIdwA70BF3A4H_Oolt0uEkY8PXY1Ts2NpiwstVtA_aem_E5MJeNR3gPNe3BjNI2F7eA" target="_blank"
            rel="noopener noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/@muhammadimranshahid589" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p><i className="fas fa-phone"></i> Tel: +44 7540 188918</p>
          <p><i className="fas fa-envelope"></i> Email: accounts@nexusaccountants.co.uk</p>
          <p><i className="fas fa-map-marker-alt"></i> Address: 8 Ashgrove Road Ilford England IG3 9XE</p>

          <div className="footer-message-us">
            <input
              type="text"
              className="footer-message-input"
              placeholder="Message us on WhatsApp..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Message us on WhatsApp"
            />
            <button
              type="button"
              className="footer-message-send"
              onClick={handleSendWhatsApp}
              aria-label="Send WhatsApp message"
            >
              <i className="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-services">
        <h2>Our Services</h2>
        <ul>
          <li>Final Account Services</li>
          <li>Mergers & Acquisitions</li>
          <li>Tax Investigations</li>
          <li>Corporate Planning</li>
          <li>Personal Tax Planning</li>
          <li>Financial Modeling</li>
        </ul>

        <p className="footer-note">
          <i className="fas fa-quote-left"></i> We provide tailored services according to your requirements. We aim
          to work with you to plan your tax affairs, maximize your wealth, and
          provide you peace of mind. <i className="fas fa-quote-right"></i>
        </p>
      </div>

      <div className="footer-right">
        <div className="footer-services">
          <h2>Our Services</h2>
          <ul>
            <li>Budget/Forecasting</li>
            <li>VAT Returns/Intrastate</li>
            <li>Technology Training</li>
            <li>Models for Internal Control</li>
            <li>Bookkeeping/Payroll/Admin</li>
            <li>Due Diligence</li>
          </ul>
        </div>
      </div>
    </footer>
      <div className="footer-bottom">
        Registered in England & Wales - Company Registration No. 11275399
      </div>
    </>
  );
}

export default Footer;