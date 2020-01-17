import React, { useState } from "react";
import { Tabs, Avatar } from "antd";
import Navbar from "./Navbar";
import { Row, Col } from "antd";
import { List } from "antd";
import { Typography, Button, Divider } from "antd";
import { BackTop } from "antd";
const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;
function KoompiE11() {
  function callback(key) {
    console.log(key);
  }
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
  const description = [
    {
      des: "deffdfsafefdfaf 1"
    },
    {
      des: "deffdfsafefdfaf 2"
    },
    {
      des: "deffdfsafefdfaf 3"
    },
    {
      des: "deffdfsafefdfaf 4"
    }
  ];
  return (
    <React.Fragment>
      <Navbar />
      <div className="background-color">
        <div className="helo">
          <div className="container">
            <center>
              <Typography>
                <Title className="KoompiPro" level={2}>
                  KOOMPI PRO
                </Title>
                <Title className="subTittle-Pro">
                  With great power <br></br> comes great capability.
                </Title>
              </Typography>
            </center>
            <img
              className="banner-overview"
              src="/img/macbook-pro-hd.png"
            ></img>
          </div>
          {/* ======Performance======= */}
          <div className="container">
            <div className="Performance">
              {/* <h1>PERFORMANCE</h1>
										<p className='p-of-performance'>
											KOOMPI Pro elevates the notebook to
											a whole new level of performance and
											portability. Wherever your ideas
											take you, you’ll get there faster
											than ever with high‑performance
											processors and memory, advanced
											graphics, blazing‑fast storage, and
											more — all in a compact 3-pound
											package.
										</p> */}

              <Typography className="text-container">
                <Title className="professional-performance-p">
                  Performance
                </Title>
                <Paragraph className="p-of-performance">
                  In the process of internal desktop applications development,
                  many different design specs and implementations would be
                  involved, which might cause designers and developers
                  difficulties and duplication and reduce the efficiency of
                  development.
                </Paragraph>
              </Typography>
            </div>
            <div className=" text-container upperSpec">
              <Row>
                <Col span={6}>
                  <h1>4-core</h1>
                  <span>Intel processor</span>
                </Col>
                <Col span={6}>
                  <h1>4.7GHz</h1>
                  <span>Turbo Boost</span>
                </Col>
                <Col span={6}>
                  <h1>16GB</h1>
                  <span>Memory</span>
                </Col>
                <Col span={6}>
                  <h1>3.2GB</h1>
                  <span>SSD read speeds</span>
                </Col>
              </Row>
            </div>
            <div className=" upperSpec-width-767px">
              <center>
                <Row>
                  <Col span={6}>
                    <h1>4-core</h1>
                    <span>Intel processor</span>
                  </Col>
                  <Col span={6}>
                    <h1>4.7GHz</h1>
                    <span>Turbo Boost</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <h1>16GB</h1>
                    <span>Memory</span>
                  </Col>
                  <Col span={6}>
                    <h1>3.2GB</h1>
                    <span>SSD read speeds</span>
                  </Col>
                </Row>
              </center>
            </div>
            <center>
              <img className="banner-overview" src="/img/Macbook.png"></img>
            </center>
            <Tabs
              className="disciption-tab"
              defaultActiveKey="1"
              onChange={callback}
            >
              <TabPane className="text" tab="Coding" key="1">
                Build code, run multiple virtual machines, and see your work
                take shape — faster than ever before.
              </TabPane>
              <TabPane className="text" tab="Video" key="2">
                Create professional-quality music in Logic Pro X with multiple
                tracks and plug-ins, virtual instruments, automation, and more.
              </TabPane>
              <TabPane className="text" tab="Internet" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
          {/* =======professional performance======== */}
          <div className="professional-performance">
            <div className="container">
              <Typography>
                <Title className="professional-performance-h">
                  A new level of professional performance.
                </Title>
                <Paragraph className="text professional-performance-p">
                  With an enhanced processor and discrete graphics, up to 16 GB
                  of memory and up to 1 TB of fast SSD storage, the KOOMPI E11
                  is built to provide all the horsepower you need. Incredible
                  multitasking efficiency, faster image processing and smoother
                  gaming experiences are now all in one. The upgraded high-speed
                  Wi-Fi and Bluetooth 5.0 ensures better connection without any
                  worries.
                </Paragraph>
              </Typography>
              <center>
                <div className="Microchip">
                  <Row>
                    <Col span={8}>
                      <img src="/img/icons8-microchip-50.png"></img>
                      <p className="professional-performance-p">
                        8th Gen Intel®
                        <br></br> Core™ i7-8565U<br></br>
                        processor9
                      </p>
                    </Col>
                    <Col span={8}>
                      <img src="/img/icons8-nvidia-geforce-50.png"></img>
                      <p className="professional-performance-p">
                        NVIDIA® GeForce®
                        <br></br> MX250 with 2 GB GDDR5
                      </p>
                    </Col>
                    <Col span={8}>
                      <img src="/img/icons8-wi-fi-48.png"></img>
                      <p className="professional-performance-p">
                        802.11ac Wi-Fi &<br></br>Bluetooth 5.0
                      </p>
                    </Col>
                  </Row>
                </div>
                <img
                  style={{ maxWidth: "100%" }}
                  src="/img/insidelatop.jpg"
                ></img>
              </center>
            </div>
          </div>
          {/* ========Power battery====== */}
          <div className="Power-Batter">
            <div className="container">
              <Typography className="text-container">
                <Title className="title-of-powerBattery">
                  Stay powered for all-day long.
                </Title>
                <Paragraph className="p-of-powerBattery">
                  A monstrous 57.4 Wh10 battery packed into the slim body
                  provides up to 13 hours of video playback11 on a single
                  charge. Enjoy movies on your long flight without plugging in.
                </Paragraph>
              </Typography>
              <div>
                <center>
                  <Row className="show-padding-powerBatter">
                    <Col span={8}>
                      {/* <img src='/img/clock.png'></img> */}
                      <Title className="title-of-powerBattery-show">
                        12 <span>hrs</span>
                      </Title>
                      <Paragraph className="p-power-batter-show">
                        Web Browsing
                      </Paragraph>
                    </Col>
                    <Col span={8}>
                      {/* <img src='/img/icons8-nvidia-geforce-50.png'></img> */}
                      <Title className="title-of-powerBattery-show">
                        13 <span>hrs</span>
                      </Title>
                      <Paragraph className="p-power-batter-show">
                        Video Playback
                      </Paragraph>
                    </Col>
                    <Col span={8}>
                      {/* <img src='/img/icons8-wi-fi-48.png'></img> */}
                      <Title className="title-of-powerBattery-show">
                        14 <span>hrs</span>
                      </Title>
                      <Paragraph className="p-power-batter-show">
                        Regular Work
                      </Paragraph>
                    </Col>
                  </Row>
                  <img className="banner-overview" src="/img/Macbook.png"></img>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default KoompiE11;
