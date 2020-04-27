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

  const { title, thumnail, created_at, keywords, meta_desc } = data.post
  const description = renderHTML(data.post.description)

  const metaElements = []

  if (title) {
    metaElements.push(
      <title key="title">{title}</title>,
      <meta key="og:site_name" property="og:site_name" content={title} />,
      <meta key="twitter:site" property="twitter:site" content={title} />
    )
  }

  if (description) {
    metaElements.push(
      <meta key="description" name="description" content={meta_desc} />,
      <meta key="og:description" property="og:description" content={meta_desc} />,
      <meta
        key="twitter:description"
        property="twitter:description"
        content={meta_desc}
      />
    )
  }

  if (keywords) {
    metaElements.push(<meta key="keywords" name="keywords" content={keywords} />)
  }

  if (thumnail) {
    metaElements.push(
      <meta key="og:image" name="og:image" content={thumnail} />,
      <meta key="twitter:image" name="twitter:image" content={thumnail} />
    )
  }

  return (
    <div>
      {/* All the Meta Tags */}
      <Helmet>
        {metaElements}
        <link
          rel="canonical"
          href={`https://koompi.com/${window.location.pathname}`}
        />
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
