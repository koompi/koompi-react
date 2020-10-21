import React from "react"
import { Tag, Spin, Row } from "antd"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { GET_POST } from "./graphql/query"
import moment from "moment"
import Footer from "./footer"
import { Helmet } from "react-helmet"

function SinglePage(props) {
  const { error, loading, data } = useQuery(GET_POST, {
    variables: { slug: props.location.pathname.split("/")[2] },
  })

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

  const { title, thumnail, created_at, meta_desc, description } = data.post

  return (
    <div>
      {/* All the Meta Tags */}
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>{title} - KOOMPI</title>
        <meta name="title" content={title + "- KOOMPI"} />
        <meta name="description" content={meta_desc} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.koompi.com" />
        <meta property="og:title" content={title + "- KOOMPI"} />
        <meta property="og:description" content={meta_desc} />
        <meta property="og:image" content={`https://admin.koompi.com${thumnail}`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.koompi.com" />
        <meta property="twitter:title" content={title + "- KOOMPI"} />
        <meta property="twitter:description" content={meta_desc} />
        <meta
          property="twitter:image"
          content={`https://admin.koompi.com${thumnail}`}
        />
      </Helmet>
      <div className="container">
        <div className="margin_single_page">
          <div className="background-single-page">
            {/* <img
              src={`https://admin.koompi.com${thumnail}`}
              alt={title}
              className="img-responsive single-image"
            /> */}
            <div
              style={{ backgroundImage: `url(https://admin.koompi.com${thumnail})` }}
              className="single-page-image"
            ></div>
            <div className="content-desc">
              <p>
                <Tag color="blue">
                  {moment.unix(created_at / 1000).format("YYYY-MM-DD HH:MM")}
                </Tag>
              </p>
              <h3 className="single-title">{title}</h3>
              <div>{parse(description)}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SinglePage
