import React, { Fragment } from "react"
import Footer from "../footer"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { GET_LEGALS } from "../graphql/query"
import _ from "lodash"
import renderHTML from "../editorJsToHtml"
import { Helmet } from "react-helmet"

function TermsAndConditions() {
  const { error, loading, data } = useQuery(GET_LEGALS)
  if (error) console.log(error)
  if (loading) {
    NProgress.start()
    return null
  }

  const result = _.filter(
    data.legals,
    (data) => data.title === "Terms and Conditions"
  )

  NProgress.done()
  const description = renderHTML(result[0].description)
  return (
    <Fragment>
      <Helmet>
        <title>TERMS AND CONDITIONS - KOOMPI</title>
        <meta
          name="keywords"
          content="KOOMPI, together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
        />
        <meta
          name="description"
          content="KOOMPI, together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
        />
        <link rel="canonical" href="https://koompi.com/legal/terms-and-conditions" />
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

export default TermsAndConditions
