import NexusLogo from "../assets/NexusLogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={NexusLogo} alt="Nexus Accountants" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Sectors</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>Portfolio</li>
      </ul>
    </nav>
  );
}

export default Navbar;
