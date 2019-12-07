import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Navbar } from "./navbar"
import Footer from "./footer"
import Popup from "./popup"
import { useTranslation } from "react-i18next"

function Index() {
  const { t } = useTranslation()

  const Banner = () => {
    return (
      <div className="bannerPage">
        <div className="bannerBackground">
          <div className="bannerText">
            <h1 className="bannerTitle">Koompi Kosmos</h1>
            <p className="bannerDesc">{t("SectionOneIndex.1")}</p>
            <h6 className="leanMoreBanner">
              <Link to="/retailers">
                <i className="fas fa-angle-right" /> {t("SectionOneIndex.3")}
              </Link>
            </h6>
            <p>{t("SectionOneIndex.2")}</p>
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
                  <h4 className="smallTitle">{t("SectionTwoIndex.1")}</h4>
                  <h2 className="fontWidth">{t("SectionTwoIndex.2")}</h2>
                  <p className="websiteContent">{t("SectionTwoIndex.3")}</p>
                  <div className="ui grid beautyDetail">
                    <div className="two column row">
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {t("SectionTwoIndex.4")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionTwoIndex.5")}
                        </h3>
                      </div>
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {" "}
                          {t("SectionTwoIndex.6")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionTwoIndex.7")}
                        </h3>
                      </div>
                    </div>
                    <div className="two column row">
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {" "}
                          {t("SectionTwoIndex.8")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionTwoIndex.9")}
                        </h3>
                      </div>
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {" "}
                          {t("SectionTwoIndex.10")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionTwoIndex.11")}
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
          />
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
                  <h4 className="smallTitle">{t("SectionThreeIndex.1")}</h4>
                  <h2 className="fontWidth">{t("SectionThreeIndex.2")}</h2>
                  <p className="websiteContent">{t("SectionThreeIndex.3")}</p>
                  <div className="ui grid beautyDetail">
                    <div className="two column row">
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {t("SectionThreeIndex.4")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionThreeIndex.5")}
                        </h3>
                      </div>
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {t("SectionThreeIndex.6")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionThreeIndex.7")}
                        </h3>
                      </div>
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {t("SectionThreeIndex.8")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionThreeIndex.9")}{" "}
                        </h3>
                      </div>
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {t("SectionThreeIndex.10")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionThreeIndex.11")}
                        </h3>
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
                  <h5>{t("SectionFourIndex.1")}</h5>
                  <p>
                    {t("SectionFourIndex.2")}
                    <br />
                    <br />
                    {t("SectionFourIndex.3")}
                    <br />
                    <br />
                    {t("SectionFourIndex.4")}
                  </p>
                  <div className="ui two column divided grid">
                    <div className="row performanceRemoveMargin">
                      <div className="column">
                        <div className="performanceTitle">
                          {t("SectionFourIndex.5")}
                          <h2>{t("SectionFourIndex.6")}</h2>
                        </div>
                      </div>
                      <div className="column">
                        <div className="performanceTitle">
                          {t("SectionFourIndex.7")}
                          <h2>{t("SectionFourIndex.8")}</h2>
                        </div>
                      </div>
                      <div className="column">
                        <div className="performanceTitle">
                          {t("SectionFourIndex.9")}
                          <h2>{t("SectionFourIndex.10")}</h2>
                        </div>
                      </div>
                      <div className="column">
                        <div className="performanceTitle">
                          {t("SectionFourIndex.11")}
                          <h2>{t("SectionFourIndex.12")}</h2>
                        </div>
                      </div>
                      <div className="column">
                        <div className="performanceTitle">
                          {t("SectionFourIndex.13")}
                          <h2>{t("SectionFourIndex.14")}</h2>
                        </div>
                      </div>
                      <div className="column">
                        <div className="performanceTitle">
                          {t("SectionFourIndex.15")}
                          <h2>{t("SectionFourIndex.16")}</h2>
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
                  <h4 className="smallTitle">{t("SectionFiveIndex.1")}</h4>
                  <h2 className="fontWidth">{t("SectionFiveIndex.2")}</h2>
                  <p className="websiteContent">{t("SectionFiveIndex.3")}</p>
                  <div className="ui grid beautyDetail">
                    <div className="two column row">
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {t("SectionFiveIndex.4")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionFiveIndex.5")}
                        </h3>
                      </div>
                      <div className="column">
                        <h5 className="beautyDetailTitle">
                          {t("SectionFiveIndex.6")}
                        </h5>
                        <h3 className="beautyDetailDesc">
                          {t("SectionFiveIndex.7")}
                        </h3>
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

export default Index
