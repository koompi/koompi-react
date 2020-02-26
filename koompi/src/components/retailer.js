import React from "react"
import { Row, Col, Typography, Card, Button, Spin } from "antd"
import Footer from "./footer"
import _ from "lodash"
import { useQuery } from "@apollo/react-hooks"
import NProgress from "nprogress"
import { GET_RETAILERS } from "./graphql/query"
import { Link } from "react-router-dom"

const { Title } = Typography

function Retailer() {
  const randomImage = [
    "/img/svg-img/01.svg",
    "/img/svg-img/02.svg",
    "/img/svg-img/03.svg",
    "/img/svg-img/04.svg",
    "/img/svg-img/05.svg",
    "/img/svg-img/06.svg"
  ]

  const { error, loading, data } = useQuery(GET_RETAILERS)

  if (error) console.log(error)
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

  return (
    <React.Fragment>
      <div className="boss-banner-retailer">
        <div className="container">
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h2 className="title-retailer-banner">GET KOOMPI</h2>
              <p>
                We aim to satisfy your individual needs while offering the best and
                most convenient tools for everyone.<br></br>
                <br></br> Take this opportunity to engage and interact with the
                KOOMPI wherever you are.<br></br>
                <br></br> Test drive a new KOOMPI from any of our retail partners
                listed below:
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {/* <img
                style={{ maxWidth: '100%' }}
                src="/img/Koompi_Retailer.png"
              /> */}
            </Col>
          </Row>

          <center>
            <h1 className="ourRetailers">
              <b>Our Retailers</b>
            </h1>

            <div>
              <Row gutter={24} type="flex">
                {data.retailers.map((res, index) => {
                  return (
                    <Col
                      xs={24}
                      sm={12}
                      md={12}
                      lg={6}
                      xl={6}
                      style={{ marginBottom: "24px", height: "100%" }}
                      key={index}
                    >
                      <div
                        className="cardBackground"
                        style={{
                          backgroundImage: `url(${
                            randomImage[_.random(randomImage.length - 1)]
                          })`
                        }}
                      ></div>
                      <Card
                        hoverable
                        cover={
                          <img
                            className="retailers-logo"
                            alt="example"
                            src={`https://admin.koompi.com` + res.logo}
                          />
                        }
                      >
                        <center>
                          <Title level={4} className="retailers-title">
                            {res.name}
                          </Title>
                          <Link to={res.location}>
                            <Button className="shopHere">Shop Here</Button>
                          </Link>
                        </center>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
              <br />
            </div>
          </center>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default Retailer
