import React, { Fragment } from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <Fragment>
      <div className="section about-section section-padding">
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-thumb-wrap">
                  <div className="about-thumb-small">
                    <Image
                      src="/static/assets/images/about-2.jpg"
                      alt=""
                      height={292}
                      width={410}
                    />
                  </div>
                  <div className="about-thumb-big">
                    <Image
                      src="/static/assets/images/about-1.jpg"
                      alt=""
                      height={292}
                      width={410}
                    />
                  </div>
                  <div className="about-thumb-shape">
                    <Image
                      src="/static/assets/images/ab-shape.png"
                      alt=""
                      height={292}
                      width={410}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h3 className="sub-title" id="mission">
                      Our Mission
                    </h3>
                    <h2 className="title" style={{ fontSize: "28px" }}>
                      Building diverse talent for the next generation of the
                      internet and becoming the preferred technology partner of
                      companies that are creating it.
                    </h2>
                  </div>
                  <div className="about-author-list">
                    <div className="about-list">
                      <ul>
                        <li>
                          <i className="fas fa-check" />{" "}
                          <a href="#">Building diverse talent</a>
                        </li>
                        <li>
                          <i className="fas fa-check" />{" "}
                          <a href="#">
                            Upskilling on technologies related to the new
                            Internet <br />(Blockchain, Web 3, Metaverse)
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-check" />{" "}
                          <a href="#">
                            Partnership with cutting edge companies
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Mission;
