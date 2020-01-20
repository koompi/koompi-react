import React from "react";
import { Typography, Tabs } from "antd";
import Navbar from "./navbar";
const { TabPane } = Tabs;
const { Title, Paragraph, Text } = Typography;
function Koompi_Os() {
  function callback(key) {
    console.log(key);
  }
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
          <Title className="koompi-os-title">You can do anything</Title>
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
        <div className="text-container">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane style={{ color: "black" }} tab="Coding" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Video" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Internet" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
      {/*============ privacy and security ==========*/}
      <div className="container top-sections">
        <div className="text-container">
          <Title>Privacy and Security</Title>
          <Paragraph className="koompi-os-paragraph">
            Everything you do with your Mac is protected by strong privacy and
            security features. That’s because we build data security into
            everything we make, right from the start.
          </Paragraph>
        </div>
        <div className="text-container">
          <Row className="koompi-os-privacy" gutter={[48, 0]}>
            <Col sm={12}>
              <div>
                <Title style={{ marginTop: "40px" }} level={3}>
                  Privacy
                </Title>
                <Paragraph className="koompi-os-paragraph">
                  You trust our products with your most personal information,
                  and we believe that you should be in complete control of it.
                  We respect your privacy by enacting strict policies that
                  govern how all data is handled. And when you browse the web,
                  Safari helps prevent data companies from tracking the sites
                  you vis
                </Paragraph>
              </div>
            </Col>
            <Col sm={12}>
              <div>
                <Title style={{ marginTop: "40px" }} level={3}>
                  Security
                </Title>
                <Paragraph className="koompi-os-paragraph">
                  You trust our products with your most personal information,
                  and we believe that you should be in complete control of it.
                  We respect your privacy by enacting strict policies that
                  govern how all data is handled. And when you browse the web,
                  Safari helps prevent data companies from tracking the sites
                  you vis
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Koompi_Os;
