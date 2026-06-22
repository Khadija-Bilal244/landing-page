
import logo36 from "../assets/logo36.png";
import logo37 from "../assets/logo37.png";
import logo38 from "../assets/logo38.png";
import logo39 from "../assets/logo39.png";
import logo41 from "../assets/logo41.png";
import logo43 from "../assets/logo43.png";
import logo45 from "../assets/logo45.png";
import logo46 from "../assets/logo46.png";
import logo40 from "../assets/logo40.png";
import logo42 from "../assets/logo42.png";
import logo44 from "../assets/logo44.png";

function TrustedBanner() {
  const logos = [
    { id: 1, name: "ACCA", image: logo36 },
    { id: 2, name: "Dext", image: logo37 },
    { id: 3, name: "Microsoft Office", image: logo38 },
    { id: 4, name: "Hubdoc", image: logo39 },
    { id: 5, name: "IRIS", image: logo41 },
    { id: 6, name: "AATT", image: logo43 },
    { id: 7, name: "CAPIUM", image: logo45 },
    { id: 8, name: "Xero", image: logo46 },
    { id: 9, name: "Xero", image: logo40 },
    { id: 10, name: "Dext", image: logo42 },
    { id: 11, name: "Hubdoc", image: logo44 },
  ];

  return (
    <div className="trusted-banner">
      <div className="trusted-banner-header">
        <h3>Trusted by Leading Partners</h3>
        <p>Proudly working with industry leaders</p>
      </div>
      <div className="trusted-banner-track-wrapper">
        <div className="trusted-banner-track">
          {[0, 1].map((groupIndex) => (
            <div
              className="trusted-banner-group"
              key={groupIndex}
              aria-hidden={groupIndex === 1}
            >
              {logos.map((logo) => (
                <div key={`${logo.id}-${groupIndex}`} className="trusted-logo-item">
                  <div className="logo-circle">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="logo-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedBanner;
