import React, { Fragment } from "react"
import Footer from "../footer"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { GET_LEGALS } from "../graphql/query"
import _ from "lodash"
import renderHTML from "../editorJsToHtml"
import { Helmet } from "react-helmet"

function PrivacyPolicy() {
  const { error, loading, data } = useQuery(GET_LEGALS)
  if (error) console.log(error)
  if (loading) {
    NProgress.start()
    return null
  }

  const result = _.filter(data.legals, (data) => data.title === "Privacy Policy")

  NProgress.done()
  const description = renderHTML(result[0].description)
  return (
    <Fragment>
      <Helmet>
        <title>PRIVACY POLICY - KOOMPI</title>
        <meta
          name="keywords"
          content="koompi, koompi.com, www.koompi.com, https://koompi.com/legal/privacy, koompi-privacy, koompi privacy, privacy"
        />
        <meta
          name="description"
          content="We will gather the data you provide to improve the Service. By using the Service, you agree to the term and condition use of information in accordance with this policy."
        />
        <link rel="canonical" href="https://koompi.com/legal/privacy" />
      </Helmet>
      <div className="sale-policy-margin">
        <div className="container">
          {/* <h1>{result[0].title}</h1> */}
          <div className="legals-background">{parse(description)}</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default PrivacyPolicy
