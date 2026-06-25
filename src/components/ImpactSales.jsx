import React from "react";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import "../styles/ImpactSales.css";

function ImpactStats() {
  const stats = [
    {
      id: 1,
      number: "25+",
      label: "Years of Experience",
      icon: r1
    },
    {
      id: 2,
      number: "500+",
      label: "Happy Clients",
      icon: r2
    },
    {
      id: 3,
      number: "6",
      label: "Employees",
      icon: r3
    },
    {
      id: 4,
      number: "02",
      label: "Office: United Kingdom",
      icon: r4
    }
  ];

  return (
    <section className="impact-stats">
      <div className="impact-container">
        {/* Header */}
        <div className="impact-header">
          <span className="impact-subtitle">SMALL FIRM BIG IMPACT</span>
          <h2>Nexus Accountants & Taxation Ltd.</h2>
          <p>
            This highlights our skills, experience, and quality of work,
            demonstrating our commitment to excellence for every client.
          </p>
        </div>

        {/* Stats Grid - 4 cards */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.label} />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;