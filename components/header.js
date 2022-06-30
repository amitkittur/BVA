import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      {/* <!-- Header Start  --> */}
      <div id="header" className="section header-section transparent-header">
        <div className="container" style={{ maxWidth: 1400 }}>
          {/* <!-- Header Wrap Start  --> */}
          <div className="header-wrap">
            <div className="header-logo">
              <div style={{ width: 220, height: 56, position: "relative" }}>
                <Link href={"/"}>
                  <a>
                    <Image
                      src="/static/assets/images/logo-1.png"
                      alt="BlockVerse Academy Logo"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="header-menu d-none d-lg-block">
              <ul className="main-menu">
                <li className="active-menu">
                  <a href="#home">Home</a>
                </li>
                <li className="active">
                  <a href="#mission">Our Mission</a>
                </li>
                <li>
                  <a href="#CBVA">Connect with BlockVerse</a>
                </li>

                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* <!-- Header Meta Start --> */}
            <div className="header-meta">
              {/* <!-- Header Info Start --> */}
              <div className="header-info d-none d-md-flex" />
              {/* <!-- Header Info End -->
                        <!-- Header Search Start --> */}
              <div className="header-search">
                <a className="search-btn" href="#">
                  <i className="flaticon-loupe" />
                </a>
                <div className="search-wrap">
                  <div className="search-inner">
                    <i
                      id="search-close"
                      className="flaticon-close search-close"
                    />
                    <div className="search-cell">
                      <form action="#">
                        <div className="search-field-holder">
                          <input
                            className="main-search-input"
                            type="search"
                            placeholder="Search Your Keyword..."
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Header Search End -->
                        <!-- Header Toggle Start --> */}
              <div className="header-toggle d-lg-none">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
              {/* <!-- Header Toggle End --> */}
            </div>
            {/* <!-- Header Meta End  --> */}
          </div>
          {/* <!-- Header Wrap End  --> */}
        </div>
      </div>
      {/* <!-- Header End --> */}
    </Fragment>
  );
};

export default Header;
