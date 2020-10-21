import React, { useState, useEffect } from "react"
import { Row, Col, Layout } from "antd"

import LeftNavbar from "./navbar/left-navbar"
import TopNavbar from "./navbar/top-navbar"
import PageFooter from "./footer"
import { useQuery } from "@apollo/react-hooks"
import { UserTotal, TotalPost, TotalPage, TotalRetailer } from "./data/admin"
import { GET_USERS, GET_POSTS, GET_PAGES, GET_RETAILERS } from "../graphql/query"
import three_dots from "../assets/img/three-dots-black.svg"

import Chart from "react-apexcharts"
import moment from "moment"

const { Content } = Layout

function Admin() {
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1580871334388, 1580799414274, 1580377941997],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45],
      },
    ],
  })

  const UserTotal = () => {
    const { error, loading, data } = useQuery(GET_USERS)
    if (loading) {
      return (
        <center>
          <img src={three_dots} alt="btn-loading" height="12" />
        </center>
      )
    }
    if (error) console.log(error)
    if (data) {
      console.log(
        "Data",
        data.users.sort(function (o) {
          return moment(o.created_at).unix()
        })
      )

      return (
        <div>
          <center>
            <span className="adminFirstSectionFont">
              <b>{data.users.length}</b> users
            </span>
          </center>
        </div>
      )
    }
  }

  // const { error, loading, data } = useQuery(GET_POSTS);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* =========Left Navbar ======= */}
      <LeftNavbar />
      <Layout>
        <Content>
          {/* =========Top Navbar ======= */}
          <TopNavbar />

          <div style={{ padding: "0px 50px " }}>
            {/* ======= Display content ====== */}
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img
                      src="/images/icons/User.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <UserTotal />
                </div>
              </Col>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img
                      src="/images/icons/Post.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <TotalPost />
                </div>
              </Col>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img
                      src="/images/icons/Page.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <TotalPage />
                </div>
              </Col>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img
                      src="/images/icons/Retailers.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <TotalRetailer />
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="card_back_content">
                  <center>
                    <img src="/images/coursenotfound.gif" height="400px" alt="" />
                  </center>
                </div>
              </Col>
              {/* <Col span={8}>
                <div className="card_back">
                  <Chart
                    series={chart.series}
                    options={chart.options}
                    type="bar"
                  ></Chart>
                </div>
              </Col>
              <Col span={8}>
                <div className="card_back">
                  <Chart
                    series={chart.series}
                    options={chart.options}
                    type="area"
                  ></Chart>
                </div>
              </Col> */}
            </Row>
          </div>

          <div></div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Admin
