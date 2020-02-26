import React, { useEffect } from "react"
import { Row, Col, Icon, Spin } from "antd"
import Footer from "./footer"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import renderHTML from "./editorJsToHtml"
import NProgress from "nprogress"
import { GET_MEMBERS, GET_PAGES } from "./graphql/query"
import _ from "lodash"
import Img from "react-image"

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const DisplayTeamwork = () => {
    const { error, loading, data } = useQuery(GET_MEMBERS)
    if (error) console.log(error)
    if (loading) {
      NProgress.start()
      return (
        <Row className="Row-about" gutter={24}>
          <center>
            <Spin tip="Loading ..."></Spin>
          </center>
        </Row>
      )
    }
    NProgress.done()

    const businessDevelopment = _.filter(
      data.members,
      (member) => member.department === "business-development"
    )
    const software = _.filter(
      data.members,
      (member) => member.department === "software-team"
    )
    const hardware = _.filter(
      data.members,
      (member) => member.department === "hardware-team"
    )
    const communication = _.filter(
      data.members,
      (member) => member.department === "communication-and-marketing"
    )
    const sales = _.filter(
      data.members,
      (member) => member.department === "sales-and-supplier-relation"
    )
    const koompiAcademy = _.filter(
      data.members,
      (member) => member.department === "academy"
    )

    return (
      <div className="container">
        {/* ===== Business Development ===== */}
        <h2 className="teamDepartment">
          <Icon type="double-right" style={{ marginRight: "10px" }} />
          Business Development
        </h2>
        <Row gutter={16} type="flex">
          {businessDevelopment.map((member, index) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                <center>
                  <Img
                    className="memberPhoto"
                    src={`https://admin.koompi.com` + member.photo}
                    loader={
                      <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                    }
                  />
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            )
          })}
        </Row>

        {/* ===== Hardware Team ===== */}
        <h2 className="teamDepartment">
          <Icon type="double-right" style={{ marginRight: "10px" }} />
          Hardware Teams
        </h2>
        <Row gutter={16} type="flex">
          {hardware.map((member, index) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                <center>
                  <Img
                    className="memberPhoto"
                    src={`https://admin.koompi.com` + member.photo}
                    loader={
                      <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                    }
                  />
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            )
          })}
        </Row>

        {/* ===== KOOMPI ACADEMY Team ===== */}
        <h2 className="teamDepartment">
          <Icon type="double-right" style={{ marginRight: "10px" }} />
          KOOMPI ACADEMY
        </h2>
        <Row gutter={16} type="flex">
          {koompiAcademy.map((member, index) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                <center>
                  <Img
                    className="memberPhoto"
                    src={`https://admin.koompi.com` + member.photo}
                    loader={
                      <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                    }
                  />
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            )
          })}
        </Row>

        {/* ===== Sales and Supplier Relation Team ===== */}
        <h2 className="teamDepartment">
          <Icon type="double-right" style={{ marginRight: "10px" }} />
          Sales and Supplier Relation
        </h2>
        <Row gutter={16} type="flex">
          {sales.map((member, index) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                <center>
                  <Img
                    className="memberPhoto"
                    src={`https://admin.koompi.com` + member.photo}
                    loader={
                      <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                    }
                  />
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            )
          })}
        </Row>

        {/* ===== Communication Team ===== */}
        <h2 className="teamDepartment">
          <Icon type="double-right" style={{ marginRight: "10px" }} />
          Communication and Marketing
        </h2>
        <Row gutter={16} type="flex">
          {communication.map((member, index) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                <center>
                  <Img
                    className="memberPhoto"
                    src={`https://admin.koompi.com` + member.photo}
                    loader={
                      <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                    }
                  />
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            )
          })}
        </Row>

        {/* ===== Software Development ===== */}
        <h2 className="teamDepartment">
          <Icon type="double-right" style={{ marginRight: "10px" }} />
          Software Teams
        </h2>
        <Row gutter={16} type="flex">
          {software.map((member, index) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                <center>
                  <Img
                    className="memberPhoto"
                    src={`https://admin.koompi.com` + member.photo}
                    loader={
                      <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                    }
                  />
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }

  const DisplayAboutUs = () => {
    const { error, loading, data } = useQuery(GET_PAGES)
    if (error) console.log(error)
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
    const onlyAboutUs = _.filter(
      data.pages,
      (page) => page.category.slug === "about-us"
    )

    return onlyAboutUs.map((about, index) => {
      const description = renderHTML(about.description)
      return (
        <Row className="Row-about" gutter={24} key={index}>
          <Col sm={12}>
            <div className="aboutPosition">{parse(description)}</div>
          </Col>
          <Col sm={12}>
            <Img
              src={`https://admin.koompi.com` + about.image}
              className="aboutBannerImg"
              alt={about.title}
            />
          </Col>
        </Row>
      )
    })
  }

  return (
    <React.Fragment>
      <div className="backgroud-about">
        <div className="container" style={{ position: "relative" }}>
          <DisplayAboutUs />
        </div>

        <div>
          <center>
            <h2 className="teamMember">Team Member</h2>
          </center>
          <DisplayTeamwork />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About
