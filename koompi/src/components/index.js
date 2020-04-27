import React, { useState } from "react"
import { Row, Col, Modal } from "antd"
// import Particles from "react-particles-js"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { Link } from "react-router-dom"
import { Button, Icon, Result, Spin, Carousel } from "antd"
import { GET_PAGES } from "./graphql/query"
import Footer from "./footer"
import _ from "lodash"
import renderHTML from "./editorJsToHtml"
import { Helmet } from "react-helmet"
import ReactPlayer from "react-player"
import ProgressiveImage from "react-progressive-image"
import { motion } from "framer-motion"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import PreOrder from "./preorder/preorder"

const academy_images = [
  "/img/academy/1-01.png",
  "/img/academy/11-01.png",
  "/img/academy/5-01.png",
  "/img/academy/6-01.png",
  "/img/academy/8-01.png",
]

function Index() {
  const [visible, setVisible] = useState(false)

  const { data } = useQuery(GET_PAGES)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = (e) => {
    setVisible(false)
  }

  const handleCancel = (e) => {
    setVisible(false)
  }

  const { error, loading } = useQuery(GET_PAGES)
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
            <Spin tip="Loading ..."></Spin>
          </center>
        </Row>
      </React.Fragment>
    )
  }
  NProgress.done()

  const dataIndex = data.pages.filter((res) => res.category.slug === "index")
  const result = _.orderBy(dataIndex, "sectionNumber", "asc")

  const DisplayData = () => {
    return result.map((data, index) => {
      const description = renderHTML(data.description)
      if (data.sectionNumber === "1") {
        return (
          <ScrollAnimation animateIn="fadeIn">
            <div className="e13-index-banner">
              {/* <div className="PhnomPenh"></div> */}
              <div className="koompi-e13-position">
                <div className="container">
                  <Row gutter={50}>
                    <Col xs={24} sm={24} md={24} lg={13} xl={13}>
                      <div className="banner_content">
                        {/* ========= KOOMPI SECTION =========  */}
                        <h2 className="koompi-e11-title">KOOMPI E13</h2>
                        <h1 className="bossTittle-KoompiHome">{data.title}</h1>

                        <div className="text-koompi-section-banner">
                          {parse(description)}
                          <div className="btn-center">
                            <Link to="/koompi-os">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className="koompiBtn"
                              >
                                Learn More
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                      <center>
                        <div className="index_banner">
                          <ProgressiveImage
                            src={`https://admin.koompi.com` + data.image}
                          >
                            {(src, loading) =>
                              loading ? (
                                "Loading ..."
                              ) : (
                                <img
                                  style={{ opacity: loading ? 0.5 : 1 }}
                                  src={src}
                                  alt="KOOMPI E13"
                                />
                              )
                            }
                          </ProgressiveImage>
                        </div>
                      </center>
                    </Col>
                  </Row>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )
      }
      if (data.sectionNumber === "2") {
        const description = renderHTML(data.description)
        return (
          //

          <div className="os-index-banner">
            <div className="koompi-os-position">
              <div className="container">
                <ScrollAnimation animateIn="fadeIn">
                  <Row gutter={50}>
                    <Col xs={24} sm={24} md={24} lg={13} xl={13}>
                      <div className="banner_content">
                        {/* ========= KOOMPI SECTION =========  */}
                        <h2 className="koompi-e11-title">KOOMPI OS</h2>
                        <h1 className="bossTittle-KoompiHome">{data.title}</h1>

                        <div className="text-koompi-section-banner">
                          {parse(description)}
                          <div className="btn-center">
                            <Link to="/koompi-os">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className="koompiBtn"
                              >
                                Learn More
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                      <center>
                        <div className="index_banner">
                          <ProgressiveImage
                            src={`https://admin.koompi.com` + data.image}
                          >
                            {(src, loading) =>
                              loading ? (
                                "Loading ..."
                              ) : (
                                <img
                                  style={{ opacity: loading ? 0.5 : 1 }}
                                  src={src}
                                  alt="KOOMPI E13"
                                  className="index-image"
                                />
                              )
                            }
                          </ProgressiveImage>
                        </div>
                      </center>
                    </Col>
                  </Row>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        )
      }
      if (data.sectionNumber === "3") {
        const description = renderHTML(data.description)
        return (
          <ScrollAnimation animateIn="fadeIn">
            <div className="koompi-os-index" key={index}>
              <div className="koompi-logo-koompi-os-section"></div>
              <div className="container">
                <center>
                  <div className="koompi_content">
                    <h1 className="bossTittle-KoompiHome">{data.title}</h1>
                    <div className="text-koompi-section-banner">
                      {parse(description)}
                    </div>
                  </div>
                  <div className="subBanner-koompiPro">
                    <Carousel autoplay>
                      {academy_images.map((data, index) => {
                        return (
                          <div key={index}>
                            <ProgressiveImage src={data}>
                              {(src, loading) =>
                                loading ? (
                                  "Loading ..."
                                ) : (
                                  <img
                                    style={{ opacity: loading ? 0.5 : 1 }}
                                    src={src}
                                    alt="koompi"
                                  />
                                )
                              }
                            </ProgressiveImage>
                          </div>
                        )
                      })}
                    </Carousel>
                  </div>
                </center>
              </div>
            </div>
          </ScrollAnimation>
        )
      }
      return null
    })
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>KOOMPI</title>
        <meta
          name="keywords"
          content="KOOMPI, KOOMPI OS, KOOMPI ACADEMY, KHMER LAPTOP,koompi, koompi laptop, koompi computer, koompi os, koompi review"
        />
        <meta
          name="description"
          content="KOOMPI is a practical, affordable and effective entry level laptop. High-end perform daily tasks for working and schooling. Create with a customized operating system by our own called, KramaOS based on well-known open source Linux. Both philosophy and design fit specifically with KOOMPI’s hardware."
        />
        <link rel="canonical" href="https://koompi.com/" />
      </Helmet>

      <div className="first-index-banner">
        {/* <div className="PhnomPenh"></div> */}
        {/* <img src="/img/4.png" alt="" className="index-img-4" /> */}
        {/* <img src="/img/3.png" alt="" className="index-img-3" />
        <img src="/img/2.png" alt="" className="index-img-2" />
        <img src="/img/1.png" alt="" className="index-img-1" /> */}
        <div className="koompi-e11-position">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <Row gutter={50}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="banner_content">
                    {/* ========= KOOMPI SECTION =========  */}
                    <center>
                      <p className="index-new">New</p>
                    </center>
                    <h1 className="bossTittle-KoompiHome-e11">KOOMPI E11</h1>
                    <div className="koompi-e11-desc">
                      <p>
                        After releasing our classic E13, we never stopped working
                        towards our mission, to see every student own their personal
                        computer. Our one-student-one notebook initiative cannot
                        become a reality if computers are not affordable.
                      </p>
                      <p>
                        The E11 was built to make computing possible for everyone.
                      </p>
                    </div>
                    <center>
                      <p>Starting at $149</p>
                      <Link to="/koompi-e11-order">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          className="koompiBtn"
                        >
                          Pre-Order
                        </motion.button>
                      </Link>

                      <Link to="/koompi-e11" className="learnMoreLink">
                        <p className="learnMoreIndex">Learn More</p>
                      </Link>
                    </center>
                    <center>
                      <img src="/img/e11.png" alt="" className="koompiE11-image" />
                    </center>
                  </div>
                </Col>
              </Row>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <DisplayData />
      {/* =============Big Section ===============*/}

      {/* <div className="koompi-pro-index">
        <div className="container">
          <center>
            <h2>Hello</h2>
          </center>
        </div>
        <div className="koompi-logo-koompi-pro-section"></div>
      </div> */}
      <Footer />
    </React.Fragment>
  )
}

export default Index
