import React, { useState } from "react"
import { Row, Col } from "antd"
// import Particles from "react-particles-js"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { Link } from "react-router-dom"
import { Result, Carousel } from "antd"
import { GET_PAGES } from "./graphql/query"
import Footer from "./footer"
import _ from "lodash"
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

  const sectionOrder = _.orderBy(dataIndex, "sectionNumber", "asc")

  const khLang = window.localStorage.getItem("i18nextLng") === "kh"

  const KpButtom = () => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={khLang ? "koompiBtn btnKhmerLang" : "koompiBtn"}
      >
        {khLang ? "អានបន្ថែម" : "Read More"}
      </motion.button>
    )
  }

  const displayData = () => {
    return sectionOrder.map((data, index) => {
      if (index === 0) {
        return (
          <div className="first-index-banner">
            <div className="img-holder"></div>
            <div className="koompi-e11-position">
              <div className="container">
                <ScrollAnimation animateIn="fadeIn">
                  <Row gutter={50}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="banner_content">
                        {/* ========= KOOMPI SECTION =========  */}
                        <center>
                          <p className="index-new">{khLang ? "ថ្មី" : "New"}</p>
                        </center>
                        <h1 className="bossTittle-KoompiHome-e11">{data.title}</h1>

                        <div
                          className={
                            khLang
                              ? "koompi-e11-desc khmerLang"
                              : "koompi-e11-desc enLang"
                          }
                        >
                          {parse(data.description)}
                        </div>
                        <center>
                          <Link to="/koompi-e11">
                            <KpButtom />
                          </Link>
                        </center>
                        <center>
                          <img
                            src={`https://admin.koompi.com${data.image}`}
                            alt={data.title}
                            className="koompiE11-image"
                          />
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

      if (index === 1) {
        return (
          <div className="first-index-banner-e13">
            <div className="koompi-e11-position">
              <div className="container">
                <ScrollAnimation animateIn="fadeIn">
                  <Row gutter={50}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="banner_content">
                        <h1 className="bossTittle-KoompiHome-e11">{data.title}</h1>
                        <div
                          className={
                            khLang
                              ? "koompi-e11-desc khmerLang"
                              : "koompi-e11-desc enLang"
                          }
                        >
                          {parse(data.description)}
                        </div>
                        <center>
                          <Link to="/koompi-e13">
                            <KpButtom />
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
                                  src={`https://admin.koompi.com${data.image}`}
                                  alt={data.title}
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
      if (index === 2) {
        return (
          <div className="first-index-banner">
            <div className="koompi-e11-position">
              <div className="container">
                <Row gutter={50}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="banner_content">
                      <h1 className="bossTittle-KoompiHome-e11">{data.title}</h1>
                      <div
                        className={
                          khLang
                            ? "koompi-e11-desc khmerLang"
                            : "koompi-e11-desc enLang"
                        }
                      >
                        {parse(data.description)}
                      </div>
                      <center>
                        <a
                          href="https://www.koompi.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <KpButtom />
                        </a>
                      </center>

                      <center></center>
                      <div className="appsWidth">
                        <center>
                          <ScrollAnimation animateIn="fadeIn">
                            {koompiApps.map((res, index) => {
                              if (`${index + 1}` === `${appsKey}`) {
                                return (
                                  <ProgressiveImage src={res.image} key={index}>
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
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={24}
                                  lg={24}
                                  xl={24}
                                  key={index}
                                >
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
      if (index === 3) {
        // const description = renderHTML(data.description)
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
                  <div
                    className={
                      khLang
                        ? "text-koompi-section-banner khmerLang"
                        : "text-koompi-section-banner enLang"
                    }
                  >
                    <center>{parse(data.description)}</center>
                  </div>
                </div>
                <div className="subBanner-koompiPro">
                  <center>
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
                  </center>
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
        {/* <!-- Primary Meta Tags --> */}
        <meta name="theme-color" content="#004ba0" data-react-helmet="true" />
        <title data-react-helmet="true">KOOMPI</title>
        <meta data-react-helmet="true" name="title" content="KOOMPI" />
        <meta
          data-react-helmet="true"
          name="description"
          content="KOOMPI, together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://www.koompi.com"
        />
        <meta data-react-helmet="true" property="og:title" content="KOOMPI" />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="KOOMPI, together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://demo.koompi.com/img/koompi-meta-tags.png"
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
        <meta data-react-helmet="true" property="twitter:title" content="KOOMPI" />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="KOOMPI, together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
        />
        <meta
          data-react-helmet="true"
          property="twitter:image"
          content="https://demo.koompi.com/img/koompi-meta-tags.png"
        />
      </Helmet>

      {displayData()}
      <Footer />
    </React.Fragment>
  )
}

export default Index
