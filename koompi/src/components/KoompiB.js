import React from "react";
import Navbar from "./Navbar";
import { Tabs } from "antd";
import { Row, Col, Typography } from "antd";
import Footer from "./Footer";
const { Title, Paragraph, Text } = Typography;
function KoompiB() {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <Navbar />
      <div className="background-color">
        <div>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="overview" key="1">
              <div style={{ marginTop: "80px" }}>
                <div className="container">
                  <Row>
                    <Col sm={12}>
                      <img style={{ maxWidth: "100%" }} src="/img/dell.png" />
                    </Col>
                    <Col sm={12}>
                      <div>
                        <center>
                          <Typography style={{ marginTop: "58px" }}>
                            <Title style={{ color: "white" }}>KOOMPI B</Title>
                            <Title style={{ color: "#63636e" }} level={4}>
                              FullView Display | High Performance | Open Source
                            </Title>
                            <Text style={{ fontSize: "19px", color: "white" }}>
                              Make your Buisenese is better
                            </Text>
                          </Typography>
                        </center>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginTop: "80px" }} className="container">
                  <div>
                    <center>
                      <Typography>
                        <Title style={{ color: "white", fontSize: "62px" }}>
                          Display More With a FullView Screen
                        </Title>
                      </Typography>
                      <img
                        style={{ maxWidth: "100%" }}
                        src="/img/Macbook.png"
                      />
                    </center>
                  </div>
                  <div className="text-container">
                    <Row>
                      <Col span={12}>
                        <Title
                          level={2}
                          style={{ color: "white", marginBottom: "0px" }}
                        >
                          2160*1440
                        </Title>
                        <Text style={{ color: "#63636e", marginTop: "10px" }}>
                          resolution:2160*1440
                        </Text>
                      </Col>
                      <Col span={12}>
                        <Title
                          level={2}
                          style={{ color: "white", marginBottom: "0px" }}
                        >
                          Eyes
                        </Title>
                        <Text style={{ color: "#63636e" }}>
                          Eye Protection Mode
                        </Text>
                      </Col>
                    </Row>
                    <Paragraph
                      style={{
                        color: "#63636e",
                        fontSize: "21px",
                        marginTop: "23px"
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </Paragraph>
                  </div>
                </div>

                {/* ===============Performance============= */}
                <div className="container" style={{ marginTop: "90px" }}>
                  <Row gutter={[48, 0]}>
                    <Col sm={12}>
                      <div className="text-container">
                        <img
                          style={{ maxWidth: "100%" }}
                          src="/img/koompii.png"
                        />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div>
                        <Typography>
                          <Title style={{ color: "white" }}>
                            Unprecedented Performance
                          </Title>
                          <Paragraph
                            style={{ color: "#63636e", fontSize: "21px" }}
                          >
                            KOOMPI, the sleek and lightweight next-generation
                            productivity tool offering an experience next to
                            none, combining modest hardware with powerful
                            open-source software.
                            <br></br>
                            <br></br>
                          </Paragraph>
                        </Typography>
                      </div>
                      <div>
                        <Row>
                          <Col span={12}>
                            <Typography>
                              <Title
                                level={2}
                                style={{ color: "white", marginBottom: " 3px" }}
                              >
                                N4100
                              </Title>
                              <Text style={{ color: "#63636e" }}>
                                Intel Core i7 8Gen
                              </Text>
                            </Typography>
                          </Col>
                          <Col span={12}>
                            <Typography>
                              <Title
                                level={2}
                                style={{ color: "white", marginBottom: " 3px" }}
                              >
                                2.4GHz
                              </Title>
                              <Text style={{ color: "#63636e" }}>
                                Turbo Boost
                              </Text>
                            </Typography>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "40px" }}>
                          <Col span={12}>
                            <Typography>
                              <Title
                                level={2}
                                style={{ color: "white", marginBottom: " 3px" }}
                              >
                                128GB | 256GB
                              </Title>
                              <Text style={{ color: "#63636e" }}>
                                M.2 SATA3 SSD
                              </Text>
                            </Typography>
                          </Col>
                          <Col span={12}>
                            <Typography>
                              <Title
                                level={2}
                                style={{ color: "white", marginBottom: " 3px" }}
                              >
                                N41008GB
                              </Title>
                              <Text style={{ color: "#63636e" }}>RAM DDR4</Text>
                            </Typography>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* ================Keyboard ==============*/}
                <div style={{ marginTop: "80px" }}>
                  <div className="container">
                    <center>
                      <Title style={{ color: "white" }}>
                        BackLight Keyboard | Typing{" "}
                      </Title>
                    </center>
                    <Paragraph
                      style={{ color: "#63636e", fontSize: "22px" }}
                      className="text-container"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </Paragraph>
                    <div>
                      <center>
                        <img
                          style={{ maxWidth: "100%" }}
                          src="/img/logo192.png"
                        ></img>
                      </center>
                    </div>
                  </div>
                  <div style={{ marginTop: "80px" }}>
                    <div className=" container">
                      <center>
                        <Title style={{ color: "white" }}>
                          Fast Charging | Longer life
                        </Title>
                      </center>
                      <div className="text-container">
                        <Paragraph
                          style={{ color: "#63636e", fontSize: "21px" }}
                        >
                          Designed with an ultra thin high performance 5000mAh
                          battery that will last for up to 7 hours
                        </Paragraph>
                        <center>
                          <Row>
                            <Col span={12}>
                              <Typography>
                                <Title
                                  level={2}
                                  style={{
                                    color: "white",
                                    marginBottom: " 3px"
                                  }}
                                >
                                  5000mAH
                                </Title>
                                <Text style={{ color: "#63636e" }}>
                                  Li-polymer battery
                                </Text>
                              </Typography>
                            </Col>
                            <Col span={12}>
                              <Typography>
                                <Title
                                  level={2}
                                  style={{
                                    color: "white",
                                    marginBottom: " 3px"
                                  }}
                                >
                                  Up to 7h
                                </Title>
                                <Text style={{ color: "#63636e" }}>
                                  Battery life
                                </Text>
                              </Typography>
                            </Col>
                          </Row>
                        </center>
                      </div>
                      <div style={{ marginTop: "23px" }}>
                        <center>
                          <img
                            style={{ maxWidth: "100%" }}
                            src="/img/laptopbattery.png"
                          />
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>

            {/*================= spec=========== */}
            <TabPane tab="spec" key="2">
              <div>hefh</div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KoompiB;
