import React from "react";
import { Typography } from "antd";
import Navbar from "./Navbar";
const { Title, Paragraph, Text } = Typography;
function Koompi_Os() {
  return (
    <React.Fragment>
      <Navbar />
      {/* ===========Main section========= */}

      <div style={{ marginTop: "130px" }} className="container">
        <center>
          <Title className="koompi-os-main-title">KOOMPI OS</Title>
        </center>
        <div className="text-container">
          <Paragraph className="koompi-os-paragraph top-of-paragraph">
            KOOMPI OS is the operating system that powers every computer and
            comes with an entire suite of beautifully designed apps.It’s been
            built from the ground up with privacy and security in mind
          </Paragraph>
        </div>
      </div>
      <center>
        <img style={{ maxWidth: "100%" }} src="img/Macbook.png" />
      </center>

      {/* ===========Easy to Use========= */}

      <div className="container top-sections">
        <div className="text-container">
          <Title className="koompi-os-title">Easy to Use</Title>
          <Paragraph className="koompi-os-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Paragraph>
        </div>
        <center>
          <img style={{ maxWidth: "100%" }} src="/img/Macbook.png" />
        </center>
      </div>
    </React.Fragment>
  );
}

export default Koompi_Os;
