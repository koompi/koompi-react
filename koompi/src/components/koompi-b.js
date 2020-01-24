import React from 'react'
import Navbar from './Navbar'
import { Tabs } from 'antd'
import { Row, Col, Typography } from 'antd'
import Footer from './Footer'
import Sub_Navbar_Koompi_B from './Sub_Navbar_Koompi_B'

const { Title, Paragraph, Text } = Typography

function KoompiB() {
  const { TabPane } = Tabs
  function callback(key) {
    console.log(key)
  }
  return (
    <div>
      <Navbar />
      <Sub_Navbar_Koompi_B />
      <div className="background-color">
        <div className="main-banner-koompi-b container">
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
        <div className="container top-sections">
          <div>
            <center>
              <Typography>
                <Title level={1} style={{ color: 'white' }}>
                  Display More With <br></br> a FullView Screen.
                </Title>
              </Typography>
              <img style={{ maxWidth: '100%' }} src="/img/Macbook.png" />
            </center>
          </div>
          <div className="text-container">
            <Row>
              <Col span={12}>
                <Title
                  level={2}
                  style={{ color: 'white', marginBottom: '0px' }}
                >
                  2160*1440
                </Title>
                <Text style={{ color: '#63636e', marginTop: '10px' }}>
                  resolution:2160*1440
                </Text>
              </Col>
              <Col span={12}>
                <Title
                  level={2}
                  style={{ color: 'white', marginBottom: '0px' }}
                >
                  Eyes
                </Title>
                <Text style={{ color: '#63636e' }}>Eye Protection Mode</Text>
              </Col>
            </Row>
            <Paragraph
              style={{
                color: '#63636e',
                fontSize: '21px',
                marginTop: '23px'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </Paragraph>
          </div>
        </div>

        {/* ===============Performance============= */}

        <div className="container">
          <div className="Performance">
            <Typography className="text-container">
              <Title className="performance-koompi-b">Performance</Title>
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
        </div>
        {/* ================Keyboard ==============*/}

        <div className="Keybaord container">
          <Title className="text-container" style={{ color: 'white' }}>
            BackLight Keyboard | Typing{' '}
          </Title>

          <Paragraph className="text-container koompi-b-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Paragraph>
          <div>
            <center>
              <img style={{ maxWidth: '100%' }} src="/img/logo192.png"></img>
            </center>
          </div>
        </div>

        {/* =====power of battery=====  */}

        <div className=" container top-sections">
          <Title className="text-container" style={{ color: 'white' }}>
            Fast Charging | Longer life
          </Title>
          <div className="text-container">
            <Paragraph className="koompi-b-paragraph">
              Designed with an ultra thin high performance 5000mAh battery that
              will last for up to 7 hours
            </Paragraph>
            <center>
              <Row>
                <Col span={12}>
                  <Typography>
                    <Title
                      level={2}
                      style={{
                        color: 'white',
                        marginBottom: ' 3px'
                      }}
                    >
                      5000mAH
                    </Title>
                    <Text style={{ color: '#63636e' }}>Li-polymer battery</Text>
                  </Typography>
                </Col>
                <Col span={12}>
                  <Typography>
                    <Title
                      level={2}
                      style={{
                        color: 'white',
                        marginBottom: ' 3px'
                      }}
                    >
                      Up to 7h
                    </Title>
                    <Text style={{ color: '#63636e' }}>Battery life</Text>
                  </Typography>
                </Col>
              </Row>
            </center>
          </div>
          <div style={{ marginTop: '23px' }}>
            <center>
              <img style={{ maxWidth: '100%' }} src="/img/laptopbattery.png" />
            </center>
          </div>
        </div>

        <div className="Power-Batter">
          <div className="container">
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
              </center>
              <Typography className="text-container">
                {/* <Title className="title-of-powerBattery">
                  Stay powered for all-day long.
                </Title> */}
                <Paragraph className="p-of-powerBattery">
                  A monstrous 57.4 Wh10 battery packed into the slim body
                  provides up to 13 hours of video playback11 on a single
                  charge. Enjoy movies on your long flight without plugging in.
                </Paragraph>
                {/* <Title className="title-of-powerBattery">
                  Stay powered for all-day long.
                </Title> */}
              </Typography>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default KoompiB
