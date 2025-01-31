import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h2 className="footer-column-title">Platform</h2>
        <ul className="footer-column-links">
          <li><a href="https://mostly.ai/">Website</a></li>
          <li><a href="https://mostly.ai/privacy-and-security/">Privacy and security</a></li>
          <li><a href="https://mostly.ai/professional-services-and-training/">Professional services and training</a></li>
          <li><a href="https://mostly.ai/pricing">Pricing</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 className="footer-column-title">Use cases</h2>
        <ul className="footer-column-links">
          <li><a href="https://mostly.ai/use-case/synthetic-data-sharing/">Cross-border and enterprise data sharing</a></li>
          <li><a href="https://mostly.ai/use-case/synthetic-test-data-for-software-testing/">Testing and product development</a></li>
          <li><a href="https://mostly.ai/use-case/synthetic-data-for-analytics-ai-training/">AI/ML Development</a></li>
          <li><a href="https://mostly.ai/use-case/fair-explainable-ai-testing-governance/">Fairness and explainability of AI/ML</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 className="footer-column-title">Solutions</h2>
        <ul className="footer-column-links">
          <li><a href="https://mostly.ai/industries/synthetic-data-for-banking/">Banking</a></li>
          <li><a href="https://mostly.ai/industries/synthetic-data-for-insurance/">Insurance</a></li>
          <li><a href="https://mostly.ai/industries/synthetic-data-for-telcos/">Telecommunications</a></li>
          <li><a href="https://mostly.ai/industries/synthetic-data-healthcare">Healthcare</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 className="footer-column-title">Company</h2>
        <ul className="footer-column-links">
          <li><a href="https://mostly.ai/about-us/">About us</a></li>
          <li><a href="https://mostly.ai/jobs/">Careers</a></li>
          <li><a href="https://mostly.ai/contact/">Contact us</a></li>
          <li><a href="https://mostly.ai/resources/">Resources</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
