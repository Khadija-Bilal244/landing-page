import React from "react";
import img from "../assets/pricing.png"; 
import descriptionImg from "../assets/pound.png"; 
import SectorBack from "../common/PortfolioBack/PortfolioBack"; 
import "../styles/Pricing.css"; 

const Pricing = () => {
  return (
    <>
      <section className="pricing mb">
        <SectorBack
          title="Pricing"
          cover={img}
          typedLines={[
            "We want to help our fellow members of society with our expertise and provide them peace of mind by taking away all their stress managing their most difficult affairs of the business and saving them time so that they can focus on expansion.",
          ]}
        />

        <div className="description">
          <div className="description-content">
            <img
              src={descriptionImg}
              alt="Description"
              className="description-img"
            />
            <div className="description-text">
              <p>
                Whether you're an individual, partnership, or limited company,
                our firm offers expert, tailored services to meet your specific
                needs at the right time. We pride ourselves on developing close,
                one-to-one relationships with our clients, allowing us to
                provide personalized, strategic advice that enhances both
                business and personal finances. Alongside dependable support, we
                deliver forward-thinking, innovative solutions designed for
                today's dynamic business environment, ensuring your financial
                success is always in capable hands.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section">
          <div className="pricing-section-border"></div>
          <h2 className="pricing-title">Our Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-item">
              <h3>Basic Plan</h3>
              <p>From £100 / month</p>
              <ul>
                <li>Personalized support</li>
                <li>Consultations</li>
              </ul>
            </div>
            <div className="pricing-item popular">
              <h3>Standard Plan</h3>
              <p>From £250 / month</p>
              <ul>
                <li>Everything in Basic Plan</li>
                <li>Quarterly reporting</li>
                <li>Business strategy sessions</li>
              </ul>
            </div>
            <div className="pricing-item">
              <h3>Premium Plan</h3>
              <p>From £499 / month</p>
              <ul>
                <li>Everything in Standard Plan</li>
                <li>Year-end reviews</li>
                <li>Priority support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pricing-section-border"></div>
      </section>

      <section className="pricing-section">
        <h2 className="pricing-title">Limited Company Year End Accounts</h2>
        <div className="pricing-title"></div>
        <div className="pricing-grid">
          <div className="pricing-item">
            <h4>Turnover under £50,000</h4>
            <p>Fee (excluding VAT): £600</p>
          </div>
          <div className="pricing-item">
            <h4>Turnover £50,000 to £75,000</h4>
            <p>Fee (excluding VAT): £750</p>
          </div>
          <div className="pricing-item">
            <h4>Turnover £75,000 to £100,000</h4>
            <p>Fee (excluding VAT): £900</p>
          </div>
          <div className="pricing-item">
            <h4>Turnover £100,000 to £150,000</h4>
            <p>Fee (excluding VAT): £1,200</p>
          </div>
          <div className="pricing-item">
            <h4>Turnover £150,000 to £250,000</h4>
            <p>Fee (excluding VAT): £1,800</p>
          </div>
          <div className="pricing-item">
            <h4>Turnover £250,000 to £500,000</h4>
            <p>Fee (excluding VAT): £2,400</p>
          </div>
          <div className="pricing-item">
            <h4>Turnover over £500,000</h4>
            <p>Fee (excluding VAT): POA</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="pricing-section-border"></div>

        <h2 className="pricing-title">Other Services</h2>
        <div className="pricing-grid">
          <div className="pricing-item">
            <h4>Limited Company Annual Accounts</h4>
            <p>£600 - £2,400</p>
          </div>
          <div className="pricing-item">
            <h4>General Bookkeeping</h4>
            <p>£40 - £60 per hour</p>
          </div>
          <div className="pricing-item">
            <h4>VAT Return (per quarter)</h4>
            <p>£250</p>
          </div>
          <div className="pricing-item">
            <h4>Companies House</h4>
            <p>£90 (inc. companies house fee)</p>
          </div>
          <div className="pricing-item">
            <h4>Monthly Payroll (up to 3 payslips)</h4>
            <p>£35 per month</p>
          </div>
          <div className="pricing-item">
            <h4>Additional Payslips & Payroll Processing</h4>
            <p>£10 per employee per month</p>
          </div>
          <div className="pricing-item">
            <h4>Limited Company Incorporation</h4>
            <p>£200</p>
          </div>
          <div className="pricing-item">
            <h4>Tax Investigation fee cover</h4>
            <p>From £500</p>
          </div>

          <div className="pricing-item">
            <h4>Self Assessment Return</h4>
            <p> Starts From £300</p>
          </div>

          <div className="pricing-item">
            <h4>Sole Traders accounts with turnover less than £50,000</h4>
            <p> £450</p>
          </div>

          <div className="pricing-item">
            <h4>
              Sole Traders accounts with turnover between £50,000 and £100,000
            </h4>
            <p> £800</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="pricing-section-border"></div>
        <h2 className="pricing-title">Personal Tax</h2>
        <div className="pricing-grid">
          <div className="pricing-item">
            <h4>Self Assessment Return</h4>
            <p> £300</p>
          </div>
          <div className="pricing-item">
            <h4>Sole Traders accounts with turnover less than £50,000</h4>
            <p> £450</p>
          </div>
          <div className="pricing-item">
            <h4>
              Sole Traders accounts with turnover between £50,000 and £100,000
            </h4>
            <p> £800</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;