import React, { useState, useEffect } from "react"
import { Row, Col, Result, Spin, Carousel, Icon, Button } from "antd"
import { useQuery } from "@apollo/react-hooks"
import { GET_PAGES } from "../graphql/query"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import renderHTML from "../editorJsToHtml"
import parse from "html-react-parser"

import SubNavbar from "./subNavbar"
import screen from "../data/screen"
import shapeliness from "../data/shapeliness"
import performance from "../data/performance"
import battery from "../data/battery"
import Footer from "../footer"
import _ from "lodash"
import ProgressiveImage from "react-progressive-image"
import ScrollAnimation from "react-animate-on-scroll"

import Helmet from "react-helmet"
import { Link } from "react-router-dom"

function KoompiE13(props) {
  const [koompiColor, setKoompiColor] = useState("gray")
  const imageLink = `https://admin.koompi.com`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { error, loading, data } = useQuery(GET_PAGES)
  if (error) {
    if (error.networkError) {
      return (
        <Result status="500" title="500" subTitle="Sorry, the server is wrong." />
      )
    }
  }
  if (loading) {
    NProgress.start()
    return (
      <React.Fragment>
        <Row className="Row-about" gutter={16} type="flex">
          <center>
            <Spin tip="Loading ..."></Spin>
          </center>
        </Row>
      </React.Fragment>
    )
  }
  NProgress.done()

  const dataIndex = data.pages.filter((res) => res.category.slug === "koompi-e13")
  const result = _.orderBy(dataIndex, "sectionNumber", "asc")

  // ===== KOOMPI E Top Section  =====
  const DisplayKOOMPIE = ({ title, description, image }) => {
    return (
      <div className="banner">
        {/* <div className="PhnomPenh"></div> */}
        {/* <img src="/img/4.png" alt="" className="index-img-4" /> */}
        <div className="koompi-e11-position">
          <ScrollAnimation animateIn="fadeIn">
            <div className="container-e13-index">
              <div className="koompi-e13-section">
                <Row gutter={50}>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={10}
                    xl={10}
                    style={{ zIndex: "1" }}
                  >
                    <div className="banner_content">
                      {/* ========= KOOMPI SECTION =========  */}
                      <center>
                        <h1 className="koompi-e13-title-index">{title}</h1>
                      </center>

                      <div className="text-koompi-section-banner">
                        <center>
                          <div className="koompi-index-desc">{description}</div>
                          <h1 class="koompi-price">$369</h1>
                        </center>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                    <center>
                      <div className="index_banner">
                        <img src="/img/19.jpg" alt="" className="koompi-e13" />
                      </div>
                    </center>
                  </Col>
                </Row>
              </div>
              <br />
              <br />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    )
  }

  // ===== KOOMPI E Screen Section  =====
  const DisplayScreen = ({ title, subTitle, description, image }) => {
    return (
      <>
        <div className="koompi-page-container text-koompi-section-banner">
          <div className="container">
            <center>
              <div className="koompi-screen-section">
                <h3>{subTitle}</h3>
                <h2 className="KoompiE11">{title}</h2>
              </div>
              <div className="subTittle-E11">{description}</div>
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
                    )
                  })}
                </Row>
              </div>
            </center>
          </div>
        </div>
        <div className="koompi-e-background">
          <ProgressiveImage src={image}>
            {(src, loading) =>
              loading ? (
                <img src="/img/oval.svg" alt={title} height="60px" />
              ) : (
                <img className="banner-overview-screen" src={src} alt={title} />
              )
            }
          </ProgressiveImage>
        </div>
      </>
    )
  }

  // ===== KOOMPI E Shapeliness Section  =====
  const DisplayShapeliness = ({ title, subTitle, description }) => {
    return (
      <>
        <div className="koompi-page-container text-koompi-section-banner">
          <div className="container">
            <center>
              <div className="koompi-screen-section">
                <h3>{subTitle}</h3>
                <h2 className="KoompiE11">{title}</h2>
              </div>
              <div className="subTittle-E11">{description}</div>
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
                    )
                  })}
                </Row>
              </div>
            </center>
          </div>
        </div>
        <div className="container">
          <div className="switch_laptop">
            <img
              className="banner-overview-koompiE11"
              // style={koompiColor ? null : { opacity: 0.5 }}
              src={
                koompiColor === "gray"
                  ? "/img/koompi-e/koompi-gray.png"
                  : "/img/koompi-e/koompi-rose-gold.png"
              }
              alt={title}
            />
          </div>
          <br />
          <div className="switch-koompi-container">
            <Row gutter={16}>
              <Col span={12}>
                <center>
                  <div
                    className="speceGrayCircle"
                    onClick={() => setKoompiColor("gray")}
                  ></div>
                  <p className="koompi-color-laptop">Space Gray</p>
                </center>
              </Col>
              <Col span={12}>
                <center>
                  <div
                    className="roseCircle"
                    onClick={() => setKoompiColor("rose-gold")}
                  ></div>
                  <p className="koompi-color-laptop">Rose Gold</p>
                </center>
              </Col>
            </Row>
          </div>
        </div>
      </>
    )
  }

  // ===== KOOMPI E Batter Section  =====
  const DisplayBattery = ({ subTitle, title, description, image }) => {
    return (
      <>
        <div className="koompi-page-container text-koompi-section-banner">
          <div className="container">
            <center>
              <div className="koompi-screen-section">
                <h3>{subTitle}</h3>
                <h2 className="KoompiE11">{title}</h2>
              </div>
              <div className="subTittle-E11">{description}</div>
              <div className="koompi-e-section-margin batterSection">
                <Row gutter={16}>
                  {battery.map((data, index) => {
                    return (
                      <Col xs={12} sm={12} md={8} lg={12} xl={12} key={index}>
                        <center>
                          <h3 className="koompi-e-section-title">{data.title}</h3>
                          <p className="koompi-e-section-desc">{data.value}</p>
                        </center>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </center>
          </div>
        </div>
        <div className="container">
          <Row gutter={16}>
            <Col span={24}>
              <center>
                <ProgressiveImage src={imageLink + image}>
                  {(src, loading) =>
                    loading ? (
                      <img src="/img/oval.svg" alt={title} height="60px" />
                    ) : (
                      <img
                        className="banner-overview-koompiE11 koompiBattery"
                        src={src}
                        alt={title}
                      />
                    )
                  }
                </ProgressiveImage>
              </center>
            </Col>
          </Row>
        </div>
      </>
    )
  }

  // ===== KOOMPI E Performance Section  =====
  const DisplayPerformance = ({ title, subTitle, description, image }) => {
    return (
      <>
        <div className="koompi-page-container text-koompi-section-banner">
          <div className="container">
            <center>
              <div className="koompi-screen-section">
                <h3>{subTitle}</h3>
                <h2 className="KoompiE11">{title}</h2>
              </div>
              <div className="subTittle-E11">{description}</div>
              <div className="koompi-e-section-margin">
                <Row gutter={16} type="flex">
                  {performance.map((data, index) => {
                    return (
                      <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                        <center>
                          <h3 className="koompi-e-section-title">{data.title}</h3>
                          <p className="koompi-e-section-desc">{data.value}</p>
                        </center>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </center>
          </div>
        </div>
        <div className="container">
          <Carousel autoplay>
            <div>
              <center>
                <img
                  className="koompi-e13-image"
                  src={imageLink + image}
                  alt={title}
                />
              </center>
            </div>
            <div>
              <center>
                <img
                  className="koompi-e13-image"
                  src={imageLink + "/public/uploads/GrayBView1.png"}
                  alt={title}
                />
              </center>
            </div>
          </Carousel>
        </div>
      </>
    )
  }

  const DisplayData = () => {
    return result.map((data, index) => {
      //============== Top Banner Section==========
      if (data.sectionNumber === "1") {
        const description = renderHTML(data.description)
        return (
          <div
            className="koompi-page-container text-koompi-section-banner"
            key={index}
          >
            <DisplayKOOMPIE
              title={data.title}
              description={parse(description)}
              image={data.image}
            />
          </div>
        )
      }
      //============== Screen Section==========
      if (data.sectionNumber === "2") {
        const description = renderHTML(data.description)
        return (
          <div className="margin-display-koompiE11" key={index}>
            <DisplayScreen
              subTitle={data.subTitle}
              title={data.title}
              description={parse(description)}
              image={imageLink + data.image}
            />
          </div>
        )
      }
      //============== Shapeliness Section==========
      if (data.sectionNumber === "3") {
        const description = renderHTML(data.description)
        return (
          <div className="shapeliness-margin-top" key={index}>
            <DisplayShapeliness
              subTitle={data.subTitle}
              title={data.title}
              description={parse(description)}
              image={data.image}
            />
          </div>
        )
      }
      //============== BATTERY Section==========
      if (data.sectionNumber === "4") {
        const description = renderHTML(data.description)
        return (
          <div className="margin-battery-section shapeliness-margin-top" key={index}>
            <DisplayBattery
              subTitle={data.subTitle}
              title={data.title}
              description={parse(description)}
              image={data.image}
            />
          </div>
        )
      }
      //============== Shapeliness Section==========
      if (data.sectionNumber === "5") {
        const description = renderHTML(data.description)
        return (
          <div className="shapeliness-margin-top" key={index}>
            <DisplayPerformance
              subTitle={data.subTitle}
              title={data.title}
              description={parse(description)}
              image={data.image}
            />
          </div>
        )
      }
      return null
    })
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>KOOMPI E13 - KOOMPI</title>
        <meta
          name="keywords"
          content="KOOMPI, KOOMPI OS, KOOMPI ACADEMY, KHMER LAPTOP,koompi e13, koompi laptop, koompi computer, koompi os, koompi review"
        />
        <meta
          name="description"
          content="Immerse yourself into endless possibilities. Start with the classic KOOMPI, the E13. Built-in integrated software suite. Lightweight and compact."
        />
        <link rel="canonical" href="https://koompi.com/koompi-e13" />
      </Helmet>
      <div>
        <SubNavbar title="KOOMPI E13" history={props.history} />
        <div className="background-color-Koompi-E">
          <DisplayData />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default KoompiE13
