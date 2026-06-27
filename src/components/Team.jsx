import React, { useState } from 'react';
import team45 from "../assets/45.png";
import team46 from "../assets/46.png";
import team47 from "../assets/47.png";
import team48 from "../assets/48.png";
import team50 from "../assets/50.png";
import team51 from "../assets/51.png";
import '../styles/Team.css';

const Team = () => {
  const [hoveredId, setHoveredId] = useState(null);

 const teamMembers = [
  { id: 1, img: team45, name: 'M Shahid', role: 'Founder & CEO' },
  { id: 2, img: team46, name: 'Ruqqaiya Raza', role: 'Senior Accountant' },
  { id: 3, img: team47, name: 'Ali Akram', role: 'Investment Advisor & Financial Modelling Analyst' },
  { id: 4, img: team48, name: 'Rehan Farooq', role: 'Senior Accountant' },
  { id: 5, img: team50, name: 'Tanvir Chaudhary', role: 'Senior Accountant' },
  { id: 6, img: team51, name: 'Mehreen Tanvir', role: 'Semi-Senior Accountant' },
];

  return (
    <section className="team-background">
      <div className="container">
        <div className="heading">
          <h1>Meet Nexus Accountants Leadership</h1>
          <p>
            We provide start-ups and SMEs with full accounting, tax &amp;
            specialised services and assist entrepreneurs to help them grow
            and succeed by removing their costs and hassle.
          </p>
        </div>

        <div className="content mtop grid3">
          {teamMembers.map((member) => (
            <div
              className={`box ${hoveredId === member.id ? 'hovered' : ''}`}
              key={member.id}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="img-container">
                <img src={member.img} alt={member.name} />
                <div className="caption">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;