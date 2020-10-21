import React, { useState } from "react"
import { Row, Col, Result, Carousel } from "antd"
import { useQuery } from "@apollo/react-hooks"
import { GET_PAGES } from "../graphql/query"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
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
import { useTranslation } from "react-i18next"

import Helmet from "react-helmet"

function KoompiE13(props) {
  const { i18n } = useTranslation()
  const [koompiColor, setKoompiColor] = useState("koompi-gray")
  const imageLink = `https://admin.koompi.com`

  // Language Context
  const lang = i18n.language

  const toggleImage = (e) => {
    e.preventDefault()
    if (koompiColor === "koompi-gray") {
      setKoompiColor("koompi-rose-gold")
    } else {
      setKoompiColor("koompi-gray")
    }
  }

  const { error, loading, data } = useQuery(GET_PAGES, {
    variables: { lang },
  })
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
        <Row className="Row-about" gutter={24}>
          <center>
            <img src="/img/loading.svg" alt="koompi loading" height="40px" />
          </center>
        </Row>
      </React.Fragment>
    )
  }
  NProgress.done()

  const dataIndex = data.pages.filter((res) => res.category.slug === "koompi-e13")

  const result = _.orderBy(dataIndex, "sectionNumber", "asc")

  // ===== KOOMPI E Top Section  =====
  const DisplayKOOMPIE = ({ title, description }) => {
    return (
      <React.Fragment>
        <div className="background-color-Koompi">
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
                              <div
                                className={
                                  lang === "kh"
                                    ? "koompi-index-desc khmerLang"
                                    : "koompi-index-desc enLang"
                                }
                              >
                                {description}
                              </div>
                              <h1 class="koompi-price">$369</h1>
                            </center>
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                        <center>
                          <div className="index_banner">
                            <div className="loading-position">
                              <ProgressiveImage src="/img/19.png">
                                {(src, loading) =>
                                  loading ? (
                                    <img
                                      src="/img/loading.svg"
                                      alt="koompi"
                                      height="60px"
                                      style={{ marginTop: "50px" }}
                                    />
                                  ) : (
                                    <img
                                      style={{ opacity: loading ? 0.5 : 1 }}
                                      src={src}
                                      alt="koompi"
                                      className="koompi-e13"
                                    />
                                  )
                                }
                              </ProgressiveImage>
                            </div>
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
        </div>
      </React.Fragment>
    )
  }

  // ===== KOOMPI E Screen Section  =====
  const DisplayScreen = ({ title, subTitle, description, image }) => {
    return (
      <>
        <div className="koompi-page-container text-koompi-section-banner">
          <div className="container">
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <div
              className={
                lang === "kh" ? "subTittle-E11 khmerLang" : "subTittle-E11 enLang"
              }
            >
              {description}
            </div>
            <div className="koompi-e-section-margin">
              <Row gutter={16}>
                {screen.map((data, index) => {
                  return (
                    <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                      <h3 className="koompi-e-section-title">{data.title}</h3>
                      <p className="koompi-e-section-desc">{data.value}</p>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </div>
        </div>
        <div className="koompi-e-background">
          <center>
            <ProgressiveImage src={image}>
              {(src, loading) =>
                loading ? (
                  <img src="/img/loading.svg" alt={title} height="60px" />
                ) : (
                  <img
                    className="banner-overview-screen e13-screen"
                    src={src}
                    alt={title}
                  />
                )
              }
            </ProgressiveImage>
          </center>
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
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <div
              className={
                lang === "kh" ? "subTittle-E11 khmerLang" : "subTittle-E11 enLang"
              }
            >
              {description}
            </div>
            <div className="koompi-e-section-margin batterSection">
              <Row gutter={16}>
                {battery.map((data, index) => {
                  return (
                    <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                      <h3 className="koompi-e-section-title">{data.title}</h3>
                      <p className="koompi-e-section-desc">{data.value}</p>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <Row gutter={16}>
            <Col span={24}>
              <center>
                <ProgressiveImage src={imageLink + image}>
                  {(src, loading) =>
                    loading ? (
                      <img src="/img/loading.svg" alt={title} height="60px" />
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
  const DisplayPerformance = ({ title, subTitle, description }) => {
    return (
      <>
        <div className="koompi-page-container text-koompi-section-banner">
          <div className="container">
            <div className="koompi-screen-section">
              <h3>{subTitle}</h3>
              <h2 className="KoompiE11">{title}</h2>
            </div>
            <div className="koompi-desc">{description}</div>
            <div className="koompi-e-section-margin">
              <Row gutter={16} type="flex">
                {performance.map((data, index) => {
                  return (
                    <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                      <h3 className="koompi-e-section-title">{data.title}</h3>
                      <p className="koompi-e-section-desc">{data.value}</p>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <Carousel autoplay>
            <div>
              <center>
                <img
                  className="koompi-e-performance"
                  src="/img/koompi-e/koompi-both-e.png"
                  alt="rose-gold-e13"
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
        // const description = renderHTML(data.description)
        return (
          <div
            className="koompi-page-container text-koompi-section-banner"
            key={index}
          >
            <DisplayKOOMPIE
              title={data.title}
              description={parse(data.description)}
              image={data.image}
            />
          </div>
        )
      }
      //============== Screen Section==========
      if (data.sectionNumber === "2") {
        // const description = renderHTML(data.description)
        return (
          <div className="margin-display-koompiE11" key={index}>
            <DisplayScreen
              subTitle={data.subTitle}
              title={data.title}
              image={imageLink + data.image}
            />
          </div>
        )
      }
      //============== Shapeliness Section==========
      if (data.sectionNumber === "3") {
        return (
          <div className="shapeliness-margin-top" key={index}>
            <>
              <div className="koompi-page-container text-koompi-section-banner">
                <div className="container">
                  <div className="koompi-screen-section">
                    <h3>{data.subTitle}</h3>
                    <h2 className="KoompiE11">{data.title}</h2>
                  </div>
                  <div className="koompi-e-section-margin">
                    <Row gutter={16}>
                      {shapeliness.map((data, index) => {
                        return (
                          <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                            <h3 className="koompi-e-section-title">{data.title}</h3>
                            <p className="koompi-e-section-desc">{data.value}</p>
                          </Col>
                        )
                      })}
                    </Row>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="switch_laptop">
                  <center>
                    <ProgressiveImage src={`/img/koompi-e/${koompiColor}.png`}>
                      {(src, loading) =>
                        loading ? (
                          <img
                            src="/img/koompi-e/koompi-gray.png"
                            alt={data.title}
                            className="banner-overview-koompiE11"
                          />
                        ) : (
                          <img
                            className="banner-overview-koompiE11 animated fadeIn"
                            src={src}
                            alt={data.title}
                          />
                        )
                      }
                    </ProgressiveImage>
                  </center>
                </div>
                <div className="switch-koompi-container">
                  <Row gutter={16}>
                    <Col span={12}>
                      <center>
                        <div className="speceGrayCircle" onClick={toggleImage}></div>
                        <p className="koompi-color-laptop">Space Gray</p>
                      </center>
                    </Col>
                    <Col span={12}>
                      <center>
                        <div className="roseCircle" onClick={toggleImage}></div>
                        <p className="koompi-color-laptop">Rose Gold</p>
                      </center>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
          </div>
        )
      }
      //============== BATTERY Section==========
      if (data.sectionNumber === "4") {
        return (
          <div className="margin-battery-section shapeliness-margin-top" key={index}>
            <DisplayBattery
              subTitle={data.subTitle}
              title={data.title}
              image={data.image}
            />
          </div>
        )
      }
      //============== Shapeliness Section==========
      if (data.sectionNumber === "5") {
        // const description = renderHTML(data.description)
        return (
          <div className="shapeliness-margin-top" key={index}>
            <DisplayPerformance
              subTitle={data.subTitle}
              title={data.title}
              description={parse(data.description)}
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
        {/* <!-- Primary Meta Tags --> */}
        <title data-react-helmet="true">KOOMPI E13 - KOOMPI</title>
        <meta data-react-helmet="true" name="title" content="KOOMPI E13 - KOOMPI" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Immerse yourself into endless possibilities. Start with the classic KOOMPI, the E13. Built-in integrated software suite. Lightweight and compact."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://www.koompi.com"
        />
        <meta
          data-react-helmet="true"
          property="og:title"
          content="KOOMPI E13 - KOOMPI"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="Immerse yourself into endless possibilities. Start with the classic KOOMPI, the E13. Built-in integrated software suite. Lightweight and compact."
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://admin.koompi.com/public/uploads/e13-meta-tag.png"
        />

        {/* <!-- Twitter --> */}
        <meta
          data-react-helmet="true"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          data-react-helmet="true"
          property="twitter:url"
          content="https://www.koompi.com"
        />
        <meta
          data-react-helmet="true"
          property="twitter:title"
          content="KOOMPI E13 - KOOMPI"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="Immerse yourself into endless possibilities. Start with the classic KOOMPI, the E13. Built-in integrated software suite. Lightweight and compact."
        />
        <meta
          data-react-helmet="true"
          property="twitter:image"
          content="https://admin.koompi.com/public/uploads/e13-meta-tag.png"
        />
      </Helmet>
      <div>
        <SubNavbar title="KOOMPI E13" history={props.history} />
        <div>
          <DisplayData />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default KoompiE13
