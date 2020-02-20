import React from "react"
import Navbar from "../navbar"
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

function KOOMPIOS() {
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
            <title>{title + " - KOOMPI"}</title>
            <meta name="keywords" content={res.keywords.map((res) => res + ",")} />
            <meta name="description" content={meta_desc} />
          </Helmet>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h3 className="koompi-os-banner-title">{title}</h3>
              {parse(description)}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="bigScreen">
              <img
                src={`https://admin.koompi.com${image}`}
                alt={title}
                className="koompi-os-banner-image"
              />
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
    if (data) {
      return data.softwares.map((software, index) => {
        const { title, logo, image } = software
        const description = renderHTML(software.description)
        if (index % 2 == 0) {
          return (
            <Row gutter={[12, 12]} key={index}>
              <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <div className="koompi-os-apps paddingRight">
                  <img
                    src={`https://admin.koompi.com${logo}`}
                    alt=""
                    className="app-logo"
                  />
                  <h3 className="app-title">{title}</h3>
                  <div>{parse(description)}</div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                <div className="app-image">
                  <img
                    src={`https://admin.koompi.com${image}`}
                    alt={`KOOMPI ${title}`}
                    style={{ float: "right" }}
                  />
                </div>
              </Col>
            </Row>
          )
        } else {
          return (
            <Row gutter={[12, 12]} key={index}>
              <Col xs={24} sm={24} md={14} lg={14} xl={14} className="bigScreen">
                <div className="app-image">
                  <img
                    src={`https://admin.koompi.com${image}`}
                    alt={`KOOMPI ${title}`}
                    style={{ float: "left" }}
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <div className="koompi-os-apps paddingLeft">
                  <img
                    src={`https://admin.koompi.com${logo}`}
                    alt={`KOOMPI ${title}`}
                    className="app-logo"
                  />
                  <h3 className="app-title">{title}</h3>
                  <div>{parse(description)}</div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={14} lg={14} xl={14} className="smallDevice">
                <div className="app-image">
                  <img
                    src={`https://admin.koompi.com${image}`}
                    alt={`KOOMPI ${title}`}
                    style={{ float: "left" }}
                  />
                </div>
              </Col>
            </Row>
          )
        }
      })
    }
  }

  return (
    <div>
      <Navbar />
      <SubNavbar title="KOOMPI OS" />
      <div className="container">
        <div className="koompi-os-banner">
          <DisplayBanner />
        </div>
      </div>
      <div className="apps">
        <div className="container">
          <DisplaySoftware />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default KOOMPIOS
