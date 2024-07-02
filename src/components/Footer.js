// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Pranjal Kumar</p>
        <div className="social-media">
          <a
            href="https://x.com/pranjalk449"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <i className="fab fa-twitter">
              <img src="/images/icons8-twitter-48.png" alt="X" />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/pranjal-kumar-184913228/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in">
              <img src="/images/icons8-linkedin-48.png" alt="Linkedin" />
            </i>
          </a>
          <a
            href="https://github.com/pranjalee30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github">
              <img src="/images/icons8-github-48.png" alt="Github" />
            </i>
          </a>
          <a
            href="mailto:pranjalkee010@gmail.com"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fas fa-envelope">
              <img src="/images/icons8-mail-48.png" alt="Gmail" />
            </i>
          </a>
          <a
            href="https://www.instagram.com/_luminous_dreamer_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-github">
              <img src="/images/icons8-instagram-48.png" alt="Instagram" />
            </i>
          </a>
        </div>
        <p>Connect with me and let's work together!</p>
        <p>
          <a href="#contact" className="footer-link">
            Contact Me
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
