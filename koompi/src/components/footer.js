import React from "react"
import { Row, Col } from "antd"
import { NavLink } from "react-router-dom"

import { useQuery } from "@apollo/react-hooks"
import { GET_SOCAIL_MEDIA } from "./graphql/query"

function Footer() {
  const { error, loading, data } = useQuery(GET_SOCAIL_MEDIA)
  if (error) console.log("error")
  if (loading) return ""

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
        <div className="footer-container">
          <Row gutter={16} type="flex" className="footerPMagin">
            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4>Legal</h4>
              <NavLink to="/legal/terms-and-conditions">
                <p>Terms & Conditions</p>
              </NavLink>
              {/* <NavLink to="">
                <p>License Agreement</p>
              </NavLink> */}
              <NavLink to="/legal/privacy">
                <p>Privacy Policy</p>
              </NavLink>
              <NavLink to="/whitepaper/salespolicies">
                <p>Sale Policy</p>
              </NavLink>
            </Col>

            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4>Information</h4>
              <NavLink to="/news-and-events">
                <p>News and Event</p>
              </NavLink>
              <NavLink to="/about-us">
                <p>About Us</p>
              </NavLink>

              <a
                href="https://github.com/koompi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>Become a contributor</p>
              </a>
              {/* <NavLink to="/shop/retailers">
                <p>Retailers</p>
              </NavLink> */}
            </Col>

            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4 className="footerMarginTop">Help</h4>
              <NavLink to="">
                <p>Support</p>
              </NavLink>
              {/* <NavLink to="">
                <p>Contact Us</p>
              </NavLink> */}
            </Col>
            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4 className="footerMarginTop">Connect With Us</h4>
              <div className="footer_socail_media">
                <DisplaySocailMedia />
              </div>
              <br />

              <br />
              <p>© 2020 KOOMPI All Rights Reserved </p>
            </Col>
          </Row>
        </div>
      </div>
      <center>
        <div className="weaccept">
          <span>We accept</span>
          <img src="/img/payments/weaccept.png" height="35px" alt="we accept" />
        </div>
      </center>
    </div>
  )
}

export default Footer
