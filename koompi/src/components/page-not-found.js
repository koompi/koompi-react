import React from "react"
import Footer from "./footer"

function PageNotFound() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <center>
          <img src="/img/404-02.png" alt="404" className="page-not-found" />
        </center>
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default PageNotFound
