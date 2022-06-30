import React, { Fragment } from "react";
import Image from "next/image";

const UpSkill = () => {
  return (
    <Fragment>
      <div className="section service-section">
        <div className="container">
          <div className="service-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div
                  className="service-item text-center"
                  style={{
                    background:
                      "linear-gradient(148deg, #54d6eb 0%, #055fdd 100%)",
                    color: "#231e32;"
                  }}
                >
                  <div className="shape-1" />
                  <div
                    className="shape-2"
                    style={{ opacity: "1", visibility: "visible" }}
                  >
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-2.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#" style={{ color: "white!important" }}>
                        Upskilling Courses Available
                      </a>
                    </h3>
                    <p style={{ color: "white!important" }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6" id="sec">
                <div className="service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-12.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#">Partner Company Login</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-13.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#">Login to class</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-3.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#">More about BlockVerse</a>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-14.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#">Frequently asked questions</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-11.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#">Our team</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-15.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#">Partner with BlockVerse</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-item text-center">
                  <div className="shape-1" />
                  <div className="shape-2">
                    <Image
                      src="/static/assets/images/service/s-shape-2.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="service-icon">
                    <Image
                      src="/static/assets/images/service/service-16.png"
                      alt=""
                      height={100}
                      width={67}
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="#">Take your Test</a>
                    </h3>
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

export default UpSkill;
