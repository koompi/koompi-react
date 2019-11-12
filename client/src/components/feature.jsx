import React, { Component } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const software_image_right = (icon, title, desc, image) => {
  return (
    <div className="two column row feature-padding">
      <div className="column feature-padding-text">
        <img src={icon} className="smallFeatureImg" alt={title} />
        <p className="contentTitle">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="column mobile only">
        <center>
          <img src={image} className="ui fluid image image-margin-top" alt={title} />
        </center>
      </div>
      <div className="column mobile hidden">
        <center>
          <img src={image} className="ui fluid image" alt={title} />
        </center>
      </div>
    </div>
  )
}
const software_image_left = (icon, title, desc, image) => {
  return (
    <div className="two column row feature-padding feature-margin">
      <div className="column mobile hidden">
        <img src={image} className="ui fluid image image-margin-top" alt={title} />
      </div>
      <div className="column feature-padding-text-right">
        <img src={icon} className="smallFeatureImg" alt={title} />
        <p className="contentTitle">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="column mobile only">
        <center>
          <img src={image} className="ui fluid image" alt={title} />
        </center>
      </div>
    </div>
  )
}

const Software = () => {
  return (
    <div className="ui container containerFeature">
      <div className="ui stackable divided grid beautyDetail">
        {software_image_right(
          "img/Apps/icons/orb.png",

          "Apache OpenOffice",

          ` Apache OpenOffice is an office productivity software suite containing a word processor (Writer), a spreadsheet (Calc), a presentation application (Impress), a drawing application (Draw), a formula editor (Math), and a database management application (Base). It's default file format is the OpenDocument Format (ODF), and can also read and write a wide variety of other file formats, including those from Microsoft Office.`,

          "img/Apps/Office.webp"
        )}
        {software_image_left(
          "img/store.webp",

          "Software Center",

          ` KOOMPI uses the GNOME Software utility for software application installations and updates. The Software Center allows for easy installations and updates of software applications and system extensions.`,

          "img/Apps/App-Store.webp"
        )}
        {software_image_right(
          "img/Apps/icons/brave_logo_horz.png",

          "Brave ( web browser )",

          `Much more than a web browser, Brave is a new way of thinking about how the web works. Brave is open source and built by a team of privacy focused, performance oriented pioneers of the web. Brave fights malware and prevents tracking while keeping your information safe and secure.`,

          "img/Apps/Firefox.webp"
        )}
        {software_image_left(
          "img/Apps/icons/KMP.png",

          "KMPlayer",

          ` KMPlayer is a highly customizable multimedia software providing high-quality video playback of media files with much more additional functionality. KMPlayer recognizes a large number of file formats, is able to capture videos from online sources and allows users to make animated GIFs.
          `,

          "img/Apps/VLC.webp"
        )}

        {software_image_right(
          "img/Apps/icons/Krita.png",

          "Krita",

          `Krita is a raster graphics editor designed primarily for digital painting and animation. It is a fast, flexible, and free Photoshop alternative built by artists and perfect for everyone from amateur to professional. Krita gives budding artists and illustrators a pro-level set of tools with a natural painting toolbox.`,

          "img/Apps/Krita.webp"
        )}

        {software_image_left(
          "img/koompi-visual-icon.webp",

          "Visual Studio Code",

          ` Visual Studio Code is a source-code editor developed by Microsoft which includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.`,

          "img/Apps/VsCode.webp"
        )}

        {software_image_right(
          "img/Apps/icons/Popcorn_Time.png",

          "Popcorn Time",

          `Popcorn Time is a multi-platform, free software BitTorrent client that includes an integrated media player. Popcorn Time provide a free "alternative" to subscription-based video streaming services such as Netflix.`,

          "img/Apps/PopCornTime.webp"
        )}

        {software_image_left(
          "img/Apps/icons/microsoft-365.png",

          "Office 365",

          ` Office 365 is a cloud-based subscription service that brings together the best tools for the way people work today. Combining the best-in-class apps like Excel and Outlook with cloud services like OneDrive and Microsoft Teams, Office 365 lets anyone create and share anywhere on any device.`,

          "img/Apps/Office365.webp"
        )}

        {software_image_right(
          "img/Apps/icons/new-kdenlive-logo.png",

          "Kdenlive",

          ` Kdenlive is a non-linear video editing software featuring multi-track editing with a timeline. It supports an unlimited number of video and audio tracks and includes tools to create, move, crop and delete video, audio, text and image clips. Kdenlive has a built-in title editor and the ability to add custom effects and transitions.`,

          "img/Apps/Kdenlive.webp"
        )}

        {software_image_left(
          "img/Apps/icons/Guvcview.png",

          "Guvcview",

          `Guvcview is a webcam application at providing a simple interface for capturing and viewing video from v4l2 devices.`,

          "img/Apps/Guvcview.webp"
        )}
      </div>
    </div>
  )
}

class Feature extends Component {
  state = {
    data: []
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Feature | Koompi Kosmos</title>
        </Helmet>
        <Navbar />
        <div className="backgroundColorBanner">
          <div className="featureBanner">
            <div className="featureKoompi mobile hidden">
              <img
                src="img/feature-koompi-banner1.webp"
                className="bannerImageFeature"
                alt="koompi-feature"
              />
              <div className="featureBannerContent">
                <h2>
                  Everything You Need <br /> Available Here
                </h2>
                <p>
                  The KOOMPI contains a handpicked suite of software for
                  <br /> everyday computing, Internet browsing,
                  <br /> office productivity, entertainment and more.
                  <br />
                  <br />
                  We've compiled the KOOMPI computer software suite to offer a
                  <br /> user experience providing simplicity, power, privacy and
                  freedom.
                  <br />
                  <br />
                  KOOMPI users can achieve more and learn more with less effort and
                  frustration.
                </p>
                {/* <a
                  href="https://goo.gl/jHSZRL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a> */}
              </div>
            </div>
            <div className="mobile only mobileFeature">
              <h2>
                Everything You Need <br /> Available Here
              </h2>
              <p>
                KOOMPI handpicked software for everyday computing, net browsing,
                <br /> office suites for productivity, entertainment and more. We
                believe
                <br /> that the computer should be simple and free; free in terms of
                freedom.
                <br /> This is a tool which helps the user achieve more and learn
                more.
              </p>
              {/* <p>
                <i className="fas fa-angle-right featureIcon" />
                <i className="fas fa-angle-right featureIcon" />
                <a
                  href="https://goo.gl/jHSZRL"
                  target="_blank"
                  className="linkColor"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </p> */}
            </div>
          </div>
        </div>
        {Software()}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Feature
