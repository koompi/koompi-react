import React from "react";
import Navbar from "./navbar";
import MemberState from './states/member';
import Footer from "./footer";
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
            <title>About | Koompi mission is build and provide tools for the next generation of
      engineers, problem solvers and discoverers</title>
        </Helmet>
      <Navbar />
      <div className="backgroundAbout">
        <div className="ui container">
          <div className="ui divided grid">
            <div className="ui stackable two column grid">
              <div className="column aboutPadding ten wide">
                <h2>Story</h2>
                <p>
                  Begin with an enthusiastic mastermind creator behind the
                  KOOMPI. We come to think that laptop is the bridge to new
                  skills and knowledge. Inspired by គម្ពីរ known as BOOK OF
                  KNOWLEDGE . KOOMPI also want to be a book full of knowledge to
                  everyone too. So that way. WE ARE BORN.
                </p>
                <h2>About Us</h2>
                <p>
                  KOOMPI is a practical, affordable and effective entry level
                  laptop. High-end perform daily tasks for working and
                  schooling. Create with a customized operating system by our
                  own called, KramaOS based on well-known open source Linux.
                  Both philosophy and design fit specifically with KOOMPI’s
                  hardware.
                </p>
                <p>
                  Generate better daily users experience to engage more people
                  into computing and digital. Because it here to create the
                  functional environment to let user focus on challenge not a
                  tool itself.
                </p>
              </div>
              <div className="column six wide">
                <img
                  className="ui fluid image koompi-about-image"
                  src="img/koompi-about.svg"
                  alt="koompi-about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* about state components */}
      <MemberState />
      <Footer />
    </React.Fragment>
  );
};

export default About;
