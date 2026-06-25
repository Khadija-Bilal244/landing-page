
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-title">
        <h1>NEXUS ACCOUNTANTS</h1>
        <h2>& TAXATION LTD</h2>
   

      <div className="hero-cards">
        <div>
          <h3>Accountants</h3>
          <p>
            The firm is managed by a team of qualified accountants with global
            working experience.
          </p>
        </div>

        <div>
          <h3>Tailored Service</h3>
          <p>
            The firm provides accountancy and consultancy services to accounting
            & audit firms across UK.
          </p>
        </div>

        <div>
          <h3>Grow Your Business</h3>
          <p>
            We aim to work with you to plan your tax affairs, maximize your
            wealth and provide you with peace of mind.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
