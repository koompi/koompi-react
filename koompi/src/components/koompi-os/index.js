import React, { useEffect } from "react"
import { Row, Col, Spin } from "antd"
import SubNavbar from "./subNavbar"
import Footer from "../footer"
import renderHTML from "../editorJsToHtml"
import NProgress from "nprogress"
import { GET_SOFTWARES, GET_PAGES } from "../graphql/query"
import _ from "lodash"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import { Helmet } from "react-helmet"
import ProgressiveImage from "react-progressive-image"
import ScrollAnimation from "react-animate-on-scroll"

function KOOMPIOS() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const DisplayBanner = () => {
    const { error, loading, data } = useQuery(GET_PAGES)
    if (error) {
      console.log(error)
      return null
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

    const filterSoftware = _.filter(
      data.pages,
      (res) => res.category.slug === "software"
    )

    NProgress.done()
    return filterSoftware.map((res, index) => {
      const { title, image, meta_desc } = res
      const description = renderHTML(res.description)

      return (
        <React.Fragment key={index}>
          <Helmet>
            <title>KOOMPI OS - KOOMPI</title>
            <meta name="keywords" content={res.keywords.map((res) => res + ",")} />
            <meta name="description" content={meta_desc} />
            <link rel="canonical" href="https://koompi.com/koompi-os" />
          </Helmet>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="bigScreen">
              <ProgressiveImage src={`https://admin.koompi.com${image}`}>
                {(src, loading) =>
                  loading ? (
                    <center>
                      <img src="/img/oval.svg" alt={title} height="60px" />
                    </center>
                  ) : (
                    <img src={src} alt={title} className="koompi-os-banner-image" />
                  )
                }
              </ProgressiveImage>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h3 className="koompi-os-banner-title">{title}</h3>
              {parse(description)}
            </Col>
          </Row>
        </React.Fragment>
      )
    })
  }

  const DisplaySoftware = () => {
    const { error, loading, data } = useQuery(GET_SOFTWARES)
    if (error) console.log(error)
    if (loading) {
      return null
    }
    return data.softwares.map((software, index) => {
      const { title, image } = software
      const description = renderHTML(software.description)
      if (index % 2 === 0) {
        return (
          <Row gutter={[12, 12]} key={index}>
            <Col xs={24} sm={24} md={13} lg={13} xl={13}>
              <div className="koompi-os-apps paddingRight">
                {/* <img
                  src={`https://admin.koompi.com${logo}`}
                  alt=""
                  className="app-logo"
                /> */}
                <h3 className="app-title">{title}</h3>
                {parse(description)}
              </div>
            </Col>
            <Col xs={24} sm={24} md={11} lg={11} xl={11}>
              <div className="app-image">
                <ProgressiveImage src={`https://admin.koompi.com${image}`}>
                  {(src, loading) =>
                    loading ? (
                      <center>
                        <img src="/img/oval.svg" alt={title} height="60px" />
                      </center>
                    ) : (
                      <img
                        src={src}
                        alt={`KOOMPI ${title}`}
                        style={{ float: "right" }}
                        className="drawImage"
                      />
                    )
                  }
                </ProgressiveImage>
              </div>
            </Col>
          </Row>
        )
      } else {
        return (
          <Row gutter={[12, 12]} key={index}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="bigScreen">
              <div className="app-image">
                <ProgressiveImage src={`https://admin.koompi.com${image}`}>
                  {(src, loading) =>
                    loading ? (
                      <center>
                        <img src="/img/oval.svg" alt={title} height="60px" />
                      </center>
                    ) : (
                      <img
                        src={src}
                        alt={`KOOMPI ${title}`}
                        style={{ float: "left" }}
                        className="drawImage"
                      />
                    )
                  }
                </ProgressiveImage>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="koompi-os-apps paddingLeft">
                {/* <img
                  src={`https://admin.koompi.com${logo}`}
                  alt={`KOOMPI ${title}`}
                  className="app-logo"
                /> */}
                <h3 className="app-title">{title}</h3>
                {parse(description)}
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="smallDevice">
              <div className="app-image">
                <ProgressiveImage src={`https://admin.koompi.com${image}`}>
                  {(src, loading) =>
                    loading ? (
                      <center>
                        <img src="/img/oval.svg" alt={title} height="60px" />
                      </center>
                    ) : (
                      <img
                        src={src}
                        alt={`KOOMPI ${title}`}
                        style={{ float: "left" }}
                        className="drawImage"
                      />
                    )
                  }
                </ProgressiveImage>
              </div>
            </Col>
          </Row>
        )
      }
    })
  }

  return (
    <React.Fragment>
      <SubNavbar title="KOOMPI OS" />
      <div className="container">
        <div className="koompi-os-banner">
          <DisplayBanner />
        </div>
      </div>
      <div className="apps">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            <DisplaySoftware />
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default KOOMPIOS
