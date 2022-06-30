import React, { Fragment } from "react";

export const About = () => {
  return (
    <Fragment>
      <div
        className="section features-section"
        style={{
          backgroundImage: "url(/static/assets/images/bg/features-bg.jpg)"
        }}
      >
        <div
          className="features-thumb d-flex align-items-start"
          style={{ marginTop: "15px" }}
        >
          <div className="shape-1">
            <img src="/static/assets/images/features-shape.png" alt="" />
          </div>
          <div className="image">
            <img src="/static/assets/images/features-img.png" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="features-wrap">
            <div className="row">
              <div className="col-xl-7 offset-xl-5">
                <div className="features-content-wrap" id="knowBVA">
                  <div className="section-title">
                    <h3 className="sub-title" id="CBVA">
                      Know about BlockVerse
                    </h3>
                    <h2 className="title" style={{ fontSize: "26px" }}>
                      We aim to upskill technical talent for <br />Blockchain
                      Web 3.0 and Metaverse related technologies{" "}
                    </h2>
                  </div>

                  <div className="features-content">
                    <div className="section-title ">
                      <h3 className="sub-title">Why these areas</h3>
                    </div>
                    <ul>
                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-1.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            All young and exciting fields
                          </h3>
                        </div>
                      </li>

                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-2.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            Offer High quality and High paying jobs globally
                          </h3>
                        </div>
                      </li>

                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-3.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            All expected to grow exponentially in the future
                          </h3>
                        </div>
                      </li>

                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-4.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            Offer immense opportunities to specialise further{" "}
                          </h3>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="features-content">
                    <div className="section-title ">
                      <h3 className="sub-title">Why BlockVerse</h3>
                    </div>
                    <ul>
                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-1.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            Immersive Instructor Led training in the Metaverse
                          </h3>
                        </div>
                      </li>

                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-2.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            World className faculty who are also practitioners
                            in their fields
                          </h3>
                        </div>
                      </li>

                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-3.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            BlockVerse has an extensive network of companies
                            keen to recruit specialised talent
                          </h3>
                        </div>
                      </li>

                      <li className="features-item">
                        <div className="features-icon">
                          <img
                            src="/static/assets/images/features-4.png"
                            alt=""
                          />
                        </div>
                        <div className="features-text">
                          <h3 className="title" style={{ fontSize: "15px" }}>
                            Innovative teaching style and curriculum
                          </h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
