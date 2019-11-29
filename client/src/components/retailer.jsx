import React, { Component } from "react"
import ContentLoader from "react-content-loader"
import { Helmet } from "react-helmet"
import { Navbar } from "./navbar"
import Footer from "./footer"
import Retailers from "../data/retailers.json"

class Retailer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Retailers,
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 500)
  }

  displayLoading = () => {
    const loading = []
    for (let index = 0; index < 10; index++) {
      loading.push(
        <div className="column blur" key={index}>
          <div className="image-card">
            <ContentLoader
              height={220}
              width={160}
              speed={2}
              primaryColor="#f3f3f3"
              secondaryColor="#ecebeb"
            >
              <rect x="-1" y="-7" rx="0" ry="0" width="164" height="100" />
              <rect x="21" y="105" rx="0" ry="0" width="118" height="12" />
              <rect x="49" y="126" rx="0" ry="0" width="61" height="14" />
            </ContentLoader>
          </div>
        </div>
      )
    }
    return loading
  }

  render() {
    const { isLoading, data } = this.state
    return (
      <>
        <Helmet>
          <title>Our Retailers</title>
          <meta
            name="keywords"
            content="get koompi, koompi retailer, retailer koompi, koompi, smallworld venture"
          />
          <meta
            name="description"
            content="We aim to satisfy your individual needs while offering the best and most convenient tools for everyone."
          />
          <link rel="canonical" href="https://koompi.com/retailers" />
        </Helmet>
        <Navbar />
        <div className="backgroundRetailer">
          <div className="ui container">
            <div className="ui divided grid">
              <div className="ui stackable two column grid">
                <div className="column ten wide">
                  <div className="retailerPadding" style={{ paddingTop: "10%" }}>
                    <h2>Get KOOMPI</h2>
                    <p>
                      We aim to satisfy your individual needs while offering the best
                      and most convenient tools for everyone.
                      <br />
                      <br />
                      Take this opportunity to engage and interact with the KOOMPI
                      wherever you are.
                      <br />
                      <br />
                      Test drive a new KOOMPI from any of our retail partners listed
                      below:
                    </p>
                  </div>
                </div>
                <div className="column six wide">
                  <img
                    className="ui fluid image koompi-retailer-image koompi-about-image"
                    src="img/Koompi_Retailer.png"
                    alt="koompi-about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container">
          <center>
            <h2 className="retailer">Our Retailer</h2>
            <div className="ui stackable four column grid">
              {isLoading
                ? this.displayLoading()
                : data.map((dataRetailer) => (
                    <div className="column" key={dataRetailer.id}>
                      <div className="image-card">
                        <img
                          src={dataRetailer.logo}
                          className="ui fluid image"
                          alt={dataRetailer.name}
                        />
                        <h2>{dataRetailer.name}</h2>
                        <div className="shopHere">
                          <a
                            href={dataRetailer.location}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p>Shop Here</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </center>
        </div>
        <Footer />
      </>
    )
  }
}

export default Retailer
