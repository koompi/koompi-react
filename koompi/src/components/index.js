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
import Img from "react-image"
import ProgressiveImage from "react-progressive-image"

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
          <div className="banner" key={index}>
            {/* <div className="PhnomPenh"></div> */}
            <div className="container">
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <center>
                    <div className="banner_content">
                      {/* ========= KOOMPI SECTION =========  */}
                      <h1 className="bossTittle-KoompiHome">{data.title}</h1>
                      <div className="text-koompi-section-banner">
                        {parse(description)}

                        <Button className="koompiBtn">
                          <Link to="/koompi-e13">Read More</Link>{" "}
                          <Icon type="arrow-right" />
                        </Button>
                      </div>
                      <div onClick={showModal} className="videoPlayBtn">
                        <Icon type="play-circle" className="indexPlayButton" />
                      </div>
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <Modal
                          onCancel={handleCancel}
                          onOk={handleOk}
                          visible={visible}
                          footer={false}
                          className="videoModal"
                        >
                          <ReactPlayer
                            height="auto"
                            width="100%"
                            controls={true}
                            url="https://admin.koompi.com/public/videos/koompi.mp4"
                            playing={visible}
                          />
                        </Modal>
                      </div>
                    </div>
                  </center>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
        )
      }
      if (data.sectionNumber === "2") {
        const description = renderHTML(data.description)
        return (
          <div className="content1" key={index}>
            <div className="koompi_section_position">
              <center>
                <div className="container">
                  <h1 className="tittle-koompiPro-banner">{data.title}</h1>
                  <div className="text-koompi-section-banner index-section2">
                    {parse(description)}
                    <Button className="openSourceBtn">
                      <Link to="/koompi-os">Read More</Link>{" "}
                      <Icon type="arrow-right" />
                    </Button>
                  </div>
                  <div className="subBanner-koompiPro koompiOSImage">
                    <ProgressiveImage src={`https://admin.koompi.com` + data.image}>
                      {(src, loading) =>
                        loading ? (
                          "Loading ..."
                        ) : (
                          <img
                            style={{ opacity: loading ? 0.5 : 1 }}
                            src={src}
                            alt="an image"
                          />
                        )
                      }
                    </ProgressiveImage>
                  </div>
                </div>
              </center>
            </div>
          </div>
        )
      }
      if (data.sectionNumber === "3") {
        const description = renderHTML(data.description)
        return (
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
                                  alt="an image"
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
      <DisplayData />

      {/* =============Big Section ===============*/}

      {/* <div className="koompi-pro-index">
        <div className="container">
          <center>
            <Display_Pro_Section />
          </center>
        </div>
        <div className="koompi-logo-koompi-pro-section"></div>
      </div> */}
      <Footer />
    </React.Fragment>
  )
}

export default Index
