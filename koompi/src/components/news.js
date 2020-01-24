import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { Row, Col, Typography, Card, Button } from "antd";
import Navbar from "./navbar";
import Footer from "./footer";
const { Title, Paragraph, Text } = Typography;
function News() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="backgroud-news">
        <div className="container">
          <Row className="Row-news" gutter={[48, 0]}>
            <Col sm={12}>
              <Title>News and Event</Title>
              <Paragraph className="about-paragraph">
                KOOMPI is a practical, affordable and effective entry-level
                notebook computer specifically designed for performing all daily
                tasks required for work and school.
                <br></br>
                <br></br>
                We've created a customized operating system of our own called
                PionuxOS based on the well-known open-source Linux software.
              </Paragraph>
            </Col>
            <Col sm={12}>
              <img
                style={{ maxWidth: "100%" }}
                src="/img/svg-img/undraw_newspaper_k72w.svg"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div
        style={{ marginTop: "90px", marginBottom: "50px" }}
        className="container "
      >
        <Card
          style={{
            boxShadow: "4px 4px 16px #cdcdcd",
            background: "#f0f3f7"
          }}
        >
          <Row>
            <Col sm={10}>
              <img style={{ maxWidth: "100%" }} src="/img/Macbook.png" />
            </Col>
            <Col sm={14}>
              <h1>Projects</h1>
              <p>
                We've created a customized operating system of our own called
                We've created a customized operating system of our own called
              </p>
              <Button type="primary">Readmore</Button>
            </Col>
          </Row>
        </Card>
      </div>

      <div
        style={{ marginTop: "90px", marginBottom: "50px" }}
        className="container "
      >
        <Card
          style={{
            boxShadow: "4px 4px 16px #cdcdcd",
            background: "#f0f3f7"
          }}
        >
          <Row>
            <Col sm={10}>
              <img style={{ maxWidth: "100%" }} src="/img/Macbook.png" />
            </Col>
            <Col sm={14}>
              <h1>Projects</h1>
              <p>
                We've created a customized operating system of our own called
                We've created a customized operating system of our own called
              </p>
              <Button type="primary">Readmore</Button>
            </Col>
          </Row>
        </Card>
      </div>

      <div
        style={{ marginTop: "90px", marginBottom: "50px" }}
        className="container "
      >
        <Card
          style={{
            boxShadow: "4px 4px 16px #cdcdcd",
            background: "#f0f3f7"
          }}
        >
          <Row>
            <Col sm={10}>
              <img style={{ maxWidth: "100%" }} src="/img/Macbook.png" />
            </Col>
            <Col sm={14}>
              <h1>Projects</h1>
              <p>
                We've created a customized operating system of our own called
                We've created a customized operating system of our own called
              </p>
              <Button type="primary">Readmore</Button>
            </Col>
          </Row>
        </Card>
      </div>

      <div
        style={{ marginTop: "90px", marginBottom: "50px" }}
        className="container "
      >
        <Card
          style={{
            boxShadow: "4px 4px 16px #cdcdcd",
            background: "#f0f3f7"
          }}
        >
          <Row>
            <Col sm={10}>
              <img style={{ maxWidth: "100%" }} src="/img/Macbook.png" />
            </Col>
            <Col sm={14}>
              <h1>Projects</h1>
              <p>
                We've created a customized operating system of our own called
                We've created a customized operating system of our own called
              </p>
              <Button type="primary">Readmore</Button>
            </Col>
          </Row>
        </Card>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default News;
