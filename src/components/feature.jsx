import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import FadeIn from "react-lazyload-fadein";

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
          <FadeIn height={600} duration={100}>
            {onload => (
              <img
                src={image}
                className="ui fluid image image-margin-top"
                alt={title}
                onload={onload}
              />
            )}
          </FadeIn>
        </center>
      </div>
      <div className="column mobile hidden">
        <center>
          <FadeIn height={600} duration={100}>
            {onload => (
              <img
                src={image}
                className="ui fluid image"
                alt={title}
                onLoad={onload}
              />
            )}
          </FadeIn>
        </center>
      </div>
    </div>
  );
};
const software_image_left = (icon, title, desc, image) => {
  return (
    <div className="two column row feature-padding feature-margin">
      <div className="column mobile hidden">
        <FadeIn height={600} duration={100}>
          {onload => (
            <img
              src={image}
              className="ui fluid image image-margin-top"
              alt={title}
              onLoad={onload}
            />
          )}
        </FadeIn>
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
  );
};

const Software = () => {
  return (
    <div className="ui container containerFeature">
      <div className="ui stackable divided grid beautyDetail">
        {software_image_right(
          "img/Apps/icons/orb.png",

          "Apache OpenOffice",

          ` Apache OpenOffice as an open source office software suite, 
          developed by Apache Software Foundation contains a word processor, 
          spreadsheet, presentation application, drawing application, a formula 
          editor and data base management.  Its default file format is a OpenDocument 
          Format (ODF) mean to assist users for any office work.`,

          "img/Apps/Office.webp"
        )}
        {software_image_left(
          "img/store.webp",

          "Software Center",

          ` Koompi uses GNOME Software utility for easy software installation
            and updates. It is the GNOME front-end to the PackageKit daemon,
            which itself is a front-end to several package management systems.`,

          "img/Apps/App-Store.webp"
        )}
        {software_image_right(
          "img/Apps/icons/brave_logo_horz.png",

          "Brave ( web browser )",

          ` Developed by Brave Software Inc. Brave web browser is a free and open source 
          browser. It protect the users by block ads and website tracker. Pre-installed 
          on KOOMPI to support for better users experience.`,

          "img/Apps/Firefox.webp"
        )}
        {software_image_left(
          "img/Apps/icons/KMP.png",

          "KMPlayer",

          ` KOOMPI use K-Multimedia player known as KMPlayer for media player that can
           play on a large numbers of format. Bring out the whole new delight experience 
           for the users.
          `,

          "img/Apps/VLC.webp"
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

          "img/Apps/Krita.webp"
        )}

        {software_image_left(
          "img/koompi-visual-icon.webp",

          "Visual Studio Code",

          ` A source code editor with intelligent code completion, snippets,
            syntax highlighting, debugging and Git control that developed by
            Microsoft re available in Koompi.`,

          "img/Apps/VsCode.webp"
        )}

        {software_image_right(
          "img/Apps/icons/Popcorn_Time.png",

          "Popcorn Time",

          ` Popcorn Time is a multi-platform, free software client that
            includes an integrated media player. A newly application feature
            in KOOMPI pre-installed to satisfied entertainment needed for all
            users.`,

          "img/Apps/PopCornTime.webp"
        )}

        {software_image_left(
          "img/Apps/icons/microsoft-365.png",

          "Office 365",

          ` KOOMPI come along with the online MS office suite for desktop,
            evernote client and other. Accessible to current version desktop
            application of MS. This feature aim to generate better daily users
            experience for computing and digital.`,

          "img/Apps/Office365.webp"
        )}

        {software_image_right(
          "img/Apps/icons/new-kdenlive-logo.png",

          "Kdenlive",

          ` KOOMPI want to offer a wide range of application to support the users need. The users can use Kdenlive for video editing as it is totally free and open source.`,

          "img/Apps/Kdenlive.webp"
        )}

        {software_image_left(
          "img/Apps/icons/Guvcview.png",

          "Guvcview",

          ` Already per-installed on KOOMPI is a free software webcam application to let users enjoy smoothly webcam experience.`,

          "img/Apps/Guvcview.webp"
        )}
      </div>
    </div>
  );
};

class Feature extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            Feature | Koompi mission is build and provide tools for the next
            generation of engineers, problem solvers and discoverers
          </title>
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
                  {/* <i className="fas fa-angle-right featureIcon" />
                  <i className="fas fa-angle-right featureIcon" /> */}
                  <a
                    href="https://goo.gl/jHSZRL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
