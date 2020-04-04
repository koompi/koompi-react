import React, { Fragment } from "react"
import Footer from "../footer"
import { useQuery } from "@apollo/react-hooks"
import parse from "html-react-parser"
import NProgress from "nprogress"
import { GET_LEGALS } from "../graphql/query"
import _ from "lodash"
import renderHTML from "../editorJsToHtml"
import { Helmet } from "react-helmet"

function SalePolicy() {
  const { error, loading, data } = useQuery(GET_LEGALS)
  if (error) console.log(error)
  if (loading) {
    NProgress.start()
    return null
  }

  const result = _.filter(data.legals, (data) => data.title === "Sales Policy")

  NProgress.done()
  const description = renderHTML(result[0].description)
  return (
    <Fragment>
      <Helmet>
        <title>SALES POLICY - KOOMPI</title>
        <meta
          name="keywords"
          content="koompi, koompi.com, www.koompi.com, https://koompi.com/whitepaper/salespolicies, koompi-SALES POLICY, koompi SALES POLICY, SALES POLICY"
        />
        <meta
          name="description"
          content="Thank you for your purchase! At KOOMPI, we ideally want our products to be smooth, effective, and enjoyable. For secure customer experience, KOOMPI provides a certain warranty to all KOOMPI products that you purchase."
        />
        <link rel="canonical" href="https://koompi.com/whitepaper/salespolicies" />
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

export default SalePolicy
