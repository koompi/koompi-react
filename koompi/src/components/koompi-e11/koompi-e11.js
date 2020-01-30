import React, { useState } from 'react';
import Navbar from '../navbar';
import { Row, Col, Icon, Result, Button } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_PAGES } from '../graphql/query';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import renderHTML from '../editorJsToHtml';
import parse from 'html-react-parser';

import SubNavbar from './subNavbar';
import screen from '../data/screen';
import shapeliness from '../data/shapeliness';
import performance from '../data/performance';
import Footer from '../footer';
import _ from 'lodash';

function KoompiE11() {
  const [koompiColor, setKoompiColor] = useState(true);
  const imageLink = `http://localhost:8080`;

  const { error, loading, data } = useQuery(GET_PAGES);
  if (error) {
    if (error.networkError) {
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, the server is wrong."
        />
      );
    }
  }
  if (loading) {
    NProgress.start();
    return null;
  }
  NProgress.done();

  const dataIndex = data.pages.filter(
    res => res.category.slug === 'koompi-e13'
  );
  const result = _.orderBy(dataIndex, 'sectionNumber', 'asc');

  console.log('result', result);

  // ===== Chage KOOMPI Color =====
  const changeKoompiColor = () => setKoompiColor(!koompiColor);

  // ===== KOOMPI E Top Section  =====
  const DisplayKOOMPIE = ({ title, description, image }) => {
    return (
      <center>
        <h2 className="KoompiE11">KOOMPI E11</h2>

        <p className="subTittle-E11">{description}</p>
        <h1 className="koompi-price">$369.00</h1>
        <Button className="koompiBtn">
          Add To Card <Icon type="arrow-right" />
        </Button>
        <img className="banner-overview-koompiE11" src={imageLink + image} />
      </center>
    );
  };

  // ===== KOOMPI E Screen Section  =====
  const DisplayScreen = ({ title, subTitle, description, image }) => {
    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{description}</p>
            <div className="koompi-e-section-margin">
              <Row gutter={16}>
                {screen.map((data, index) => {
                  return (
                    <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                      <center>
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </center>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </center>
        </div>
        <div className="koompi-e-background">
          <img className="banner-overview-koompiE11" src={image} />
        </div>
      </>
    );
  };

  // ===== KOOMPI E Shapeliness Section  =====
  const DisplayShapeliness = ({ title, subTitle, description, image }) => {
    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{description}</p>
            <div className="koompi-e-section-margin">
              <Row gutter={16}>
                {shapeliness.map((data, index) => {
                  return (
                    <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                      <center>
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </center>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </center>
        </div>
        <div className="container">
          <img
            className="banner-overview-koompiE11"
            style={koompiColor ? null : { opacity: 0.5 }}
            src={koompiColor ? imageLink + image : imageLink + image}
          />
          <div className="switch-koompi-container">
            <Row gutter={16}>
              <Col span={12}>
                <center>
                  <div
                    className="speceGrayCircle"
                    onClick={changeKoompiColor}
                  ></div>
                  <p>Space Gray</p>
                </center>
              </Col>
              <Col span={12}>
                <center>
                  <div className="roseCircle" onClick={changeKoompiColor}></div>
                  <p>Rose Gold</p>
                </center>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  };

  // ===== KOOMPI E Batter Section  =====
  const DisplayBattery = ({ subTitle, title, description, image }) => {
    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{description}</p>
            <div className="koompi-e-section-margin">
              <Row gutter={16}>
                {shapeliness.map((data, index) => {
                  return (
                    <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                      <center>
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </center>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </center>
        </div>
        <div className="container">
          <Row gutter={16}>
            <Col span={4}>{/* Charger Image */}</Col>
            <Col span={20}>
              <img
                className="banner-overview-koompiE11"
                src={imageLink + image}
              />
            </Col>
          </Row>
        </div>
      </>
    );
  };

  // ===== KOOMPI E Performance Section  =====
  const DisplayPerformance = ({ title, subTitle, description, image }) => {
    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{description}</p>
            <div className="koompi-e-section-margin">
              <Row gutter={16}>
                {performance.map((data, index) => {
                  return (
                    <Col span={8} key={index}>
                      <center>
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </center>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </center>
        </div>
        <div className="container">
          <img className="banner-overview-koompiE11" src={imageLink + image} />
        </div>
      </>
    );
  };

  return (
    <React.Fragment>
      {/* <div className="addToCart">
        <div className="container">
          <center>
            <div className="koompi-width">
              <Row gutter={16}>
                <Col span={12}>
                  <h1 className="koompi-price">$369.00</h1>
                </Col>
                <Col span={12}>
                  <Button type="primary" className="addToBag">
                    Add to Bag
                  </Button>
                </Col>
              </Row>
            </div>
          </center>
        </div>
      </div> */}

      <div>
        <Navbar />
        <SubNavbar />
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
          <div className="koompi-logo-koompi-os-section"></div>

          {result.map((data, index) => {
            //============== Top Banner Section==========
            if (data.sectionNumber === '1') {
              const description = renderHTML(data.description);
              return (
                <div className="koompi-page-container">
                  <div className="koompiDetail">
                    <DisplayKOOMPIE
                      title={data.title}
                      description={parse(description)}
                      image={data.image}
                    />
                  </div>
                </div>
              );
            }
            //============== Screen Section==========
            if (data.sectionNumber === '2') {
              const description = renderHTML(data.description);
              return (
                <div className="margin-display-koompiE11">
                  <DisplayScreen
                    subTitle={data.subTitle}
                    title={data.title}
                    description={parse(description)}
                    image={imageLink + data.image}
                  />
                </div>
              );
            }
            //============== Shapeliness Section==========
            if (data.sectionNumber === '3') {
              const description = renderHTML(data.description);
              return (
                <div className="shapeliness-margin-top">
                  <DisplayShapeliness
                    subTitle={data.subTitle}
                    title={data.title}
                    description={parse(description)}
                    image={data.image}
                  />
                </div>
              );
            }
            //============== BATTERY Section==========
            if (data.sectionNumber === '4') {
              const description = renderHTML(data.description);
              return (
                <div className="margin-battery-section shapeliness-margin-top">
                  <DisplayBattery
                    subTitle={data.subTitle}
                    title={data.title}
                    description={parse(description)}
                    image={data.image}
                  />
                </div>
              );
            }
            //============== Shapeliness Section==========
            if (data.sectionNumber === '5') {
              const description = renderHTML(data.description);
              return (
                <div className="shapeliness-margin-top">
                  <DisplayPerformance
                    subTitle={data.subTitle}
                    title={data.title}
                    description={parse(description)}
                    image={data.image}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default KoompiE11;
