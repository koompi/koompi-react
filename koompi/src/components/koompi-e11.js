import React, { useState } from 'react';
import Navbar from './navbar';
import { Row, Col, BackTop, Icon, Result, Button } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_PAGES } from './graphql/query';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import renderHTML from './editorJsToHtml';
import parse from 'html-react-parser';

import Sub_Navbar_Koompi_E from './Sub_Navbar_Koompi_E';
import screen from './data/screen';
import shapeliness from './data/shapeliness';
import performance from './data/performance';

function KoompiE11() {
  const [koompiColor, setKoompiColor] = useState(true);
  const imageLink = `http://localhost:8080`;

  const { error, loading } = useQuery(GET_PAGES);
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

  // ===== Chage KOOMPI Color =====
  const changeKoompiColor = () => setKoompiColor(!koompiColor);

  // ===== KOOMPI E Top Section  =====
  const DisplayKOOMPIE = () => {
    const { data } = useQuery(GET_PAGES);
    const description = renderHTML(data.pages[0].description);

    return (
      <center>
        <h2 className="KoompiE11">{data.pages[0].title}</h2>

        <p className="subTittle-E11">{parse(description)}</p>
        <img
          className="banner-overview-koompiE11"
          src={imageLink + data.pages[0].image}
        />
      </center>
    );
  };

  // ===== KOOMPI E Screen Section  =====
  const DisplayScreen = () => {
    const { data } = useQuery(GET_PAGES);
    const { subTitle, title, image } = data.pages[3];
    const description = renderHTML(data.pages[3].description);
    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{parse(description)}</p>
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
          <img className="banner-overview-koompiE11" src={imageLink + image} />
        </div>
      </>
    );
  };

  // ===== KOOMPI E Shapeliness Section  =====
  const DisplayShapeliness = () => {
    const { data } = useQuery(GET_PAGES);
    const { subTitle, title, image } = data.pages[4];
    const description = renderHTML(data.pages[4].description);
    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{parse(description)}</p>
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
  const DisplayBattery = () => {
    const { data } = useQuery(GET_PAGES);
    const { subTitle, title, image } = data.pages[5];
    const description = renderHTML(data.pages[5].description);

    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{parse(description)}</p>
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
  const DisplayPerformance = () => {
    const { data } = useQuery(GET_PAGES);
    const { subTitle, title, image } = data.pages[6];
    const description = renderHTML(data.pages[6].description);

    return (
      <>
        <div className="koompi-page-container">
          <center>
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <p className="subTittle-E11">{parse(description)}</p>
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
      <div className="addToCart">
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
      </div>
      <BackTop>
        <Icon type="caret-up" />
      </BackTop>
      <div>
        <Navbar />
        <Sub_Navbar_Koompi_E />
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
          <div className="koompi-page-container">
            <div className="koompiDetail">
              <DisplayKOOMPIE />
            </div>
          </div>
          {/*============== Screen Section========== */}
          <div className="margin-display-koompiE11">
            <DisplayScreen />
          </div>

          {/*============== Shapeliness Section========== */}
          <div className="shapeliness-margin-top">
            <DisplayShapeliness />
          </div>

          {/*============== BATTERY Section========== */}
          <div className="margin-battery-section shapeliness-margin-top">
            <DisplayBattery />
          </div>

          {/*============== Shapeliness Section========== */}
          <div className="shapeliness-margin-top">
            <DisplayPerformance />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default KoompiE11;
