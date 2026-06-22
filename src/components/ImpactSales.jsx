import React from "react";

function ImpactStats() {
  const stats = [
    {
      id: 1,
      number: "25+",
      label: "Years of Experience",
      icon: "fa-solid fa-calendar-check"
    },
    {
      id: 2,
      number: "500+",
      label: "Happy Clients",
      icon: "fa-solid fa-users"
    },
    {
      id: 3,
      number: "6",
      label: "Employees",
      icon: "fa-solid fa-user-tie"
    },
    {
      id: 4,
      number: "02",
      label: "Office: United Kingdom",
      icon: "fa-solid fa-building"
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
                <i className={stat.icon}></i>
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