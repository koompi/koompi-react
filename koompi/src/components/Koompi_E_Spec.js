import React from "react";

import { Row, Col } from "antd";
import { List } from "antd";
import Navbar from "./Navbar";
import Sub_Navbar_Koompi_E from "./Sub_Navbar_Koompi_E";

const title = [
  {
    id: 1,
    title: "Processor",
    des: "Intel® Core™ i7 7500U Processor"
  },
  {
    id: 2,
    title: "Operating System",
    des: "KOOMPI OS"
  },
  {
    id: 3,
    title: "Memory",
    des: "up to 16 GB SDRAM(Optional)"
  },
  {
    id: 4,
    title: "Display",
    des: "FHD-Anti-Glare"
  },
  {
    id: 5,
    title: "Graphic",
    des: "NVIDIA® GeForce® MX150 , with 2GB GDDR5 VRAM"
  },
  {
    id: 6,
    title: "Keyboard",
    des: "256SSD SATA 3.0 M.2 SSD"
  },
  {
    id: 7,
    title: "Storage",
    des: "Chiclet keyboardIlluminated chiclet keyboard(On selected models)"
  },
  {
    id: 8,
    title: "WebCam",
    des: "VGAWebcam"
  },
  {
    id: 9,
    title: "Audio",
    des: "Built-in 2 W Stereo Speaker with Microphone"
  },
  {
    id: 10,
    title: "Battery",
    des: "3 -Cell 42 Wh Battery"
  },
  {
    id: 11,
    title: "Weight",
    des: "1.5 kg ~ 1.7 kg with battery"
  },
  {
    id: 12,
    title: "Security",
    des: "BIOS user password protection HDD user password protection"
  }
];
function Koompi_E_Spec() {
  return (
    <div>
      <Navbar />
      <Sub_Navbar_Koompi_E />
      <div className="spec-background">
        <div className="container">
          <List
            itemLayout="horizontal"
            dataSource={title}
            renderItem={item => (
              <List.Item>
                <div className=" spec-grid">
                  <Row>
                    <Col sm={12}>
                      <h2
                        style={{
                          fontSize: "38px"
                        }}
                      >
                        {item.title}
                      </h2>
                    </Col>
                    <Col sm={12}>
                      <p
                        style={{
                          fontSize: "26px"
                        }}
                      >
                        {item.des}
                      </p>
                    </Col>
                  </Row>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Koompi_E_Spec;
