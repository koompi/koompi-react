/* eslint-disable react/no-unused-state */
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "./navbar"
import Footer from "./footer"
import Popup from "./popup"
import { Helmet } from "react-helmet"

const Banner = () => {
  return (
    <div className="bannerPage">
      <div className="bannerBackground">
        <div className="bannerText">
          <h1 className="bannerTitle">Koompi Kosmos</h1>
          <p className="bannerDesc">Beautiful, High Performance, Open Source</p>
          <h6 className="leanMoreBanner">
            <Link to="/retailers">
              <i className="fas fa-angle-right" /> GET KOOMPI
            </Link>
          </h6>
          <p>
            KOOMPI is a practical and affordable entry level notebook computer able
            to perform all the daily tasks required for work and school...
            <a href="/about-us">Read More</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const Shapelines = () => {
  return (
    <>
      {/* {open ? <Toggle/> : ""}
      <button onClick={toggle}>toggle</button> */}
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">Shapeliness</h4>
                <h2 className="fontWidth">
                  The 13.3-inch laptop with <br /> a Full HD display
                </h2>
                <p className="websiteContent">
                  Sleek and lightweight combining modest hardware with powerful
                  open-source software.
                </p>
                <div className="ui grid beautyDetail">
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">Thin</h5>
                      <h3 className="beautyDetailDesc">
                        13.5
                        <span className="tourDetailSize"> mm</span>
                      </h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">Light</h5>
                      <h3 className="beautyDetailDesc">
                        1.3
                        <span className="tourDetailSize"> kgs</span>
                      </h3>
                    </div>
                  </div>
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">Compact design</h5>
                      <h3 className="beautyDetailDesc">
                        13.3&quot;
                        <span className="tourDetailSize"> size</span>
                      </h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">Slim</h5>
                      <h3 className="beautyDetailDesc">
                        13.5
                        <span className="tourDetailSize">mm size</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <img
                  src="/img/koompi-beauty-1.png"
                  className="koompiBeautyImg"
                  alt="koompi-beauty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundKoompiGallery">
        <img
          srcSet="https://firebasestorage.googleapis.com/v0/b/koompi-a55b9.appspot.com/o/price_info_small.png?alt=media&token=127ca3ad-1633-4225-8d57-649325383599 320w,
          https://firebasestorage.googleapis.com/v0/b/koompi-a55b9.appspot.com/o/price_info_medium.png?alt=media&token=0a3fbb3b-6400-4baf-a4e7-28c333d4937f 480w,
             https://firebasestorage.googleapis.com/v0/b/koompi-a55b9.appspot.com/o/price_info_big.png?alt=media&token=fb1ad1cf-775d-408a-9099-e73ad0e67b93 800w"
          sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
          src="https://firebasestorage.googleapis.com/v0/b/koompi-a55b9.appspot.com/o/price_info_big.png?alt=media&token=fb1ad1cf-775d-408a-9099-e73ad0e67b93"
          alt="Koompi Price"
        ></img>
      </div>
    </>
  )
}

const Screen = () => {
  return (
    <>
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">Screen</h4>
                <h2 className="fontWidth">FHD IPS Anti-glare Panel</h2>
                <p className="websiteContent">
                  KOOMPI works out-of-the-box with a full suite of custom-selected
                  software packages needed for everyday computing. Check out our
                  features for the fine details.
                </p>
                <div className="ui grid beautyDetail">
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">IPS display</h5>
                      <h3 className="beautyDetailDesc">13.3</h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">Widescreen</h5>
                      <h3 className="beautyDetailDesc">16 : 9</h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">FHD Resolution</h5>
                      <h3 className="beautyDetailDesc">1920 x 1080 </h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">Screen to body ratio</h5>
                      <h3 className="beautyDetailDesc">73.44%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/koompi-a55b9.appspot.com/o/koompi_screen.png?alt=media&token=a08eccdc-482d-44bc-b325-476e5e6e10ad"
                  className="koompiBeautyImg "
                  alt="koompi-screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Performance = () => {
  return (
    <div className="performanceBack">
      <div>
        <div className="ui stackable two column grid">
          <div className="row removeShadow">
            <div className="six wide column performanceImage">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/koompi-a55b9.appspot.com/o/koompi_performance.png?alt=media&token=14d36b08-ebb0-41c1-8861-73a601c08473"
                heigh="400px"
                className="mobile hidden"
                alt="koompi-performance"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/koompi-a55b9.appspot.com/o/koompi_performance.png?alt=media&token=14d36b08-ebb0-41c1-8861-73a601c08473"
                heigh="400px"
                className="mobile only"
                alt="koompi-performance"
              />
            </div>
            <div className="eight wide column">
              <div className="performancePadding">
                <h5>Unprecedented Performance</h5>
                <p>
                  KOOMPI, the sleek and lightweight next-generation productivity tool
                  offering an experience next to none, combining modest hardware with
                  powerful open-source software.
                  <br />
                  <br />
                  As a multi-purpose enabler, the KOOMPI seeks to empower the next
                  generation of Cambodian youth as the creators and innovators of
                  tomorrow.
                  <br />
                  <br />
                  The KOOMPI offers a pre-packaged functional software environment
                  that allows users to focus on the challenges of the task at hand
                  rather than the tools. Powerful yet easy and light enough to carry
                  almost anywhere.
                </p>
                <div className="ui two column divided grid">
                  <div className="row performanceRemoveMargin">
                    <div className="column">
                      <div className="performanceTitle">
                        Intel Celeron CPU
                        <h2>N4100</h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        Boost to
                        <h2>
                          2.4<span className="koompiSpeedMB">GHz</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        M.2 SATA3 SSD
                        <h2>
                          128<span className="koompiSpeedMB">GB</span> | 256
                          <span className="koompiSpeedMB">GB</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        Speed Read | Write
                        <h2>
                          537 <span className="koompiSpeedMB">MB/s</span> | 439{" "}
                          <span className="koompiSpeedMB">MB/s</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        RAM DDR4
                        <h2>
                          8<span className="koompiSpeedMB">GB</span>
                        </h2>
                      </div>
                    </div>
                    <div className="column">
                      <div className="performanceTitle">
                        USB-C Port
                        <h2>
                          10<span className="koompiSpeedMB">Gbps</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Battery = () => {
  return (
    <>
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">BATTERY</h4>
                <h2 className="fontWidth">Fast Charging, Longer life</h2>
                <p className="websiteContent">
                  Designed with an ultra thin high performance 5000mAh battery that
                  will last for up to 7 hours
                </p>
                <div className="ui grid beautyDetail">
                  <div className="two column row">
                    <div className="column">
                      <h5 className="beautyDetailTitle">Li-polymer battery</h5>
                      <h3 className="beautyDetailDesc">5000mAH</h3>
                    </div>
                    <div className="column">
                      <h5 className="beautyDetailTitle">Battery life</h5>
                      <h3 className="beautyDetailDesc">Up to 7h</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <img
                  src="/img/koompi-battery.png"
                  className="koompiBeautyImg "
                  alt="koompi-battery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000))
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      loading: true,
      open: true
    }
  }

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }))
  }

  render() {
    // const { loading } = this.state;
    // if (loading) {
    //   // if your component doesn't have to wait for an async action, remove this block
    //   return (
    //     <div className="loadingImage">
    //       <img src="//img/koompi-logo-w-02.svg" alt="loading ..." />
    //       <center>
    //         <div className="loader" />
    //       </center>
    //     </div>
    //   ); // render null when app is not ready
    // }

    return (
      <>
        <Helmet>
          <title>Koompi</title>
          <meta
            name="description"
            content="KOOMPI is a practical, affordable and effective entry level laptop. High-end perform daily tasks for working and schooling. Create with a customized operating system by our own called, KramaOS based on well-known open source Linux. Both philosophy and design fit specifically with KOOMPI’s hardware."
          />
          <meta
            name="keywords"
            content="koompi, koompi laptop, koompi computer, koompi os, kroma os, krama os, kramaos, koompi.com, kosmos os, koompi review, smallworld venture"
          />
          <link rel="canonical" href="https://koompi.com/home" />
        </Helmet>
        <Navbar />
        <Popup />
        {Banner()}
        {Shapelines()}
        {Screen()}
        {Performance()}
        {Battery()}
        <Footer />
      </>
    )
  }
}

export default Index
