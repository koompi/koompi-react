import React, { useState } from "react"
import { Row, Col } from "antd"
// import Particles from "react-particles-js"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { Link } from "react-router-dom"
import { Result, Spin, Carousel } from "antd"
import { GET_PAGES } from "./graphql/query"
import Footer from "./footer"
import _ from "lodash"
import renderHTML from "./editorJsToHtml"
import { Helmet } from "react-helmet"
import ProgressiveImage from "react-progressive-image"
import { motion } from "framer-motion"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

const academy_images = [
  "/img/academy/1-01.png",
  "/img/academy/11-01.png",
  "/img/academy/5-01.png",
  "/img/academy/6-01.png",
  "/img/academy/8-01.png",
]

function Index() {
  const [appsKey, setAppsKey] = useState("1")

  const { error, loading, data } = useQuery(GET_PAGES, {
    variables: { lang: window.localStorage.getItem("i18nextLng") },
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

  const koompiApps = [
    {
      name: "Chrome",
      logo: "/img/apps/chrome.png",
      image: "/img/apps/Chrome.png",
    },
    {
      name: "Dolphin",
      logo: "/img/apps/dolphin.png",
      image: "/img/apps/Dolphin.png",
    },
    {
      name: "Darktable",
      logo: "/img/apps/darktable.png",
      image: "/img/apps/Darktable.png",
    },

    {
      name: "Inkscape",
      logo: "/img/apps/inkscape.png",
      image: "/img/apps/Inkscape.png",
    },
    {
      name: "Krita",
      logo: "/img/apps/krita.png",
      image: "/img/apps/Krita.png",
    },
    {
      name: "Gimp",
      logo: "/img/apps/gimp.png",
      image: "/img/apps/Gimp.png",
    },
    {
      name: "Telegram",
      logo: "/img/apps/telegram.png",
      image: "/img/apps/Telegram.png",
    },
    {
      name: "Zoom",
      logo: "/img/apps/zoom.png",
      image: "/img/apps/Zoom.png",
    },
    {
      name: "GwenView",
      logo: "/img/apps/gwenview.png",
      image: "/img/apps/Gwenview.png",
    },
    {
      name: "Kdenlive",
      logo: "/img/apps/kdenlive.png",
      image: "/img/apps/Kdenlive.png",
    },
    {
      name: "VScode",
      logo: "/img/apps/vscode.png",
      image: "/img/apps/VScode.png",
    },
    {
      name: "QT",
      logo: "/img/apps/qt.png",
      image: "/img/apps/Qt.png",
    },
    {
      name: "PDF Viewer",
      logo: "/img/apps/pdf.png",
      image: "/img/apps/PDF.png",
    },
    {
      name: "XDM",
      logo: "/img/apps/xdm.png",
      image: "/img/apps/XDM.png",
    },
    {
      name: "Figma",
      logo: "/img/apps/figma.png",
      image: "/img/apps/Figma.png",
    },
    {
      name: "OBS",
      logo: "/img/apps/obs.png",
      image: "/img/apps/Obs.png",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  }

  const dataIndex = data.pages.filter((res) => res.category.slug === "index")
  console.log(dataIndex)

  const result = _.orderBy(dataIndex, "sectionNumber", "asc")

  const displayData = () => {
    return dataIndex.map((data, index) => {
      const description = renderHTML(data.description)
      if (index === 0) {
        return (
          <div className="first-index-banner-e13">
            <div className="koompi-e11-position">
              {/* <section>
                <div className="streamline-icon-programming-language-http"></div>
                <div className="streamline-icon-programming-user-head"></div>
                <div className="streamline-icon-user-live"></div>
                <div className="streamline-icon-shield-key"></div>
              </section> */}
              <div className="container">
                <ScrollAnimation animateIn="fadeIn">
                  <Row gutter={50}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="banner_content">
                        {/* ========= KOOMPI SECTION =========  */}
                        <h1 className="bossTittle-KoompiHome-e11">{data.title}</h1>
                        <div className="koompi-e11-desc">{parse(description)}</div>
                        <center>
                          <Link to="/koompi-e11">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.9 }}
                              className="koompiBtn"
                            >
                              Learn More
                            </motion.button>
                          </Link>
                        </center>
                        <center>
                          <ProgressiveImage src={"/img/koompi-e13.png"}>
                            {(src, loading) =>
                              loading ? (
                                "Loading ..."
                              ) : (
                                <img
                                  style={{ opacity: loading ? 0.5 : 1 }}
                                  src={src}
                                  alt="KOOMPI E13"
                                  className="koompiE11-image"
                                />
                              )
                            }
                          </ProgressiveImage>
                        </center>
                      </div>
                    </Col>
                  </Row>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        )
      }
      if (data.sectionNumber === "2") {
        const description = renderHTML(data.description)
        return (
          <div className="first-index-banner">
            <div className="koompi-e11-position">
              {/* <section>
                <div className="streamline-icon-app-window-lock"></div>
                <div className="streamline-icon-programming-flag"></div>
                <div className="streamline-icon-database-flash"></div>
                <div className="streamline-icon-responsive-design-expand-1"></div>
              </section> */}
              <div className="container">
                <Row gutter={50}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="banner_content">
                      {/* ========= KOOMPI SECTION =========  */}
                      <h1 className="bossTittle-KoompiHome-e11">{data.title}</h1>
                      <div className="koompi-e11-desc">{parse(description)}</div>
                      <center>
                        <a
                          href="https://www.koompi.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className="koompiBtn"
                          >
                            Learn More
                          </motion.button>
                        </a>
                      </center>
                      <center></center>
                      <div className="appsWidth">
                        <center>
                          <ScrollAnimation animateIn="fadeIn">
                            {koompiApps.map((res, index) => {
                              if (`${index + 1}` === `${appsKey}`) {
                                return (
                                  // <figure className="image-shared-kp">
                                  //   <div
                                  //     className="image-app-updates-screen-photos mba-screen"
                                  //     // style={{
                                  //     //   backgroundImage: `url(${res.image})`,
                                  //     // }}
                                  //   ></div>
                                  // </figure>
                                  // <img
                                  //   src={res.image}
                                  //   alt={res.title}
                                  //   className="appsImageWidth animated fadeIn"
                                  // />

                                  <ProgressiveImage src={res.image}>
                                    {(src, loading) =>
                                      loading ? (
                                        <img
                                          src="/img/apps/Chrome.png"
                                          alt={res.title}
                                          className="banner-overview-koompiE11"
                                        />
                                      ) : (
                                        <img
                                          className="appsImageWidth animated fadeIn"
                                          src={src}
                                          alt={res.title}
                                        />
                                      )
                                    }
                                  </ProgressiveImage>
                                )
                              }
                            })}
                          </ScrollAnimation>
                        </center>
                        <Row gutter={[24, 24]}>
                          <Carousel
                            {...settings}
                            arrows={true}
                            draggable={true}
                            className="kp-apps-arrows"
                            nextArrow={<div>Next</div>}
                          >
                            {koompiApps.map((res, index) => {
                              return (
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <div
                                    onClick={() => {
                                      setAppsKey(`${index + 1}`)
                                    }}
                                  >
                                    <center>
                                      <motion.div
                                        whileHover={{
                                          scale: 1.1,
                                          transition: { duration: 0.3 },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <img
                                          src={`${res.logo}`}
                                          className="koompiApps "
                                          alt={res.name}
                                        />
                                        <h4 className="appsName">{res.name}</h4>
                                      </motion.div>
                                    </center>
                                  </div>
                                </Col>
                              )
                            })}
                          </Carousel>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
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
              {/* <div className="koompi-logo-koompi-os-section"></div> */}
              <section>
                <div className="streamline-icon-study-notebook-maths"></div>
                <div className="streamline-icon-study-maths-brain"></div>
                <div className="streamline-icon-library-maths"></div>
                <div className="streamline-icon-school-locker"></div>
              </section>
              <div className="container">
                <div className="koompi_content">
                  <center>
                    <h1 className="bossTittle-KoompiHome">{data.title}</h1>
                  </center>
                  <div className="text-koompi-section-banner">
                    <center>{parse(description)}</center>
                  </div>
                </div>
                <div className="subBanner-koompiPro">
                  <Carousel
                    effect="fade"
                    speed="600"
                    draggable={true}
                    style={{ cursor: "pointer" }}
                  >
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
              </div>
            </div>
          </ScrollAnimation>
        )
      }
      return null
    })
  }

  NProgress.done()

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
        {/* <section>
          <div className="streamline-icon-robot"></div>
          <div className="streamline-icon-drone-controller"></div>
          <div className="streamline-icon-virtual-house"></div>
          <div className="streamline-icon-bendable-phone-touch"></div>
        </section> */}
        <div className="img-holder"></div>
        <div className="koompi-e11-position">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn">
              <Row gutter={50}>
                {dataIndex.map((res) => {
                  const description = renderHTML(res.description)
                  return (
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="banner_content">
                        {/* ========= KOOMPI SECTION =========  */}
                        <center>
                          <p className="index-new">New</p>
                        </center>
                        <h1 className="bossTittle-KoompiHome-e11">{res.title}</h1>
                        <div className="koompi-e11-desc">{parse(description)}</div>
                        <center>
                          <Link to="/koompi-e11">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.9 }}
                              className="koompiBtn"
                            >
                              Learn More
                            </motion.button>
                          </Link>
                        </center>
                        <center>
                          <img
                            src="/img/e11.png"
                            alt=""
                            className="koompiE11-image"
                          />
                        </center>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* {displayData()} */}
      <Footer />
    </React.Fragment>
  )
}

export default Index
