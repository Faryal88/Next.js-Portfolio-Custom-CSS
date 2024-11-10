import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.css"; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">
          PORT<span className="highlight">FOLIO</span>
        </div>
        <p className="footer-copyright">
          &copy; 2024 | Faryal Abbasi@.
        </p>

        <div className="footer-nav">
          <Link href="#home" className="footer-link">Home</Link>
          <Link href="#about" className="footer-link">About</Link>
          <Link href="#projects" className="footer-link">Projects</Link>
          <Link href="#contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-nav">
          <Link href="https://www.linkedin.com/in/faryal-abbasi-6b8bab2a9/" target="_blank" className="footer-link">LinkedIn</Link>
          <Link href="https://github.com/Faryal88" target="_blank" className="footer-link">GitHub</Link>
          <Link href="https://app.netlify.com/user/settings#profile" target="_blank" className="footer-link">Netlify</Link>
          <Link href="https://www.npmjs.com/~faryalabbasi88" target="_blank" className="footer-link">Npm</Link>
        </div>

        <div className="footer-social">
          <SocialIcon url="https://www.linkedin.com/in/faryal-abbasi-6b8bab2a9/" target="_blank" className="social-icon" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://github.com/Faryal88" target="_blank" className="social-icon" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://app.netlify.com/user/settings#profile" target="_blank" className="social-icon" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://www.npmjs.com/~faryalabbasi88" target="_blank" className="social-icon" style={{ height: 40, width: 40 }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
