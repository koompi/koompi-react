import React from "react";
import { Typography } from "antd";
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
            <Title style={{ marginTop: "30px", color: "white" }} level={4}>
              Copyright © 2020 Koompi. All rights reserved <br></br> A
              brainchild of SmallWorld Venture
            </Title>
          </div>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Footer;
