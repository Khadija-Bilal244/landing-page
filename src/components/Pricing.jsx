
import pricingImage from "../assets/pricing.png";
import "../styles/Pricing.css";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "£99",
      period: "/month",
      features: [
        "Annual Accounts",
        "Basic Tax Planning",
        "Tax Return Filing",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "£199",
      period: "/month",
      features: [
        "All Basic Features",
        "Monthly Bookkeeping",
        "VAT Returns",
        "Payroll Services",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "All Professional Features",
        "Financial Modeling",
        "Mergers & Acquisitions",
        "Dedicated Account Manager",
        "24/7 Support"
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <div
        className="page-hero pricing-hero page-hero-image"
        style={{ "--hero-image": `url(${pricingImage})` }}
      >
        <h1>Our Pricing Plans</h1>
        <p>Choose the plan that fits your business needs</p>
      </div>

      <div className="page-content">
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}
                <span className="period">{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
