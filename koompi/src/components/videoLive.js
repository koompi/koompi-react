import React, { useState, useEffect } from "react"
import { Row, Col } from "antd"
import Footer from "./footer"
import { useQuery } from "@apollo/react-hooks"
import { GET_AMAS } from "./graphql/query"
import _ from "lodash"
import Helmet from "react-helmet"
import ProgressiveImage from "react-progressive-image"
import NProgress from "nprogress"

function VideoLive() {
  const { error, loading, data } = useQuery(GET_AMAS)
  if (loading) {
    NProgress.start()
    return null
  }
  if (error) console.error(error)
  NProgress.done()
  // window.location.reload()

  const banner = data.amas.slice(0, 1)
  const amaData = data.amas.slice(1)
  const koompiAMA = _.filter(amaData, { category: "koompi-ama" })
  const userAMA = _.filter(amaData, { category: "user-ama" })

  return (
    <React.Fragment>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title data-react-helmet="true">Ask Me Anythings - KOOMPI</title>
        <meta
          data-react-helmet="true"
          name="title"
          content="Ask Me Anythings - KOOMPI"
        />
        <meta
          data-react-helmet="true"
          name="description"
          content="AMA stands for “Ask Me Anything,” which is basically just a trendy internet slang term or acronym used to describe the interview-like process that takes place between the host and the participants asking questions."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://www.koompi.com/koompi/ask-my-anythings"
        />
        <meta
          data-react-helmet="true"
          property="og:title"
          content="Ask Me Anythings - KOOMPI - KOOMPI"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="AMA stands for “Ask Me Anything,” which is basically just a trendy internet slang term or acronym used to describe the interview-like process that takes place between the host and the participants asking questions."
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content={`https://admin.koompi.com${banner[0].image}`}
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
          content="Ask Me Anythings - KOOMPI - KOOMPI"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="AMA stands for “Ask Me Anything,” which is basically just a trendy internet slang term or acronym used to describe the interview-like process that takes place between the host and the participants asking questions."
        />
        <meta
          data-react-helmet="true"
          property="twitter:image"
          content={`https://admin.koompi.com${banner[0].image}`}
        />
      </Helmet>
      <div className="container">
        <div className="ama-banner">
          {banner.map((banner) => {
            return (
              <a href={banner.url} target="_blank" rel="noopener noreferrer">
                <Row gutter={[24, 24]}>
                  <Col
                    xs={24}
                    sm={24}
                    md={14}
                    ld={16}
                    xl={16}
                    className="banner-img-padding"
                  >
                    <div>
                      <img
                        src="/img/koompi-ama/coming-soon.png"
                        height="50px"
                        alt="koompi-ama coming soon"
                        className="img-coming-soon"
                      />
                      <ProgressiveImage
                        src={`https://admin.koompi.com${banner.image}`}
                        alt={banner.name}
                        className="img-responsive"
                      >
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
                            <img
                              style={{ maxWidth: "100%" }}
                              src={src}
                              alt={banner.name}
                              className="img-responsive"
                            />
                          )
                        }
                      </ProgressiveImage>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={10} ld={8} xl={8}>
                    <div className="ama-banner-desc">
                      <div className="ama-banner-date">
                        <span>{banner.date}</span>
                      </div>
                      <h2>{banner.name}</h2>
                      <h4 className="ama-banner-topic">
                        <span>Topic:</span> {banner.title}
                      </h4>
                      <p className="ama-desc">{banner.desc}</p>
                    </div>
                  </Col>
                </Row>
              </a>
            )
          })}
        </div>
        <div>
          <h2 className="amaCategory">
            <span>KOOMPI AMA</span>
          </h2>
          <Row gutter={[24, 24]} type="flex">
            {koompiAMA.map((res) => {
              const { name, title, desc, image, url, date } = res
              return (
                <Col xs={24} sm={24} md={12} ld={8} xl={8}>
                  <div className="ama-background">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <div>
                        <div>
                          <span className="ama-date">{date}</span>
                        </div>
                        <ProgressiveImage
                          src={`https://admin.koompi.com${image}`}
                          alt={name}
                          className="img-responsive"
                        >
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
                              <img
                                src={`https://admin.koompi.com${image}`}
                                alt={name}
                                className="img-responsive"
                              />
                            )
                          }
                        </ProgressiveImage>
                      </div>
                      <div className="ama-content">
                        <h2 className="ama-name">{name}</h2>
                        <p className="ama-topic">Topic: {title}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
        <div>
          <h2 className="amaCategory">
            <span>USER AMA</span>
          </h2>
          <Row gutter={[24, 24]}>
            {userAMA.map((res) => {
              const { name, title, desc, image } = res
              return (
                <Col xs={24} sm={24} md={12} ld={8} xl={8}>
                  <div className="ama-background">
                    <ProgressiveImage
                      src={`https://admin.koompi.com${image}`}
                      alt={name}
                      className="img-responsive"
                    >
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
                          <img
                            src={`https://admin.koompi.com${image}`}
                            alt={name}
                            className="img-responsive"
                          />
                        )
                      }
                    </ProgressiveImage>
                    <div className="ama-content">
                      <h2 className="ama-name">{name}</h2>
                      <p className="ama-topic">Topic: {title}</p>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  )
}

export default VideoLive
