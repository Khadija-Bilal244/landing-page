import cardsVideo from "../assets/cards.mp4";
import logo36 from "../assets/logo36.png";
import logo37 from "../assets/logo37.png";
import logo38 from "../assets/logo38.png";
import logo39 from "../assets/logo39.png";
import logo40 from "../assets/logo40.png";
import logo41 from "../assets/logo41.png";
import logo42 from "../assets/logo42.png";
import logo43 from "../assets/logo43.png";
import logo44 from "../assets/logo44.png";
import logo45 from "../assets/logo45.png";
import logo46 from "../assets/logo46.png";
import "../styles/GdprTrusted.css";

const logos = [
  { id: 1,  name: "ACCA",             image: logo36 },
  { id: 2,  name: "Dext",             image: logo37 },
  { id: 3,  name: "Microsoft Office", image: logo38 },
  { id: 4,  name: "Hubdoc",           image: logo39 },
  { id: 5,  name: "Xero",             image: logo40 },
  { id: 6,  name: "IRIS",             image: logo41 },
  { id: 7,  name: "Dext",             image: logo42 },
  { id: 8,  name: "AATT",             image: logo43 },
  { id: 9,  name: "Hubdoc",           image: logo44 },
  { id: 10, name: "CAPIUM",           image: logo45 },
  { id: 11, name: "Xero",             image: logo46 },
];

function GdprTrusted() {
  return (
    <section className="gdpr-trusted-section">
      <div className="gdpr-section-heading">
        <h2>Our Services &amp; Trusted Partners</h2>
        <p>Comprehensive accounting solutions backed by industry-leading tools</p>
      </div>
      <div className="gdpr-inner">
        <div className="gdpr-video-wrapper">
          <video
            src={cardsVideo}
            autoPlay
            loop
            muted
            playsInline
            className="gdpr-video"
          />
        </div>
        <div className="gdpr-text">
          <h3>
            We take care of all dealings with HMRC &amp; file all necessary
            returns.
          </h3>
          <p>
            Nexus Accountants is a business service company. We provide a range
            of Accounting and Financial services to businesses throughout the
            UK. NEXUS mission is to deliver a portfolio of diversified,
            specialized, and strategic accounting services for our clients.
          </p>
          <p>
            Our team believes in establishing Nexus as a successful company
            that ensures satisfaction, success, and optimal benefits for its
            employees as well as its clients.
          </p>
        </div>
      </div>
      <div className="gdpr-trusted-wrapper">
        <div className="gdpr-track-outer">
          <div className="gdpr-track">
            {[0, 1].map((g) => (
              <div className="gdpr-track-group" key={g} aria-hidden={g === 1}>
                {logos.map((logo) => (
                  <div key={`${logo.id}-${g}`} className="gdpr-logo-item">
                    <div className="gdpr-logo-circle">
                      <img src={logo.image} alt={logo.name} className="gdpr-logo-img" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default GdprTrusted;