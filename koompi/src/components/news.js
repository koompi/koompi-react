import React from "react"
import { Row, Col, Card, Tag, Spin } from "antd"
import Footer from "./footer"
import renderHTML from "./editorJsToHtml"
import NProgress from "nprogress"
import { GET_POSTS, GET_PAGES } from "./graphql/query"
import _ from "lodash"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import moment from "moment"
import { Link } from "react-router-dom"
import slugify from "slugify"
import { Helmet } from "react-helmet"

function News() {
  const DisplayNewsBanner = () => {
    const { error, loading, data } = useQuery(GET_PAGES)
    if (error) {
      console.log(error)
      return null
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
    const filterNews = _.filter(data.pages, (page) => page.category.slug === "news")

    NProgress.done()
    return filterNews.map((res, index) => {
      const { title, image, meta_desc } = res
      const description = renderHTML(res.description)

      return (
        <React.Fragment key={index}>
          <Helmet>
            <title>{title + " - KOOMPI"}</title>
            <meta name="keywords" content={res.keywords.map((res) => res + ",")} />
            <meta name="description" content={meta_desc} />
            <link rel="canonical" href="https://koompi.com/news-and-events" />
          </Helmet>
          <Row className="Row-news" gutter={16} type="flex">
            <Col xs={24} sm={24} ms={12} lg={12} xl={12}>
              <div className="news-and-events-banner-text">
                <h2 className="newsBannerTitle">{title}</h2>
                <div className="about-paragraph">{parse(description)}</div>
              </div>
            </Col>
            <Col xs={24} sm={24} ms={24} lg={12} xl={12}>
              <img
                style={{ maxWidth: "100%" }}
                src={`https://admin.koompi.com${image}`}
                alt={title}
              />
            </Col>
          </Row>
        </React.Fragment>
      )
    })
  }

  const { error, loading, data } = useQuery(GET_POSTS)
  if (error) {
    console.log(error)
    return null
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

  return (
    <React.Fragment>
      <div className="backgroud-news">
        <div className="container news-and-events-banner">
          <DisplayNewsBanner />
        </div>
      </div>
      <div style={{ marginTop: "90px", marginBottom: "50px" }} className="container">
        <Row gutter={24} type="flex">
          {data.posts.map((data, index) => {
            const { slug, title: categoryTitle } = data.category

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
                  <p className="postCategory">
                    <Link to={`/search?query=${slug}`}>
                      <Tag color="green">{categoryTitle}</Tag>
                    </Link>
                  </p>
                  <Link to={`/news-and-events/${slugify(data.title.toLowerCase())}`}>
                    <Card
                      cover={
                        <div
                          style={{
                            backgroundImage: `linear-gradient(rgba(8, 8, 8, 0.09), rgba(8, 8, 8, 0.09)),url("https://admin.koompi.com${data.thumnail}")`,
                          }}
                          className="postThumnail"
                        ></div>
                      }
                    >
                      <h1 className="news-and-events-title">
                        {data.title.substring(0, 40) + "..."}
                      </h1>
                      <p>
                        <Tag color="blue">
                          Date:{" "}
                          {moment
                            .unix(data.created_at / 1000)
                            .format("YYYY, MMMM DD")}
                        </Tag>
                      </p>

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

export default News
