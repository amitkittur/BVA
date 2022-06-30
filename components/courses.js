// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Fragment } from "react";

const Courses = () => {
  const fnShowApply = value => {
    console.log(value);
  };

  const handleMouseOver = myswipper => {
    myswipper.autoplay = false;
  };

  return (
    <Fragment>
      <div className="section case-study-section section-padding">
        <div className="container">
          <div className="case-study-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">Apply for a course</h3>
              <h2 className="title">Blockchain - Basic to Advanced Courses</h2>
            </div>
          </div>
        </div>
        <div className="case-study-slider-wrap" id="course">
          <Swiper
            className="mySwiper"
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={2}
          >
            <div className="swiper-container case-study-active">
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div
                      className="single-case-study text-center"
                      style={{
                        backgroundImage:
                          "url(/static/assets/images/c-study-1.jpg)"
                      }}
                    >
                      <div className="case-study-content">
                        <div className="case-study-title">
                          <h3 className="title">
                            Blockchain <br /> Developer <br />for HL Fabric
                          </h3>
                          <span>Blockchain</span>
                        </div>
                        <div className="case-study-text">
                          <p>
                            Take this course to kickstart your career as a
                            Blockchain Developer in one of the most popular
                            enterprise network - HL Fabric. You can also take up
                            the role of Backend Software Developer/ Engineer
                            skills in Node.js, Docker.{" "}
                          </p>
                        </div>
                        <div className="row jusify-content-center">
                          <div className="case-study-btn text-center">
                            <a
                              className="btn"
                              id="hl"
                              onClick={fnShowApply("h1")}
                            >
                              Apply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div
                      className="single-case-study text-center"
                      style={{
                        backgroundImage:
                          "url(/static/assets/images/c-study-2.jpg)"
                      }}
                    >
                      <div className="case-study-content">
                        <div className="case-study-title">
                          <h3 className="title">
                            Blockchain <br />for Business
                          </h3>
                          <span>Blockchain</span>
                        </div>
                        <div className="case-study-text">
                          <p>
                            In this course you will be prepared for Hyperledger
                            Fabric certification Gain practical knowledge and
                            skills in programming using Node.js, deployment of
                            programs using Docker and connect your codes with
                            the private blockchain network - HL Fabric. You will
                            also learn to create and deploy apps on the HL
                            Fabric network.
                          </p>
                        </div>
                        <div className="row jusify-content-center">
                          <div className="case-study-btn text-center">
                            <a
                              className="btn"
                              id="business"
                              onClick={fnShowApply("business")}
                            >
                              {" "}Apply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div
                      className="single-case-study text-center"
                      style={{
                        backgroundImage:
                          "url(/static/assets/images/c-study-3.jpg)"
                      }}
                    >
                      <div className="case-study-content">
                        <div className="case-study-title">
                          <h3 className="title">Blockchain</h3>
                          <span>IT Technology</span>
                        </div>
                        <div className="case-study-text">
                          <p>
                            Accelerate innovation with world-className tech
                            teams We’ll match you to an entire remote team of
                            incredible freelance talent for all your software
                            development needs.
                          </p>
                        </div>
                        <div className="row jusify-content-center">
                          <div className="case-study-btn text-center">
                            <a
                              className="btn"
                              id="basic"
                              onClick={fnShowApply("basic")}
                            >
                              Apply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>

              <div className="case-study-arrow swiper-button-next" />
              <div className="case-study-arrow swiper-button-prev" />

              <div className="swiper-pagination" />
            </div>
          </Swiper>
        </div>
        <div className="row jusify-content-center">
          <div className="case-study-btn text-center">
            <a className="btn" href="#">
              See More Courses
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Courses;
