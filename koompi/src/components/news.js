import React from "react"
import { Row, Col, Card, Tag } from "antd"
import Footer from "./footer"
import NProgress from "nprogress"
import { GET_POSTS, GET_PAGES } from "./graphql/query"
import _ from "lodash"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import moment from "moment"
import { Link } from "react-router-dom"
import slugify from "slugify"
import { Helmet } from "react-helmet"
import ProgressiveImage from "react-progressive-image"
import { useTranslation } from "react-i18next"

function News() {
  const { i18n } = useTranslation()

  const DisplayNewsBanner = () => {
    // Language Context
    const lang = i18n.language
    const { error, loading, data } = useQuery(GET_PAGES, {
      variables: { lang },
    })
    if (error) {
      console.log(error)
      return null
    }
    if (loading) {
      NProgress.start()
      return null
    }
    const filterNews = _.filter(data.pages, (page) => page.category.slug === "news")

    NProgress.done()
    return filterNews.map((res, index) => {
      const { title, image } = res

      return (
        <React.Fragment key={index}>
          <Row className="Row-news" gutter={16}>
            <Col xs={24} sm={24} ms={12} lg={11} xl={11}>
              <div className="news-and-events-banner-text">
                <h2 className="newsBannerTitle">{title}</h2>
                <div
                  className={
                    lang === "kh"
                      ? "about-paragraph khmerLang"
                      : "about-paragraph enLang"
                  }
                >
                  {parse(res.description)}{" "}
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} ms={12} lg={13} xl={13}>
              <ProgressiveImage src={`https://admin.koompi.com${image}`}>
                {(src, loading) =>
                  loading ? (
                    <center>
                      <img
                        src="/img/loading.svg"
                        alt="koompi loading"
                        height="40px"
                      />
                    </center>
                  ) : (
                    <img style={{ maxWidth: "100%" }} src={src} alt={title} />
                  )
                }
              </ProgressiveImage>
            </Col>
          </Row>
        </React.Fragment>
      )
    })
  }

  const DisplayPostsData = () => {
    const { error, loading, data } = useQuery(GET_POSTS)
    if (error) {
      console.log(error)
      return null
    }
    if (loading) {
      NProgress.start()
      return (
        <React.Fragment>
          <Row className="Row-about" gutter={16}>
            <center>
              <img src="/img/loading.svg" alt="koompi loading" height="40px" />
            </center>
          </Row>
        </React.Fragment>
      )
    }

    NProgress.done()

    return (
      <div className="container" style={{ marginTop: "50px" }}>
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
                        {data.title.length > 40
                          ? data.title.substring(0, 40) + "..."
                          : data.title}
                      </h1>
                      <p className="dateTime">
                        Published:{" "}
                        {moment.unix(data.created_at / 1000).format("YYYY, MMMM DD")}
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
    )
  }

  return (
    <React.Fragment>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title data-react-helmet="true">News and Events - KOOMPI</title>
        <meta data-react-helmet="true" name="title" content="News and Events" />
        <meta
          data-react-helmet="true"
          name="description"
          content="KOOMPI is a practical, affordable and effective entry-level notebook computer specifically designed for performing all daily tasks required for work and school."
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
          content="News and Events"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="KOOMPI is a practical, affordable and effective entry-level notebook computer specifically designed for performing all daily tasks required for work and school."
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://admin.koompi.com/public/uploads/meta-news.jpg"
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
          content="News and Events"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="KOOMPI is a practical, affordable and effective entry-level notebook computer specifically designed for performing all daily tasks required for work and school."
        />
        <meta
          data-react-helmet="true"
          property="twitter:image"
          content="https://admin.koompi.com/public/uploads/meta-news.jpg"
        />
      </Helmet>
      <div className="backgroud-news">
        <div className="container news-and-events-banner">
          <DisplayNewsBanner />
        </div>
        <DisplayPostsData />
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default News
