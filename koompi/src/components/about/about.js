import React, { useEffect } from "react"
import { Row, Col } from "antd"
import Footer from "../footer"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { GET_MEMBERS } from "../graphql/query"
import Img from "react-image"
import { Helmet } from "react-helmet"
import SeenOn from "./seen-on"
import { Link } from "react-router-dom"

const lang = window.localStorage.getItem("i18nextLng")

const aboutData = [
  {
    id: 1,
    logo: "/img/about/mission.png",
    color: "#0543b2",
    title: "Mission",
    khTitle: "បេសកម្ម",
    desc: ` <p>Building tools and providing resources for the next generation of innovators.</p> `,
    khdesc: `<p>បង្កើត ឧបករណ៍ និង ផ្តល់ ធនធាន សម្រាប់ អ្នក ច្នៃប្រឌិត ជំនាន់ ថ្មី។</p>`,
  },
  {
    id: 2,
    logo: "/img/about/vision.png",
    color: "#7f009e",
    title: "Vision",
    khTitle: "ចក្ខុវិស័យ",
    desc: ` <p>Unlocking our unlimited capacity for self-directed learning through encouraging curiosity, flexibility, and creative imagination.</p>`,
    khdesc: `<p>ការ ដោះសោសមត្ថភាព ដែល គ្មាន ដែន កំណត់ របស់ យើង សម្រាប់ ការរៀន សូត្រ ដោយ ខ្លួន ឯង តាម រយៈ ការ លើក ទឹក ចិត្ត ចង់ដឹង ចង់ឃើញ ភាព បត់បែន និង ការស្រមើល ស្រមៃ ច្នៃប្រឌិត។</p>`,
  },
  {
    id: 3,
    logo: "/img/about/history.png",
    color: "#048011",
    title: "History",
    khTitle: "ប្រវត្តិសាស្រ្ត",
    desc: ` <p>KOOMPI began with a vision of creating equal learning opportunities for students unable to afford an internet enabled computer of their own.</p>`,
    khdesc: `<p>គម្ពីរ បានចាប់ផ្តើម ជាមួយនឹង ទស្សនៈ នៃការបង្កើត ឱកាសរៀនស្មើៗ គ្នាសម្រាប់ និស្សិតដែល មិនអាច មានលទ្ធភាព ទិញកុំព្យូទ័រ ដែលអាច ប្រើអ៊ិនធឺរណែត ដោយខ្លួនឯងបាន។</p>`,
  },
  // {
  //   id: 4,
  //   logo: "/img/about/who-we-are.png",
  //   color: "#333333",
  //   title: "What We Are ",
  //   desc: `<p>KOOMPI is a practical, affordable and effective entry-level notebook computer specifically designed for performing all daily tasks required for work and school.</p>
  //   <p>We've created a customized operating system of our own called KOOMPI OS based on the well-known open-source Linux software.</p>
  //   <p>Both our philosophy and software selections provide a perfect fit with the sleek and practical KOOMPI hardware. Our integrated software suite allows KOOMPI users to challenge themselves as they explore their own personal world of computing.</p> `,
  // },
]

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const DisplayAboutData = () => {
    return aboutData.map((res, index) => {
      return (
        <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index}>
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
                <div className={lang === "en" ? "enLang" : "khmerLang"}>
                  {lang === "en" ? res.title : res.khTitle}
                </div>
              </h2>
            </center>
            <div className="about-card-desc">
              <div className={lang === "en" ? "enLang" : "khmerLang"}>
                {lang === "en" ? parse(res.desc) : parse(res.khdesc)}
              </div>

              {res.id === 3 && (
                <Link to="/">
                  <span
                    className="readMoreBack"
                    style={{ backgroundColor: `${res.color}` }}
                  >
                    Read More
                  </span>
                </Link>
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

    return (
      <div className="container">
        <center>
          <h2 className="teamMember">
            {lang === "en" ? "Team Member" : "សមាជិក​ក្រុម"}
          </h2>
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

  return (
    <React.Fragment>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title data-react-helmet="true">About Us - KOOMPI </title>
        <meta data-react-helmet="true" name="title" content="About Us - KOOMPI" />
        <meta
          data-react-helmet="true"
          name="description"
          content="KOOMPI building tools and providing resources for the next generation of innovators."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://www.koompi.com"
        />
        <meta
          data-react-helmet="true"
          property="og:title"
          content="About Us - KOOMPI"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="KOOMPI building tools and providing resources for the next generation of innovators."
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://admin.koompi.com/public/uploads/meta-about-us.jpg"
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
        <meta
          data-react-helmet="true"
          property="twitter:title"
          content="About Us-KOOMPI"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="KOOMPI building tools and providing resources for the next generation of innovators."
        />
        <meta
          data-react-helmet="true"
          property="twitter:image"
          content="https://admin.koompi.com/public/uploads/meta-about-us.jpg"
        />
      </Helmet>
      <div>
        {/* <DisplayAboutUs /> */}
        <React.Fragment>
          <div
            className="aboutBanner"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.79)),url("/img/team.jpg")`,
            }}
          >
            <div className="container-banner-about">
              <Row className="Row-about" gutter={24}>
                <Col sm={24}>
                  <h3 className="about-us-title">
                    {lang === "en" ? "KOOMPI" : "គម្ពីរ"}
                  </h3>
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
            <section>
              <center>
                <div className="aboutUsContent">
                  <h2 className="aboutUs">
                    {lang === "en" ? "About Us" : "អំពីពួកយើង"}
                  </h2>

                  {lang === "en" && (
                    <React.Fragment>
                      <p>
                        KOOMPI, together with KOOMPI OS, are value-added learning and
                        productivity tools built upon the acclaimed Linux operating
                        system.
                      </p>
                      <p>
                        KOOMPI OS includes a wide variety of custom applications
                        designed and supported to meet the needs of students and
                        employees.
                      </p>
                    </React.Fragment>
                  )}
                  {lang === "kh" && (
                    <React.Fragment>
                      <p>
                        KOOMPI រួមជាមួយ KOOMPI OS គឺជាឧបករណ៍ បន្ថែមតម្លៃសិក្សា
                        និងផលិតភាពដែល បានបង្កើតឡើង នៅលើ ប្រព័ន្ធប្រតិបត្តិការ លីនុច
                        ដែលមានការទទួលស្គាល់។
                      </p>
                      <p>
                        KOOMPI OS រួមបញ្ចូល នូវកម្មវិធី ផ្ទាល់ខ្លួន ជាច្រើន ដែលត្រូវ
                        បានរចនា និងគាំទ្រ ដើម្បីបំពេញ តំរូវការ របស់និស្សិត និង
                        និយោជិក។
                      </p>
                    </React.Fragment>
                  )}
                </div>
              </center>
            </section>
          </div>
        </React.Fragment>

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
