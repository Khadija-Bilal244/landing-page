import NexusLogo from "../assets/NexusLogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={NexusLogo} alt="Nexus Accountants" className="footer-logo" />

        <p className="footer-tagline">Focused on Your Growth</p>
        <p className="footer-tagline">Committed to Your Peace of Mind</p>

        <div className="footer-socials">
          <span>f</span>
          <span>◎</span>
          <span>♪</span>
          <span>▶</span>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Tel: +44 7540 188918</p>
          <p>Email: accounts@nexusaccountants.co.uk</p>
          <p>Address: 8 Ashgrove Road Ilford England IG3 9XE</p>
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
      </div>

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

        <p className="footer-note">
          We provide tailored services according to your requirements. We aim
          to work with you to plan your tax affairs, maximize your wealth, and
          provide you peace of mind.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
