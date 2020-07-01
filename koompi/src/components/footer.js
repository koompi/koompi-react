import React from "react"
import { Row, Col } from "antd"
import { NavLink } from "react-router-dom"

import { useQuery } from "@apollo/react-hooks"
import { GET_SOCAIL_MEDIA } from "./graphql/query"
import { useTranslation } from "react-i18next"

function Footer() {
  const { i18n } = useTranslation()
  const { error, loading, data } = useQuery(GET_SOCAIL_MEDIA)

  // Language Context
  const lang = i18n.language

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
              <h4>{lang === "en" ? "Legal" : "ច្បាប់"}</h4>
              <NavLink to="/legal/terms-and-conditions">
                <p>{lang === "en" ? "Terms & Conditions" : "ល័ក្ខខ័ណ្ឌ"}</p>
              </NavLink>
              {/* <NavLink to="">
                <p>License Agreement</p>
              </NavLink> */}
              <NavLink to="/legal/privacy">
                <p>{lang === "en" ? "Privacy Policy" : "គោលការណ៍​ភាព​ឯកជន"}</p>
              </NavLink>
              <NavLink to="/whitepaper/salespolicies">
                <p>{lang === "en" ? "Sale Policy" : "គោលនយោបាយលក់"}</p>
              </NavLink>
            </Col>

            <Col xs={12} sm={12} ms={6} lg={6} xl={6}>
              <h4>{lang === "en" ? "Information" : "ព័ត៌មាន"}</h4>
              <NavLink to="/news-and-events">
                <p>{lang === "en" ? "News and Event" : "ព័ត៌មាននិងព្រឹត្តិការណ៍"}</p>
              </NavLink>
              <NavLink to="/about-us">
                <p>{lang === "en" ? "About Us" : "អំពី​ពួក​យើង"}</p>
              </NavLink>

              <a
                href="https://github.com/koompi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>{lang === "en" ? "Become a contributor" : "ក្លាយជាអ្នកចូលរួម"}</p>
              </a>
              {/* <NavLink to="/shop/retailers">
                <p>Retailers</p>
              </NavLink> */}
            </Col>

            <Col xs={12} sm={12} ms={5} lg={5} xl={5}>
              <h4 className="footerMarginTop">{lang === "en" ? "Help" : "ជំនួយ"}</h4>
              <a
                href="https://t.me/koompi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{lang === "en" ? "Community" : "ក្រុមបច្ចេកទេស"}</p>
              </a>
              <a
                href="https://www.koompi.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{lang === "en" ? "User manual" : "ឯកសារជំនួយ"}</p>
              </a>
            </Col>
            <Col xs={24} sm={24} ms={7} lg={7} xl={7}>
              <h4 className="footerMarginTop">
                {lang === "en" ? "Connect With Us" : "ទំនាក់ទំនង"}
              </h4>
              <div className="footer_socail_media">
                <DisplaySocailMedia />
              </div>
              <br />

              <br />
              <p>
                {lang === "en"
                  ? "KOOMPI © 2020 All Rights Reserved"
                  : "KOOMPI © ២០២០ រក្សាសិទ្ធិគ្រប់យ៉ាង"}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <center>
        <div className="weaccept">
          <span>{lang === "en" ? "We accept" : "យើង​ទទួល"}</span>
          <img src="/img/payments/weaccept.png" height="35px" alt="we accept" />
        </div>
      </center>
    </div>
  )
}

export default Footer
