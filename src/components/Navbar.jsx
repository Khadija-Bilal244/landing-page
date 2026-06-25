import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import NexusLogo from "../assets/NexusLogo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <img src={NexusLogo} alt="Nexus Accountants" className="navbar-logo" />
      </Link>

      <button
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile & Desktop menu - now using navbar-links div wrapper */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/sectors" onClick={closeMenu}>Sectors</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
          <li><NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink></li>
          <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;