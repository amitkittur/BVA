import React, { Fragment } from "react";

const Intro = () => {
  return (
    <Fragment>
      <div
        className="section tech-hero-section"
        style={{ backgroundImage: "url(/static/assets/images/hero-1.jpg)" }}
        id="home"
      >
        <div className="shape-1" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="hero-content">
                <h3
                  className="sub-title"
                  data-aos-delay="600"
                  data-aos="fade-up"
                  style={{ fontSize: "20px!Important" }}
                >
                  <string>BlockVerse Academy</string>
                </h3>
                <h2 className="title" data-aos="fade-up" data-aos-delay="700">
                  The Next Generation of the internet is being built....
                </h2>
                <p data-aos="fade-up" data-aos-delay="800" />
                <div className="hero-btn">
                  <a className="btn" href="#sec">
                    Up skill yourself and become a builder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
