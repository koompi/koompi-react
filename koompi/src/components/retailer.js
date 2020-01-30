import React from 'react';
import Navbar from './navbar';
import { Row, Col, Typography, Card, Button } from 'antd';
import Footer from './footer';
import _ from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import parse from 'html-react-parser';
import NProgress from 'nprogress';
import { GET_RETAILERS } from './graphql/query';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

function Retailer() {
  const randomImage = [
    '/img/svg-img/01.svg',
    '/img/svg-img/02.svg',
    '/img/svg-img/03.svg',
    '/img/svg-img/04.svg',
    '/img/svg-img/05.svg',
    '/img/svg-img/06.svg'
  ];

  const { error, loading, data } = useQuery(GET_RETAILERS);

  if (error) console.log(error);
  if (loading) {
    NProgress.start();
    return null;
  }
  NProgress.done();

  return (
    <React.Fragment>
      <Navbar />
      <div className="boss-banner-retailer">
        <div className="container">
          <Row gutter={16}>
            <Col sm={16}>
              <h2 className="title-retailer-banner">GET KOOMPI</h2>
              <p>
                We aim to satisfy your individual needs while offering the best
                and most convenient tools for everyone.<br></br>
                <br></br> Take this opportunity to engage and interact with the
                KOOMPI wherever you are.<br></br>
                <br></br> Test drive a new KOOMPI from any of our retail
                partners listed below:
              </p>
            </Col>
            <Col sm={7}>
              {/* <img
                style={{ maxWidth: '100%' }}
                src="/img/Koompi_Retailer.png"
              /> */}
            </Col>
          </Row>

          <center>
            <h1 className="ourRetailers">
              <b>Our Retailers</b>
            </h1>

            <div>
              <Row gutter={24} type="flex">
                {data.retailers.map(res => {
                  return (
                    <Col
                      span={6}
                      style={{ marginBottom: '24px', height: '100%' }}
                    >
                      <div
                        className="cardBackground"
                        style={{
                          backgroundImage: `url(${
                            randomImage[_.random(randomImage.length - 1)]
                          })`
                        }}
                      ></div>
                      <Card
                        hoverable
                        cover={
                          <img
                            className="retailers-logo"
                            alt="example"
                            src={`http://localhost:8080` + res.logo}
                          />
                        }
                      >
                        <center>
                          <Title level={4} className="retailers-title">
                            {res.name}
                          </Title>
                          <Link to={data.location}>
                            <Button className="shopHere">Shop Here</Button>
                          </Link>
                        </center>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
              <br />
            </div>
          </center>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Retailer;
