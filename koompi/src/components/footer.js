import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
const { Title, Paragraph, Text } = Typography;
function Footer() {
  return (
    <div className="footerBackground">
      <div className="conainer">
        <center>
          <img
            style={{ height: "93px", marginTop: "50px" }}
            src="/img/koompi-sym-01.png"
          />
          <div>
            <Title
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                color: "white"
              }}
              level={4}
            >
              Copyright © 2020 Koompi. All rights reserved <br></br> A
              brainchild of SmallWorld Venture
            </Title>
          </div>
          <div>
            <p className="components-footer">
              {/* <Link to="/koompi-e">koompi E </Link>
              <Link to="/koompi-b">KOOMPI B </Link> */}
              <Link to="/contact">Contact Us </Link>
              <Link to="/koompi-e">About Us </Link>
              <Link to="/koompi-e">News </Link>
              <Link to="/koompi-e">KOOMPI OS </Link>
            </p>
          </div>
          <div>
            <p className="footer_socail_media">
              <a>
                <img src="/img/facebook.svg" />
              </a>
              <a>
                <img src="/img/telegram.svg" />
              </a>
              <a>
                <img src="/img/medium.svg" />
              </a>
              <a>
                <img src="/img/twitter.svg" />
              </a>
            </p>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Footer;
