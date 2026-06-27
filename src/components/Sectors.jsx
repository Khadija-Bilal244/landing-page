import "../styles/Sectors.css";
import sector11 from "../assets/11.png";
import sector12 from "../assets/12.png";
import sector13 from "../assets/13.png";
import sector14 from "../assets/14.png";
import sector15 from "../assets/15.png";
import sector16 from "../assets/16.png";
import sector17 from "../assets/17.png";
import sector18 from "../assets/18.png";
import sector19 from "../assets/19.png";
import sector20 from "../assets/20.png";
import sector21 from "../assets/21.png";
import sector22 from "../assets/22.png";
import sector23 from "../assets/23.png";
import sector24 from "../assets/24.png";
import sector25 from "../assets/25.png";
import sector26 from "../assets/26.png";
import sector27 from "../assets/27.png";
import sector28 from "../assets/28.png";
import sector29 from "../assets/29.png";
import sector30 from "../assets/30.png";
import sector31 from "../assets/31.png";
import sector32 from "../assets/32.png";
import sector33 from "../assets/33.png";
import sector34 from "../assets/34.png";

const sectors = [
  { name: "Food, Beverages and Catering", image: sector11 },
  { name: "Retail",                       image: sector12 },
  { name: "Restaurants and Hotels",       image: sector13 },
  { name: "Printing & Design",            image: sector14 },
  { name: "Contractors / Government",     image: sector15 },
  { name: "Entertainment",               image: sector16 },
  { name: "Chauffeuring",               image: sector17 },
  { name: "Marketing",                   image: sector18 },
  { name: "Car Hire",                    image: sector19 },
  { name: "Manufacturing",              image: sector20 },
  { name: "Property Management & Development", image: sector21 },
  { name: "Software House & Development", image: sector22 },
  { name: "Telecommunication",           image: sector23 },
  { name: "Sale Purchase of Cars",       image: sector24 },
  { name: "Security Companies",          image: sector25 },
  { name: "Hair Dressers & Beauty Salons", image: sector26 },
  { name: "Grocery Stores",             image: sector27 },
  { name: "Meat Wholesalers",           image: sector28 },
  { name: "Financial Services",         image: sector29 },
  { name: "Automotive",                 image: sector30 },
  { name: "Education",                  image: sector31 },
  { name: "Transport",                  image: sector32 },
  { name: "IT",                         image: sector33 },
  { name: "Healthcare",                 image: sector34 },
];

function Sectors() {
  return (
    <div className="sectors-page">
      <div className="sectors-header">
        <h1>Sectors We Have Served</h1>
        <p>
          Nexus Accountants has had the privilege of serving a wide range of
          sectors, helping businesses navigate their financial journeys with
          precision and excellence.
        </p>
      </div>
      <div className="sectors-image-grid">
        {sectors.map((sector, index) => (
          <div key={index} className="sector-box">
            <img src={sector.image} alt={sector.name} />
            <div className="sector-box-overlay">
              <h5>{sector.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sectors;