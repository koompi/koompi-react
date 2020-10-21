import React from "react"
import Footer from "./footer"
import { Result, Button } from "antd"
import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
      <br />
      <Footer />
    </div>
  )
}

export default PageNotFound
