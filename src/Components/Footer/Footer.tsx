import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img
          className="logofooter"
          src="https://cdn-icons-png.flaticon.com/128/361/361998.png"
          alt="Logo"
        />
      </div>
      <div className="creditsfooter">
        <p>Vincenzo, Stefania e Valentina Inc.</p>
      </div>
      <div className="iconsfooter">
        <a href="https://www.linkedin.com" className="icon-link">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="https://www.facebook.com" className="icon-link">
          <i className="ri-facebook-fill"></i>
        </a>
      </div>
      <div className="additional-info">
        <p>
          Questo sito è stato creato con amore da Vincenzo, Stefania e Valentina
          Inc. © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
