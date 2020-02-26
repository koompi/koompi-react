import React, { useState, useContext, useEffect } from "react"
import { Row, Col, Icon, Result, Button, Spin } from "antd"
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

import { CartContext } from "../../CartContext"
import Helmet from "react-helmet"

function KoompiE13() {
  const cartCtx = useContext(CartContext)
  const [koompiColor, setKoompiColor] = useState(true)
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

  // ===== Chage KOOMPI Color =====
  const changeKoompiColor = () => setKoompiColor(!koompiColor)

  // ===== KOOMPI E Top Section  =====
  const DisplayKOOMPIE = ({ title, description, image }) => {
    return (
      <center>
        <h2 className="KoompiE11">{title}</h2>

        <div className="subTittle-E11">{description}</div>
        <h1 className="koompi-price">$369.00</h1>
        <Button
          className="koompiBtn"
          onClick={() =>
            cartCtx.addToCart({
              name: title.toUpperCase(),
              price: 369,
              image: imageLink + image
            })
          }
        >
          Add To Cart <Icon type="arrow-right" />
        </Button>
        <img
          className="banner-overview-koompiE11"
          src={imageLink + image}
          alt={title}
        />
      </center>
    )
  }

  // ===== KOOMPI E Screen Section  =====
  const DisplayScreen = ({ title, subTitle, description, image }) => {
    return (
      <>
        <div className="koompi-page-container">
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
        <div className="koompi-e-background">
          <img className="banner-overview-koompiE11" src={image} alt={title} />
        </div>
      </>
    )
  }

  // ===== KOOMPI E Shapeliness Section  =====
  const DisplayShapeliness = ({ title, subTitle, description }) => {
    return (
      <>
        <div className="koompi-page-container">
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
        <div className="container">
          <div className="switch_laptop">
            <img
              className="banner-overview-koompiE11"
              // style={koompiColor ? null : { opacity: 0.5 }}
              src={
                koompiColor
                  ? "/img/koompi-e/koompi-gray.png"
                  : "/img/koompi-e/koompi-rose-gold.png"
              }
              alt={title}
            />
          </div>
          <div className="switch-koompi-container">
            <Row gutter={16}>
              <Col span={12}>
                <center>
                  <div className="speceGrayCircle" onClick={changeKoompiColor}></div>
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
    )
  }

  // ===== KOOMPI E Batter Section  =====
  const DisplayBattery = ({ subTitle, title, description, image }) => {
    return (
      <>
        <div className="koompi-page-container">
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
        <div className="container">
          <Row gutter={16}>
            <Col span={4}>{/* Charger Image */}</Col>
            <Col span={20}>
              <img
                className="banner-overview-koompiE11"
                src={imageLink + image}
                alt={title}
              />
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
        <div className="koompi-page-container">
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
        <div className="container">
          <img
            className="banner-overview-koompiE11"
            src={imageLink + image}
            alt={title}
          />
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
          <div className="koompi-page-container" key={index}>
            <div className="koompiDetail">
              <DisplayKOOMPIE
                title={data.title}
                description={parse(description)}
                image={data.image}
              />
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
      </Helmet>
      <div>
        <SubNavbar title="KOOMPI E13" />
        <div className="background-color-Koompi-E">
          <div className="area">
            <ul className="circles">
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

          <DisplayData />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default KoompiE13
