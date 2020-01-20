import React from "react";
import Navbar from "./navbar";
import { Row, Col, Typography } from "antd";
import Sub_Navbar_Koompi_E from "./Sub_Navbar_Koompi_E";

const { Title, Paragraph } = Typography;

function KoompiE11() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <Sub_Navbar_Koompi_E />
        <div className="background-color-Koompi-E">
          <div class="area">
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="koompi-page-container">
            <div className="koompiDetail">
              <center>
                <h2 className="KoompiE11">KOOMPI E</h2>

                <p className="subTittle-E11">
                  KOOMPI Eworks out-of-the-box with a full suite of
                  custom-selected software.
                </p>
                <img
                  className="banner-overview-koompiE11"
                  src="/img/Macbook.png"
                />
              </center>
            </div>
          </div>
          {/*============== Display KoompiE11========== */}
          <div className="margin-display-koompiE11">
            <div className="koompi-page-container">
              <center>
                <h2 className="KoompiE11">FHD IPS Anti-glare Panel</h2>
                <p className="subTittle-E11">
                  KOOMPI E11 works out-of-the-box with a full suite of
                  custom-selected software packages needed for everyday
                  computing. Check out our features for the fine details.
                </p>

                <img
                  className="banner-overview-koompiE11"
                  src="/img/Macbook.png"
                />
              </center>
              <div>
                <h3 className="koompi-page-specs-title">
                  A new level of professional performance.
                </h3>
                <p>
                  With an enhanced processor and discrete graphics, up to 16 GB
                  of memory and up to 1 TB of fast SSD storage, the HUAWEI
                  MateBook X Pro is built to provide all the horsepower you
                  need. Incredible multitasking efficiency, faster image
                  processing and smoother gaming experiences are now all in one.
                  The upgraded high-speed Wi-Fi and Bluetooth 5.0 ensures better
                  connection without any worries.
                </p>
                <div className="koompi-page-specs-padding">
                  <Row gutter={16}>
                    <Col span={6}>
                      <center>
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/computer-hardware-14/24/Ram-512.png"
                          height="80px"
                          width="80px"
                          alt=""
                        />
                        <p>8th Gen Intel® Core™ i7-8565U processor9</p>
                      </center>
                    </Col>
                    <Col span={6}>
                      <center>
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/modern-future-technology/128/computer-chip2-2-512.png"
                          height="80px"
                          width="80px"
                          alt=""
                        />
                        <p>802.11ac Wi-Fi & Bluetooth 5.0</p>
                      </center>
                    </Col>
                    <Col span={6}>
                      <center>
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/computer-hardware-14/24/Ram-512.png"
                          height="80px"
                          width="80px"
                          alt=""
                        />
                        <p>8th Gen Intel® Core™ i7-8565U processor9</p>
                      </center>
                    </Col>
                    <Col span={6}>
                      <center>
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/computer-hardware-14/24/Ram-512.png"
                          height="80px"
                          width="80px"
                          alt=""
                        />
                        <p>8th Gen Intel® Core™ i7-8565U processor9</p>
                      </center>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default KoompiE11;
