import React, { useEffect, useState } from "react"
import { Row, Col, Spin } from "antd"
import Footer from "../footer"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { GET_MEMBERS, GET_PAGES } from "../graphql/query"
import _ from "lodash"
import Img from "react-image"
import { Helmet } from "react-helmet"
import { FaCode } from "react-icons/fa"
import SeenOn from "./seen-on"

const aboutData = [
  {
    id: 1,
    logo: "/img/about/mission.png",
    color: "#0543b2",
    title: "Mission",
    desc: ` <p>KOOMPI was created with an ambitious mission, to build tools for and to create the next generation of engineers, problem solvers, and discoverers. </p>
    <p>We aim to satisfy your individual needs while offering the best and most convenient tools for everyone.</p> `,
  },
  {
    id: 2,
    logo: "/img/about/vision.png",
    color: "#7f009e",
    title: "Vision",
    desc: ` <p>The world is moving forward into advanced technology-based infrastructures. We see that a lot of demands can be tackled with the help of technology.</p>
    <p>Producing strong engineers would help contribute strongly to build the tools that can match with the fast-paced digital future.</p>`,
  },
  {
    id: 3,
    logo: "/img/about/history.png",
    color: "#048011",
    title: "The History",
    desc: ` <p>The story begain with a group of technology-enthusiastic people who want to win the heart of the nation with humbleness and hard work.</p>
    <p>Inspired by an ancient book called គម្ពីរ known as BOOK OF KNOWLEDGE, KOOMPI wants to connect people to the world of computing and to be remembered as a tool for education.</p> `,
  },
  {
    id: 4,
    logo: "/img/about/who-we-are.png",
    color: "#333333",
    title: "What We Are ",
    desc: `<p>KOOMPI is a practical, affordable and effective entry-level notebook computer specifically designed for performing all daily tasks required for work and school.</p>
    <p>We've created a customized operating system of our own called KOOMPI OS based on the well-known open-source Linux software.</p>
    <p>Both our philosophy and software selections provide a perfect fit with the sleek and practical KOOMPI hardware. Our integrated software suite allows KOOMPI users to challenge themselves as they explore their own personal world of computing.</p> `,
  },
]

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [readMore, setReadMore] = useState(0)

  const DisplayAboutData = () => {
    return aboutData.map((res, index) => {
      return (
        <Col xs={24} sm={24} md={12} lg={6} xl={6} key={index}>
          <div
            className="about-card"
            style={{
              borderTop: `5px solid ${res.color}`,
            }}
          >
            <center>
              <Img
                className="memberPhoto"
                alt={res.title}
                src={res.logo}
                loader={
                  <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                }
              />
              <h2 className="about-card-title" style={{ color: `${res.color}` }}>
                {res.title}
              </h2>
            </center>
            <div className="about-card-desc">
              {readMore === index
                ? parse(res.desc)
                : parse(`${res.desc.substring(0, 90)}...`)}
              {readMore === index ? null : (
                <span
                  onClick={() => {
                    setReadMore(index)
                  }}
                  className="readMoreBack"
                  style={{ backgroundColor: `${res.color}` }}
                >
                  Read More
                </span>
              )}
            </div>
          </div>
        </Col>
      )
    })
  }

  // const DisplayTeamwork = () => {
  //   const { error, loading, data } = useQuery(GET_MEMBERS)
  //   if (error) console.log(error)
  //   if (loading) return null
  //   NProgress.done()

  //   const businessDevelopment = _.filter(
  //     data.members,
  //     (member) => member.department === "business-development"
  //   )
  //   const software = _.filter(
  //     data.members,
  //     (member) => member.department === "software-team"
  //   )
  //   const hardware = _.filter(
  //     data.members,
  //     (member) => member.department === "hardware-team"
  //   )
  //   const communication = _.filter(
  //     data.members,
  //     (member) => member.department === "communication-and-marketing"
  //   )
  //   const sales = _.filter(
  //     data.members,
  //     (member) => member.department === "sales-and-supplier-relation"
  //   )
  //   const koompiAcademy = _.filter(
  //     data.members,
  //     (member) => member.department === "academy"
  //   )

  //   return (
  //     <div className="container">
  //       <center>
  //         <h2 className="teamMember">Team Member</h2>
  //       </center>
  //       {/* ===== Business Development ===== */}
  //       <h2 className="teamDepartment">
  //         <FaCode style={{ marginRight: "10px" }} />
  //         Business Development
  //       </h2>
  //       <Row gutter={16} type="flex">
  //         {businessDevelopment.map((member, index) => {
  //           return (
  //             <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
  //               <center>
  //                 <Img
  //                   className="memberPhoto"
  //                   src={`https://admin.koompi.com` + member.photo}
  //                   alt={member.fullname}
  //                   loader={
  //                     <Img className="memberPhotoBlur" src="/img/blur-image.png" />
  //                   }
  //                 />
  //               </center>
  //               <center>
  //                 <h3 className="memberName">{member.fullname}</h3>
  //                 <p className="memberPosition">{member.position}</p>
  //               </center>
  //             </Col>
  //           )
  //         })}
  //       </Row>

  //       {/* ===== Hardware Team ===== */}
  //       <h2 className="teamDepartment">
  //         <FaCode style={{ marginRight: "10px" }} />
  //         Hardware Teams
  //       </h2>
  //       <Row gutter={16} type="flex">
  //         {hardware.map((member, index) => {
  //           return (
  //             <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
  //               <center>
  //                 <Img
  //                   className="memberPhoto"
  //                   alt={member.fullname}
  //                   src={`https://admin.koompi.com` + member.photo}
  //                   loader={
  //                     <Img className="memberPhotoBlur" src="/img/blur-image.png" />
  //                   }
  //                 />
  //               </center>
  //               <center>
  //                 <h3 className="memberName">{member.fullname}</h3>
  //                 <p className="memberPosition">{member.position}</p>
  //               </center>
  //             </Col>
  //           )
  //         })}
  //       </Row>

  //       {/* ===== KOOMPI ACADEMY Team ===== */}
  //       <h2 className="teamDepartment">
  //         <FaCode style={{ marginRight: "10px" }} />
  //         KOOMPI ACADEMY
  //       </h2>
  //       <Row gutter={16} type="flex">
  //         {koompiAcademy.map((member, index) => {
  //           return (
  //             <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
  //               <center>
  //                 <Img
  //                   className="memberPhoto"
  //                   alt={member.fullname}
  //                   src={`https://admin.koompi.com` + member.photo}
  //                   loader={
  //                     <Img className="memberPhotoBlur" src="/img/blur-image.png" />
  //                   }
  //                 />
  //               </center>
  //               <center>
  //                 <h3 className="memberName">{member.fullname}</h3>
  //                 <p className="memberPosition">{member.position}</p>
  //               </center>
  //             </Col>
  //           )
  //         })}
  //       </Row>

  //       {/* ===== Sales and Supplier Relation Team ===== */}
  //       <h2 className="teamDepartment">
  //         <FaCode style={{ marginRight: "10px" }} />
  //         Sales and Supplier Relation
  //       </h2>
  //       <Row gutter={16} type="flex">
  //         {sales.map((member, index) => {
  //           return (
  //             <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
  //               <center>
  //                 <Img
  //                   className="memberPhoto"
  //                   alt={member.fullname}
  //                   src={`https://admin.koompi.com` + member.photo}
  //                   loader={
  //                     <Img className="memberPhotoBlur" src="/img/blur-image.png" />
  //                   }
  //                 />
  //               </center>
  //               <center>
  //                 <h3 className="memberName">{member.fullname}</h3>
  //                 <p className="memberPosition">{member.position}</p>
  //               </center>
  //             </Col>
  //           )
  //         })}
  //       </Row>

  //       {/* ===== Communication Team ===== */}
  //       <h2 className="teamDepartment">
  //         <FaCode style={{ marginRight: "10px" }} />
  //         Communication and Marketing
  //       </h2>
  //       <Row gutter={16} type="flex">
  //         {communication.map((member, index) => {
  //           return (
  //             <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
  //               <center>
  //                 <Img
  //                   className="memberPhoto"
  //                   alt={member.fullname}
  //                   src={`https://admin.koompi.com` + member.photo}
  //                   loader={
  //                     <Img className="memberPhotoBlur" src="/img/blur-image.png" />
  //                   }
  //                 />
  //               </center>
  //               <center>
  //                 <h3 className="memberName">{member.fullname}</h3>
  //                 <p className="memberPosition">{member.position}</p>
  //               </center>
  //             </Col>
  //           )
  //         })}
  //       </Row>

  //       {/* ===== Software Development ===== */}
  //       <h2 className="teamDepartment">
  //         <FaCode style={{ marginRight: "10px" }} />
  //         Software Teams
  //       </h2>
  //       <Row gutter={16} type="flex">
  //         {software.map((member, index) => {
  //           return (
  //             <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
  //               <center>
  //                 <Img
  //                   className="memberPhoto"
  //                   alt={member.fullname}
  //                   src={`https://admin.koompi.com` + member.photo}
  //                   loader={
  //                     <Img className="memberPhotoBlur" src="/img/blur-image.png" />
  //                   }
  //                 />
  //               </center>
  //               <center>
  //                 <h3 className="memberName">{member.fullname}</h3>
  //                 <p className="memberPosition">{member.position}</p>
  //               </center>
  //             </Col>
  //           )
  //         })}
  //       </Row>
  //     </div>
  //   )
  // }

  const DisplayTeamwork = () => {
    const { error, loading, data } = useQuery(GET_MEMBERS)
    if (error) console.log(error)
    if (loading) return null
    NProgress.done()
    console.log(data)

    return (
      <div className="container">
        <center>
          <h2 className="teamMember">Team Member</h2>
        </center>
        <Row gutter={16} type="flex">
          {data.members.map((member, index) => {
            return (
              <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                <center>
                  <Img
                    className="memberPhoto"
                    alt={member.fullname}
                    src={`https://admin.koompi.com` + member.photo}
                    loader={
                      <Img className="memberPhotoBlur" src="/img/blur-image.png" />
                    }
                  />
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p className="memberPosition">{member.position}</p>
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
      return (
        // <div className="aboutBannerHeight">
        <React.Fragment>
          <div
            className="aboutBanner"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.79)),url("/img/team.jpg")`,
            }}
          >
            <div className="container-banner-about">
              <Row className="Row-about" gutter={24} key={index}>
                <Col sm={24}>
                  <h3 className="about-us-title">About Us</h3>
                  {/* <div className="aboutPosition">{parse(description)}</div> */}
                </Col>
              </Row>
            </div>
          </div>

          <div className="container">
            <div className="line-about">
              <img
                src="/img/about/about-line.png"
                alt="koompi about us page"
                className="img-responsive xs-hidden"
              />
            </div>
            <Row gutter={[24, 24]} className="card-margin">
              <DisplayAboutData />
            </Row>
          </div>
        </React.Fragment>
      )
    })
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us- KOOMPI</title>
        <meta
          name="keywords"
          content="koompi, koompi.com, www.koompi.com, https://koompi.com/about-us, koompi-us, about koompi, about us"
        />
        <meta
          name="description"
          content="KOOMPI was created with an ambitious mission, to build tools for and to create the next generation of engineers, problem solvers, and discoverers. "
        />
        <link rel="canonical" href="https://koompi.com/about-us" />
      </Helmet>
      <div>
        <DisplayAboutUs />

        <div>
          <DisplayTeamwork />
        </div>
        <SeenOn />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About
