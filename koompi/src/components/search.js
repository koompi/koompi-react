import React from "react"
import { Row, Col, Card, Tag, Spin } from "antd"
import NProgress from "nprogress"
import { SEARCH_POST } from "./graphql/query"
import { useQuery } from "@apollo/react-hooks"
import moment from "moment"
import { Link } from "react-router-dom"
import slugify from "slugify"
import Footer from "./footer"

const queryString = require("query-string")

function Search(props) {
  const parsed = queryString.parse(props.location.search)
  const result = parsed.query
  const { error, loading, data } = useQuery(SEARCH_POST, {
    variables: { query: slugify(result) }
  })
  if (error) {
    console.log(error)
    return null
  }
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

  return (
    <React.Fragment>
      <div className="container">
        <br />
        <br />
        <h2>Your Result: {result}</h2>
        <br />
        <br />
        <Row gutter={24}>
          {data.postSearch.map((data, index) => {
            return (
              // {`https://admin.koompi.com` + data.thumnail}
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                style={{ marginBottom: "24px" }}
                key={index}
              >
                <div className="cardHeight">
                  <Link to={`/news-and-events/${slugify(data.title.toLowerCase())}`}>
                    <Card
                      cover={
                        <div
                          style={{
                            backgroundImage: `url("https://admin.koompi.com${data.thumnail}")`
                          }}
                          className="postThumnail"
                        ></div>
                      }
                    >
                      <p>
                        <Tag color="blue">
                          Date:{" "}
                          {moment
                            .unix(data.created_at / 1000)
                            .format("YYYY, MMMM DD")}
                        </Tag>
                      </p>
                      <h1 className="news-and-events-title">
                        {data.title.substring(0, 40) + "..."}
                      </h1>

                      {/* <div className="news-and-events-desc">
                    {parse(description.substring(0, 200) + '...')}
                  </div> */}
                    </Card>
                  </Link>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Search
