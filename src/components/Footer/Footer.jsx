// components/Footer/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer content-container">
      <div className="footer-container">
        <h4>© {new Date().getFullYear()} Adabrah Lincoln Sedem</h4>
        <p>Passionate about web & mobile development • Built with React</p>
        <div className="footer-socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email Me</a>
        </div>
      </div>
    </footer>
  );
};
