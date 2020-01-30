import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Card, Button, Tag } from 'antd';
import Navbar from './navbar';
import Footer from './footer';
const { Title, Paragraph, Text } = Typography;
function News() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="backgroud-news">
        <div className="container">
          <Row className="Row-news" gutter={16}>
            <Col sm={12}>
              <img
                style={{ maxWidth: '100%' }}
                src="/img/svg-img/undraw_newspaper_k72w.svg"
              />
            </Col>
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
          </Row>
        </div>
      </div>
      <div
        style={{ marginTop: '90px', marginBottom: '50px' }}
        className="container"
      >
        <Row gutter={24}>
          <Col span={12}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://image.freepik.com/free-vector/abstract-christmas-background-with-purple-neon-grids-city_73729-61.jpg"
                />
              }
            >
              <p>
                <Tag color="blue">Date: 2020, Jan 29</Tag>
              </p>
              <h1 className="news-and-events-title">
                Share your best iPhone Night mode photos
              </h1>
              <p>
                We've created a customized operating system of our own called
                We've created a customized operating system of our own called
              </p>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://image.freepik.com/free-vector/abstract-christmas-background-with-purple-neon-grids-city_73729-61.jpg"
                />
              }
            >
              <p>
                <Tag color="blue">Date: 2020, Jan 29</Tag>
              </p>
              <h1 className="news-and-events-title">
                Share your best iPhone Night mode photos
              </h1>
              <p>
                We've created a customized operating system of our own called
                We've created a customized operating system of our own called
              </p>
            </Card>
          </Col>
        </Row>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default News;
