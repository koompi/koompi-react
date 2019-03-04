import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Software = () => {
  return (
    <div className="ui container containerFeature">
    <div className="ui stackable divided grid beautyDetail">
      <div className="two column row feature-padding">
        <div className="column feature-padding-text">
          <img
            src="img/Apps/icons/New-Office.png"
            className="smallFeatureImg"
          />
          <p className="contentTitle">Office Applications</p>
          <p>
            KOOMPI come with pre-installed LibreOffice, which is the open source
            office suite developed by The Document Foundation. Available in 115
            languages, the suite comprises program for work processing,
            spreadsheets, slideshows, diagram and drawings, working with
            databases, and composing mathematical formulae.
          </p>
        </div>
        <div className="column mobile only">
          <center>
            <img src="img/Apps/Office.jpg" className="ui fluid image" />
          </center>
        </div>
        <div className="column mobile hidden">
          <center>
            <img src="img/Apps/Office.jpg" className="ui fluid image" />
          </center>
        </div>
      </div>
      <div className="two column row feature-padding feature-margin">
        <div className="column mobile hidden">
          <img src="img/Apps/App-Store.jpg" className="ui fluid image" />
        </div>
        <div className="column feature-padding-text-right">
          <img src="img/store.png" className="smallFeatureImg" />
          <p className="contentTitle">Software Center</p>
          <p>
            Koompi uses GNOME Software utility for easy software installation
            and updates. It is the GNOME front-end to the PackageKit daemon,
            which itself is a front-end to several package management systems.
          </p>
        </div>
        <div className="column mobile only">
          <center>
            <img src="img/App-Store.png" className="ui fluid image" />
          </center>
        </div>
      </div>
      <div className="two column row feature-padding feature-margin">
        <div className="column feature-padding-text">
          <img src="img/Apps/icons/firefox.png" className="smallFeatureImg" />
          <p className="contentTitle">Browser</p>
          <p>
            A powerful web browser developed by Mozilla Foundation and its
            subsidiary, Mozilla Corporation, is a free and open source that
            available for variety of OS. Already pre-installed with KOOMPI to
            support for better users experience and familiar friendly approach
            for the general use.
          </p>
        </div>
        <div className="column">
          <center>
            <img src="img/Apps/Firefox.jpg" className="ui fluid image" />
          </center>
        </div>
      </div>
      <div className="two column row feature-padding feature-margin">
        <div className="column mobile hidden">
          <center>
            <img src="img/Apps/VLC.jpg" className="ui fluid image" />
          </center>
        </div>
        <div className="column feature-padding-text-right">
          <img src="img/video-player.png" className="smallFeatureImg" />
          <p className="contentTitle">Video Player</p>
          <p>
            Both powerful video player Gnome MPV and VLC are available with
            Koompi pre-installed. They are more than just an alternative video
            player since the internet radio streams, video streams, apply
            various audio and video filters, quality adjustment, framerate,
            color management and frame timing.
          </p>
        </div>
        <div className="column mobile only">
          <img src="img/Apps/VLC.jpg" className="ui fluid image" />
        </div>
      </div>
      <div className="two column row feature-padding feature-margin">
        <div className="column feature-padding-text">
          <img src="img/Apps/icons/Krita.png" className="smallFeatureImg" />
          <p className="contentTitle">Krita</p>
          <p>
            Krita is under open source software license and offers many features
            comparable to commercial solution. Krita has a lot of cool features
            that assist your whole processing of painting. With an intuitive
            user interface, you can customize your own specific workflow. KOOMPI
            seeks for a helping tools that can guide the user to freely create
            anything that they want.
          </p>
        </div>
        <div className="column">
          <img src="img/Apps/Krita.jpg" className="ui fluid image" />
        </div>
      </div>
      <div className="two column row feature-padding feature-margin">
        <div className="column mobile hidden">
          <center>
            <img src="img/Apps/VsCode.jpg" className="ui fluid image" />
          </center>
        </div>
        <div className="column feature-padding-text-right">
          <img src="img/koompi-visual-icon.png" className="smallFeatureImg" />
          <p className="contentTitle">Visual Studio Code</p>
          <p>
            A source code editor with intelligent code completion, snippets,
            syntax highlighting, debugging and Git control that developed by
            Microsoft re available in Koompi.
          </p>
        </div>
        <div className="column mobile only">
          <center>
            <img src="img/Apps/VsCode.jpg" className="ui fluid image" />
          </center>
        </div>
      </div>
      <div className="two column row feature-padding feature-margin">
        <div className="column feature-padding-text">
          <img
            src="img/Apps/icons/Popcorn_Time.png"
            className="smallFeatureImg"
          />
          <p className="contentTitle">Popcorn Time</p>
          <p>
            Popcorn Time is a multi-platform, free software client that includes
            an integrated media player. A newly application feature in KOOMPI
            pre-installed to satisfied entertainment needed for all users.
          </p>
        </div>
        <div className="column">
          <img src="img/Apps/PopCornTime.jpg" className="ui fluid image" />
        </div>
      </div>
      <div className="two column row feature-padding feature-margin">
        <div className="column mobile hidden">
          <center>
            <img src="img/Apps/Office365.jpg" className="ui fluid image" />
          </center>
        </div>
        <div className="column feature-padding-text-right">
          <img
            src="img/Apps/icons/microsoft-365.png"
            className="smallFeatureImg"
          />
          <p className="contentTitle">Office 365</p>
          <p>
            KOOMPI come along with the online MS office suite for desktop,
            evernote client and other. Accessible to current version desktop
            application of MS. This feature aim to generate better daily users
            experience for computing and digital.
          </p>
        </div>
        <div className="column mobile only">
          <center>
            <img src="img/Apps/Office365.jpg" className="ui fluid image" />
          </center>
        </div>
      </div>
    </div>
  </div>
  );
};

class Feature extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="backgroundColorBanner">
          <div className="featureBanner">
            <div className="featureKoompi mobile hidden">
              <img
                src="img/feature-koompi-banner1.png"
                className="bannerImageFeature"
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
                  <a href="https://goo.gl/jHSZRL" target="_blank">
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
                  class="linkColor"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        {Software()}
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Feature;
