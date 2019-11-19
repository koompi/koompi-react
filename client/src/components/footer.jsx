import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footerBack">
      <center>
        <a href="http://smallworldcambodia.com">
          <img
            src="img/smallworld-logo.png"
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
        <div className="footer_socail_media">
          <a
            href="https://www.facebook.com/koompi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/facebook.png" alt="koompi facebook page" />
          </a>
          <a href="https://t.me/koompi" target="_blank" rel="noopener noreferrer">
            <img src="/img/icons/telegram.png" alt="koompi telegram" />
          </a>
          <a
            href="https://twitter.com/koompi_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/twitter.png" alt="koompi twitter" />
          </a>
          <a
            href=" https://medium.com/@koompi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/icons/medium.png"
              alt="koompi twitter"
              className="medium_logo"
            />
          </a>
        </div>
      </center>
    </div>
  )
}

export default Footer
