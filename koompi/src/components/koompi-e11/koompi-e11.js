import React, { useEffect } from "react"
import { Row, Col, Result, Spin } from "antd"
import { useQuery } from "@apollo/react-hooks"
import { GET_PAGES } from "../graphql/query"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import renderHTML from "../editorJsToHtml"
import parse from "html-react-parser"

import SubNavbar from "./subNavbar"
import screen from "../data/screen-e11"
import shapeliness from "../data/shapeliness-e11"
import performance from "../data/performance-e11"
import battery from "../data/battery-e11"
import Footer from "../footer"
import _ from "lodash"
import ProgressiveImage from "react-progressive-image"
import ScrollAnimation from "react-animate-on-scroll"
import ReactPlayer from "react-player"

import Helmet from "react-helmet"

function KoompiE13(props) {
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
        <Row className="Row-about" gutter={16}>
          <center>
            <img src="/img/loading.svg" alt="koompi loading" height="40px" />
          </center>
        </Row>
      </React.Fragment>
    )
  }

  NProgress.done()

  const dataIndex = data.pages.filter((res) => res.category.slug === "koompi-e11")
  const result = _.orderBy(dataIndex, "sectionNumber", "asc")

  // ===== KOOMPI E11 Top Section  =====
  const DisplayKOOMPIE = ({ title, description }) => {
    return (
      <div className="koompiE11Back">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            <center>
              <h2 className="koompi-e13-title-index">{title}</h2>

              <div className="subTittle-E11">{description}</div>
              <h1 className="koompi-price">$179</h1>
              <ProgressiveImage src="/img/e11.png">
                {(src, loading) =>
                  loading ? (
                    <img src="/img/loading.svg" alt={title} height="60px" />
                  ) : (
                    <img
                      className="banner-overview-koompiE11 koompi-e11-page-width"
                      src={src}
                      alt={title}
                    />
                  )
                }
              </ProgressiveImage>
            </center>
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
            <ScrollAnimation animateIn="fadeIn">
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
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="koompi-e-background">
          <ProgressiveImage src={image}>
            {(src, loading) =>
              loading ? (
                <img src="/img/loading.svg" alt={title} height="60px" />
              ) : (
                <img
                  className="banner-overview-koompiE11 e11-screen"
                  src={src}
                  alt={title}
                />
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
            <ScrollAnimation animateIn="fadeIn">
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
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="container">
          {/* <center>
            <ProgressiveImage src={image}>
              {(src, loading) =>
                loading ? (
                  <img src="/img/loading.svg" alt={title} height="60px" />
                ) : (
                  <img
                    className="banner-overview-koompiE11 e11-shapeliness"
                    src={src}
                    alt={title}
                  />
                )
              }
            </ProgressiveImage>
          </center> */}
          <center>
            <div className="player-wrapper">
              <ReactPlayer
                playing
                loop
                className="react-player playerWidth"
                url={[{ src: "/img/SHAPELINESS.mp4", type: "video/webm" }]}
                width="100%"
                height="100%"
                playbackRate="0.8"
              />
            </div>
          </center>
        </div>
      </>
    )
  }

  // ===== KOOMPI E Batter Section  =====
  const DisplayBattery = ({ subTitle, title }) => {
    return (
      <>
        <div className="koompi-page-container text-koompi-section-banner">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <div className="koompi-screen-section">
                <h3>{subTitle}</h3>
                <h2 className="KoompiE11">{title}</h2>
              </div>
              <div className="koompi-e-section-margin batterSection">
                <Row gutter={16}>
                  {battery.map((data, index) => {
                    return (
                      <Col xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="container">
          <Row gutter={16}>
            <Col span={24}>
              <center>
                <div className="player-wrapper">
                  <ReactPlayer
                    playing
                    loop
                    className="react-player"
                    url={[{ src: "/img/e11-battery.mp4", type: "video/webm" }]}
                    width="100%"
                    height="100%"
                    playbackRate="0.8"
                  />
                </div>
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
            <ScrollAnimation animateIn="fadeIn">
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
                        <h3 className="koompi-e-section-title">{data.title}</h3>
                        <p className="koompi-e-section-desc">{data.value}</p>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="container">
          <div>
            <center>
              <ProgressiveImage src={imageLink + image}>
                {(src, loading) =>
                  loading ? (
                    <img src="/img/loading.svg" alt={title} height="60px" />
                  ) : (
                    <img
                      className="banner-overview-koompiE11 koompi-e11-page-width"
                      src={src}
                      alt={title}
                    />
                  )
                }
              </ProgressiveImage>
            </center>
          </div>
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
          <div className="background-color-Koompi">
            <div
              className="koompi-page-container text-koompi-section-banner"
              key={index}
            >
              <div className="koompiDetail">
                <DisplayKOOMPIE
                  title={data.title}
                  description={parse(description)}
                  image={data.image}
                />
              </div>
            </div>
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
              image={imageLink + data.image}
            />
          </div>
        )
      }
      //============== Performance Section==========
      if (data.sectionNumber === "4") {
        const description = renderHTML(data.description)
        return (
          <div className="performance-margin-top" key={index}>
            <DisplayPerformance
              subTitle={data.subTitle}
              title={data.title}
              description={parse(description)}
              image={data.image}
            />
          </div>
        )
      }
      //============== BATTERY Section==========
      if (data.sectionNumber === "5") {
        const description = renderHTML(data.description)
        return (
          <div className="battery-section-background" key={index}>
            <DisplayBattery
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
        <title>KOOMPI E11 - KOOMPI</title>
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
        <SubNavbar title="KOOMPI E11" history={props.history} />
        <div>
          <DisplayData />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default KoompiE13
