import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import {Helmet} from "react-helmet";

const software_image_right = (icon, title, desc, image) => {
  return (
    <div className="two column row feature-padding">
      <div className="column feature-padding-text">
        <img src={icon} className="smallFeatureImg" alt={title}/>
        <p className="contentTitle">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="column mobile only">
        <center>
          <img src={image} className="ui fluid image" alt={title} />
        </center>
      </div>
      <div className="column mobile hidden">
        <center>
          <img src={image} className="ui fluid image" alt={title} />
        </center>
      </div>
    </div>
  );
};
const software_image_left = (icon, title, desc, image) => {
  return (
    <div className="two column row feature-padding feature-margin">
      <div className="column mobile hidden">
        <img src={image} className="ui fluid image" alt={title} />
      </div>
      <div className="column feature-padding-text-right">
        <img src={icon} className="smallFeatureImg" alt={title} />
        <p className="contentTitle">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="column mobile only">
        <center>
          <img src={image} className="ui fluid image"  alt={title} />
        </center>
      </div>
    </div>
  );
};

const Software = () => {
  return (
    <div className="ui container containerFeature">
      <div className="ui stackable divided grid beautyDetail">
        {software_image_right(
          "img/Apps/icons/New-Office.png",

          "Office Applications",

          ` KOOMPI come with pre-installed LibreOffice, which is the open
            source office suite developed by The Document Foundation.
            Available in 115 languages, the suite comprises program for work
            processing, spreadsheets, slideshows, diagram and drawings,
            working with databases, and composing mathematical formulae.`,

          "img/Apps/Office.jpg"
        )}
        {software_image_left(
          "img/store.png",

          "Software Center",

          ` Koompi uses GNOME Software utility for easy software installation
            and updates. It is the GNOME front-end to the PackageKit daemon,
            which itself is a front-end to several package management systems.`,

          "img/Apps/App-Store.jpg",

        )}
        {software_image_right(
          "img/Apps/icons/firefox.png",

          "Browser",

          ` A powerful web browser developed by Mozilla Foundation and its
            subsidiary, Mozilla Corporation, is a free and open source that
            available for variety of OS. Already pre-installed with KOOMPI to
            support for better users experience and familiar friendly approach
            for the general use.`,

          "img/Apps/Firefox.jpg"
        )}
        {software_image_left(
          "img/video-player.png",

          "Video Player",

          ` Koompi uses GNOME Software utility for easy software installation
            and updates. It is the GNOME front-end to the PackageKit daemon,
            which itself is a front-end to several package management systems.`,

            "img/Apps/VLC.jpg",
        )}

        {software_image_right(
          "img/Apps/icons/Krita.png",

          "Krita",

          ` Krita is under open source software license and offers many
            features comparable to commercial solution. Krita has a lot of
            cool features that assist your whole processing of painting. With
            an intuitive user interface, you can customize your own specific
            workflow. KOOMPI seeks for a helping tools that can guide the user
            to freely create anything that they want.`,

          "img/Apps/Krita.jpg"
        )}

        {software_image_left(
          "img/koompi-visual-icon.png",

          "Visual Studio Code",

          ` A source code editor with intelligent code completion, snippets,
            syntax highlighting, debugging and Git control that developed by
            Microsoft re available in Koompi.`,

          "img/Apps/VsCode.jpg",
          
        )}

        {software_image_right(
          "img/Apps/icons/Popcorn_Time.png",

          "Popcorn Time",

          ` Popcorn Time is a multi-platform, free software client that
            includes an integrated media player. A newly application feature
            in KOOMPI pre-installed to satisfied entertainment needed for all
            users.`,

          "img/Apps/PopCornTime.jpg"
        )}

        {software_image_left(
          "img/Apps/icons/microsoft-365.png",

          "Office 365",

          ` KOOMPI come along with the online MS office suite for desktop,
            evernote client and other. Accessible to current version desktop
            application of MS. This feature aim to generate better daily users
            experience for computing and digital.`,

          "img/Apps/Office365.jpg",
          
        )}
        
        
      </div>
    </div>
  );
};

class Feature extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
            <title>Feature | Koompi mission is build and provide tools for the next generation of
      engineers, problem solvers and discoverers</title>
        </Helmet>
        <Navbar />
        <div className="backgroundColorBanner">
          <div className="featureBanner">
            <div className="featureKoompi mobile hidden">
              <img
                src="img/feature-koompi-banner1.png"
                className="bannerImageFeature"
                alt="koompi-feature"
              />
              <div className="featureBannerContent">
                <h2>
                  Everything You Need <br /> Available Here
                </h2>
                <p>
                  KOOMPI handpicked software for everyday computing, net
                  browsing,
                  <br /> office suites for productivity, entertainment and more.
                  We believe
                  <br /> that the computer should be simple and free; free in
                  terms of freedom.
                  <br /> This is a tool which helps the user achieve more and
                  learn more.
                </p>
                <p>
                  <i className="fas fa-angle-right featureIcon" />
                  <i className="fas fa-angle-right featureIcon" />
                  <a href="https://goo.gl/jHSZRL" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="mobile only mobileFeature">
              <h2>
                Everything You Need <br /> Available Here
              </h2>
              <p>
                KOOMPI handpicked software for everyday computing, net browsing,
                <br /> office suites for productivity, entertainment and more.
                We believe
                <br /> that the computer should be simple and free; free in
                terms of freedom.
                <br /> This is a tool which helps the user achieve more and
                learn more.
              </p>
              <p>
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
              </p>
            </div>
          </div>
        </div>
        {Software()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Feature;
