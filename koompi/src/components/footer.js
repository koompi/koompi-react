import React from "react"
import { Row, Col } from "antd"
import { Link } from "react-router-dom"

import { useQuery } from "@apollo/react-hooks"
import { GET_SOCAIL_MEDIA } from "./graphql/query"

function Footer() {
  const { error, loading, data } = useQuery(GET_SOCAIL_MEDIA)
  if (error) console.log("error")
  if (loading) return "Loading ..."

  const DisplaySocailMedia = () => {
    return data.socailMedia.map((res, index) => {
      return (
        <a
          href={`${res.link}`}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <img src={`https://admin.koompi.com` + res.logo} alt={res.name} />
        </a>
      )
    })
  }

  return (
    <div>
      <div className="footerBackground">
        <center>
          <img
            className="koompi-footer-logo"
            src="/img/Koompi-White.png"
            alt="koompi"
          />
        </center>

        <div className="footer-container">
          <p className="copyRight">
            Copyright © 2019-2020.<br></br> A brainchild of{" "}
            <a
              href="https://smallworldventure.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              SmallWorld Venture
            </a>
          </p>
          <Row gutter={16} type="flex" className="footerPMagin">
            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4>Legal</h4>
              <Link to="">
                <p>Terms & Conditions</p>
              </Link>
              <Link to="">
                <p>License Agreement</p>
              </Link>
              <Link to="/legal/privacy">
                <p>Privacy Policy</p>
              </Link>
              <Link to="/whitepaper/salespolicies">
                <p>Sale Policy</p>
              </Link>
            </Col>

            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4>Information</h4>
              <Link to="/news-and-events">
                <p>News and Event</p>
              </Link>
              <Link to="/about-us">
                <p>About Us</p>
              </Link>

              <a
                href="https://github.com/koompi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>Become a contributor</p>
              </a>
              <Link to="/shop/retailers">
                <p>Retailers</p>
              </Link>
            </Col>

            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4 className="footerMarginTop">Help</h4>
              <Link to="">
                <p>Support</p>
              </Link>
              <Link to="">
                <p>Contact Us</p>
              </Link>
            </Col>
            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4 className="footerMarginTop">Connect With Us</h4>
              <div className="footer_socail_media">
                <DisplaySocailMedia />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-project">
        <div className="footer-container">
          <Row gutter={12}>
            <Col span={6}>
              <p className="koompiProjectTitle"> KOOMPI Products</p>
            </Col>
            <Col span={18} className="koompiProjects">
              <a
                href="https://academy.koompi.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                KOOMPI ACADEMY
              </a>
              <Link to="/koompi-os">KOOMPI OS</Link>

              <Link to="/koompi-e13">KOOMPI E13</Link>
              {/* <Link to="koompi-e11">KOOMPI E11</Link> */}
              {/* <Link to="">KOOMPI B14</Link> */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Footer
