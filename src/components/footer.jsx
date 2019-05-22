import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerBack">
      <center>
        <a href="http://smallworldcambodia.com">
          <img
            src="img/smallworld-logo.webp"
            className="smallworldLogo"
            alt="smallworld-venture"
          />
        </a>
        <p>Copyright © 2018 Koompi. All rights reserved</p>
        <p className="brainchild">A brainchild of SmallWorld Venture</p>
        <p className="privacy">
          <Link to="/privacy">Privacy </Link>
          <Link to="/feature"> Feature</Link>
          <Link to="/about-us"> About Us</Link>
          <Link to="/retailers"> Retailer</Link>
          <Link to="/news-and-events"> News</Link>
        </p>
        <a
          href="https://www.facebook.com/koompi/"
          target="_blank"
          data-tooltip="Follow us on Facebook"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="https://t.me/koompi"
          target="_blank"
          data-tooltip="Follow us on Telegram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-telegram-plane socailMedia" />
        </a>
        <a
          href="https://twitter.com/koompi_official"
          target="_blank"
          data-tooltip="Follow us on Twitter"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter socailMedia" />
        </a>
        <a
          href=" https://medium.com/@koompi"
          target="_blank"
          data-tooltip="Follow us on Medium"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium-m socailMedia" />
        </a>
      </center>
    </div>
  );
};

export default Footer;
