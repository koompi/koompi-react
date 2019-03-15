import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="bannerPage">
      <div className="bannerBackground">
        <div className="bannerText">
          <h1 className="bannerTitle">Koompi Kosmos</h1>
          <p className="bannerDesc">beautiful, high performance, affordable</p>
          <h6 className="leanMoreBanner">
            <Link to="/retailers">
              <i className="fas fa-angle-right" /> GET KOOMPI
            </Link>
          </h6>
          <p>
            KOOMPI is a practical, affordable and effective entry level laptop.
            It can perform daily tasks for working and schooling. We
            customized...
            <a href="/about-us">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Shapelines = () => {
  return (
    <React.Fragment>
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
                        13.3"
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
                  src="img/koompi-beauty-1.jpg"
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
          src="img/Presentation-Price.jpg"
          className="koompi-gallery"
          alt="koompi-gallery"
        />
      </div>
    </React.Fragment>
  );
};

const Screen = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">Screen</h4>
                <h2 className="fontWidth">
                  FHD IPS Panel with Anti-glare Glasses
                </h2>
                <p className="websiteContent">
                  KOOMPI works out-of-the-box with handpicked software that is
                  needed in everyday computing. Check out ourfeatures for more
                  details.
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
                      <h5 className="beautyDetailTitle">
                        Screen to body ratio
                      </h5>
                      <h3 className="beautyDetailDesc">73.44%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <img
                  src="img/screen.png"
                  className="koompiBeautyImg"
                  alt="koompi-screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Performance = () => {
  return (
    <div className="performanceBack">
      <div>
        <div className="ui stackable two column grid">
          <div className="row removeShadow">
            <div className="six wide column performanceImage">
              <img
                src="img/koompi-performance.png"
                heigh="400px"
                className="mobile hidden"
                alt="koompi-performance"
              />
              <img
                src="img/koompi-performance1.png"
                heigh="400px"
                className="mobile only"
                alt="koompi-performance"
              />
            </div>
            <div className="eight wide column">
              <div className="performancePadding">
                <h5>Unprecedented Performance</h5>
                <p>
                  KOOMPI, the sleek and lightweight next generation tool offers
                  an experience that’s next to none, combining modest hardware
                  with powerful open-source software. A multi-purpose enabler,
                  Koompi seeks to empower Cambodian youth as the creators and
                  innovators of tomorrow. A packaged functional environment that
                  lets the user focus on the challenges and not on the tools.
                  Powerful yet easy and light enough to carry almost anywhere.
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
  );
};

const Battery = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <div className="beautyPadding">
          <div className="ui vertically divided grid">
            <div className="ui stackable two column grid">
              <div className="column controlColor">
                <h4 className="smallTitle">BATTERY</h4>
                <h2 className="fontWidth">Faster Charging, Longer living</h2>
                <p className="websiteContent">
                  We have designed the beautiful ultra thin of battery that last
                  for 7-hour with special high-capacity as 5000mAh.
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
                  src="img/koompi-battery.png"
                  className="koompiBattery"
                  alt="koompi-battery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {Banner()}
        {Shapelines()}
        {Screen()}
        {Performance()}
        {Battery()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
