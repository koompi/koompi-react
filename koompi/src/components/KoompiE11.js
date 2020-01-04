import React from 'react';
import { Typography, Divider } from 'antd';
import { Tabs } from 'antd';
import Navbar from './Navbar';
import { Row, Col } from 'antd';
const { TabPane } = Tabs;
const { Title, Paragraph, Text } = Typography;

function KoompiE11() {
  function callback(key) {
    console.log(key);
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="background-color">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Overview" key="1">
            <div>
              {/*=========== banner-koompiE11========== */}
              <div className="container">
                <center>
                  <Typography>
                    <Title className="KoompiE11" level={2}>
                      KOOMPI E11
                    </Title>
                    <Title className="subTittle-E11">Open New Horizons</Title>
                  </Typography>
                </center>
                <img
                  className="banner-overview-koompiE11"
                  src="/img/Macbook.png"
                />
              </div>
              {/*============== Display KoompiE11========== */}
              <div className="container">
                <div>
                  <Typography>
                    <Title className="Title-Display-koompiE11">
                      FHD IPS Anti-glare Panel
                    </Title>
                    {/* <Paragraph className="text-Display-koompiE11">
                      KOOMPI E11 works out-of-the-box with a full suite of
                      custom-selected software packages needed for everyday
                      computing. Check out our features for the fine details.
                    </Paragraph> */}
                  </Typography>
                  <img
                    className="banner-overview-display-koompiE11"
                    src="/img/Macbook.png"
                  ></img>
                  <div className="text-container">
                    {/* <Row>
                      <Col sm={12}>
                        <div>
                          <Typography>
                            <Title>13.3</Title>
                            <Paragraph>
                              high-resolution<br></br> Retina display
                            </Paragraph>
                          </Typography>
                        </div>
                      </Col>
                      <Col sm={12}>Col</Col>
                    </Row>
                    <Row>
                      <Col sm={12}>Col</Col>
                      <Col sm={12}>Col</Col>
                    </Row> */}
                    <Row>
                      <Col sm={12}>
                        <Paragraph className="text-Display-koompiE11">
                          KOOMPI E11 works out-of-the-box with a full suite of
                          custom-selected software packages needed for everyday
                          computing. Check out our features for the fine
                          details.
                        </Paragraph>
                      </Col>
                      <Col sm={12}>
                        <Row>
                          <Col sm={12}>
                            <div>
                              <Typography>
                                <Title>13.3</Title>
                                <Paragraph className="text-show-all-Display">
                                  high-resolution<br></br> Retina display
                                </Paragraph>
                              </Typography>
                            </div>
                          </Col>
                          <Col sm={12}>
                            <div>
                              <img src="/img/icons8-sun-80.png" />
                              <Paragraph>
                                True Tone <br></br>Technology
                              </Paragraph>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12}>
                            <div>
                              <img src="/img/icons8-a-50.png" />
                              <Paragraph>
                                Razor-sharp<br></br>
                                text clarity
                              </Paragraph>
                            </div>
                          </Col>
                          <Col sm={12}>
                            <div>
                              <Typography>
                                <Title>13.3</Title>
                                <Paragraph className="text-show-all-Display">
                                  high-resolution<br></br> Retina display
                                </Paragraph>
                              </Typography>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Spec" key="2">
            Create professional-quality music in Logic Pro X with multiple
            tracks and plug-ins, virtual instruments, automation, and more.
          </TabPane>
        </Tabs>
      </div>
    </React.Fragment>
  );
}

export default KoompiE11;
