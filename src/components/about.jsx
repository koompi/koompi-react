import React from "react";
import Navbar from "./navbar";
import MemberState from "./states/member";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <title>
          About | Koompi mission is build and provide tools for the next
          generation of engineers, problem solvers and discoverers
        </title>
      </Helmet>
      <div className="backgroundAbout">
        <div className="ui container">
          <div className="ui divided grid">
            <div className="ui stackable two column grid">
              <div className="column aboutPadding ten wide">
                <h2>Misson</h2>
                <p>
                  Koompi mission is build and provide tools for the next
                  generation of engineers, problem solvers and discoverers.
                </p>
                <h2>About Us</h2>
                <p>
                  KOOMPI is a practical, affordable and effective entry-level
                  notebook computer specifically designed for performing all
                  daily tasks required for work and school. <br />
                  <br />
                  We've created a customized operating system of our own called
                  PionuxOS based on the well-known open-source Linux software.
                </p>
                <p>
                  Both our philosophy and software selections provide a perfect
                  fit with the sleek and practical KOOMPI hardware. Our
                  integrated software suite allows KOOMPI users to challenge
                  themselves as they explore their own personal world of
                  computing.
                </p>
              </div>
              <div className="column six wide">
                <img
                  className="ui fluid image koompi-about-image"
                  src="img/teamwork.svg"
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
