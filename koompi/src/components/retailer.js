import React from "react";
import Navbar from "./navbar";
import { Row, Col, Typography, Card, Button } from "antd";
const { Title, Paragraph, Text } = Typography;
function Retailer() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="boss-banner-retailer">
        <div className="container">
          <Row gutter={[48, 16]}>
            <Col sm={12}>
              <Title className="title-retailer-banner">How to Get Koompi</Title>
              <Paragraph className="text-of-retailer">
                We aim to satisfy your individual needs while offering the best
                and most convenient tools for everyone.<br></br>
                <br></br> Take this opportunity to engage and interact with the
                KOOMPI wherever you are.<br></br>
                <br></br> Test drive a new KOOMPI from any of our retail
                partners listed below:
              </Paragraph>
            </Col>
            <Col sm={12}>
              <img
                style={{ maxWidth: "100%" }}
                src="/img/Koompi_Retailer.png"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <center>
          <Title style={{ marginTop: "60px", marginBottom: "60px" }}>
            Retailer
          </Title>

          <div>
            <Row gutter={[48, 16]}>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row gutter={[48, 16]}>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row gutter={[48, 16]}>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
              <Col sm={8}>
                <Card
                  hoverable
                  style={{ width: 300, boxShadow: "4px 4px 16px #cdcdcd" }}
                  cover={<img alt="example" src="/img/sw-greens.png" />}
                >
                  <center>
                    <Title level={4}>SmallWorld Venture</Title>
                    <Button type="danger">Shop Herer</Button>
                  </center>
                </Card>
              </Col>
            </Row>
          </div>
        </center>
      </div>
    </React.Fragment>
  );
}

export default Retailer;
