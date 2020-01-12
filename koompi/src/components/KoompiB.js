import React from 'react';
import Navbar from './Navbar';
import { Tabs } from 'antd';
import { Row, Col, Typography } from 'antd';
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
              <div style={{ marginTop: '80px' }}>
                <div className="container">
                  <Row>
                    <Col sm={12}>
                      <img style={{ maxWidth: '100%' }} src="/img/dell.png" />
                    </Col>
                    <Col sm={12}>
                      <div>
                        <center>
                          <Typography style={{ marginTop: '58px' }}>
                            <Title style={{ color: 'white' }}>KOOMPI B</Title>
                            <Title style={{ color: '#63636e' }} level={4}>
                              FullView Display | High Performance | Open Source
                            </Title>
                            <Text style={{ fontSize: '19px', color: 'white' }}>
                              Make your Buisenese is better
                            </Text>
                          </Typography>
                        </center>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginTop: '80px' }} className="container">
                  <div>
                    <center>
                      <Typography>
                        <Title style={{ color: 'white', fontSize: '62px' }}>
                          Display More With a FullView Screen
                        </Title>
                      </Typography>
                      <img
                        style={{ maxWidth: '100%' }}
                        src="/img/Macbook.png"
                      />
                    </center>
                  </div>
                  <div className="text-container">
                    <Row>
                      <Col span={12}>
                        <Title style={{ color: 'white', marginBottom: '0px' }}>
                          2160*1440
                        </Title>
                        <Text style={{ color: '#63636e', marginTop: '10px' }}>
                          resolution:2160*1440
                        </Text>
                      </Col>
                      <Col span={12}>
                        <Title style={{ color: 'white', marginBottom: '0px' }}>
                          Eyes
                        </Title>
                        <Text style={{ color: '#63636e' }}>
                          Eye Protection Mode
                        </Text>
                      </Col>
                    </Row>
                    <Paragraph
                      style={{
                        color: '#63636e',
                        fontSize: '21px',
                        marginTop: '23px'
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
                <div className="container" style={{ marginTop: '90px' }}>
                  <Row gutter={[48, 0]}>
                    <Col sm={12}>
                      <div className="text-container">
                        <img
                          style={{ maxWidth: '100%' }}
                          src="/img/koompii.png"
                        />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div>
                        <Typography>
                          <Title style={{ color: 'white' }}>
                            Unprecedented Performance
                          </Title>
                          <Paragraph
                            style={{ color: 'white', fontSize: '21px' }}
                          >
                            KOOMPI, the sleek and lightweight next-generation
                            productivity tool offering an experience next to
                            none, combining modest hardware with powerful
                            open-source software.
                            <br></br>
                            <br></br>
                            As a multi-purpose enabler, the KOOMPI seeks to
                            empower the next generation of Cambodian youth as
                            the creators and innovators of tomorrow.
                            <br></br>
                            <br></br>
                            The KOOMPI offers a pre-packaged functional software
                            environment that allows users to focus on the
                            challenges of the task at hand rather than the
                            tools. Powerful yet easy and light enough to carry
                            almost anywhere.
                          </Paragraph>
                        </Typography>
                      </div>
                    </Col>
                  </Row>
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
    </div>
  );
}

export default KoompiB;
