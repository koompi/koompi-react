import React from "react"
import { Tag, Spin, Row } from "antd"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { GET_POST } from "./graphql/query"
import moment from "moment"
import renderHTML from "./editorJsToHtml"
import Footer from "./footer"
import { Helmet } from "react-helmet"

function SinglePage(props) {
  const { error, loading, data } = useQuery(GET_POST, {
    variables: { slug: props.location.pathname.split("/")[2] }
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

  const { title, thumnail, created_at, keywords, meta_desc } = data.post
  const description = renderHTML(data.post.description)

  return (
    <div>
      {/* All the Meta Tags */}
      <Helmet>
        <meta property="og:url" content={window.location} />
        <meta property="og:type" content="koompi" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={parse(description)} />
        <meta property="og:image" content={`https://admin.koompi.com${thumnail}`} />
        <title>{title + " - KOOMPI"}</title>
        <meta name="keywords" content={keywords.map((res) => res + ",")} />
        <meta name="description" content={meta_desc} />
      </Helmet>
      <div className="container">
        <div className="margin_single_page">
          <div className="background-single-page">
            <img
              src={`https://admin.koompi.com${thumnail}`}
              alt={title}
              className="img-responsive single-image"
            />
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
