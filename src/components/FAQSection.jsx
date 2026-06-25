import React, { useState } from 'react';
import "../styles/FAQSection.css";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What type of services do Nexus Accountants offer?",
      answer: "Nexus Accountants offers a wide array of services a business needs, including Personal and Business Tax Preparation, Tax Planning, Accounting, Bookkeeping, Payroll Services, VAT Returns, Financial Modeling, Mergers & Acquisitions, Corporate Planning, and Due Diligence. We provide tailored solutions to meet your specific business requirements."
    },
    {
      question: "How are Nexus Accountants different?",
      answer: "With years of industry experience and a dedicated team of expert professionals, we are committed to delivering unmatched service quality. At Nexus, we start from the principle that every client is our only client. We focus on building deep-rooted relationships and providing proactive, innovative solutions that help businesses grow and succeed. Our digital-first approach ensures you get real-time insights into your business finances."
    },
    {
      question: "How can Xero help streamline my accounting processes?",
      answer: "Xero automates invoicing, bank reconciliation, and financial reporting, saving time and reducing errors. It offers real-time financial visibility, allowing you to track cash flow, manage expenses, and make informed business decisions. With Xero, you can access your financial data from anywhere, collaborate with your accountant seamlessly, and ensure your books are always up-to-date."
    }
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-icon"></span>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;