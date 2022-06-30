import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const OffCanvas = () => {
  return (
    <Fragment>
      <div className="offcanvas offcanvas-start" id="offcanvasExample">
        <div className="offcanvas-header">
          <div className="offcanvas-logo">
            <Link href={"/"}>
              <a>
                <Image
                  src="/static/assets/images/logo-1.png"
                  alt="BlockVerse Academy Logo"
                  height={56}
                  width={220}
                />
              </a>
            </Link>
          </div>

          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="offcanvas"
          >
            <i className="flaticon-close" />
          </button>
        </div>

        <div className="offcanvas-body">
          <div className="offcanvas-menu">
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
                <a href="#">Connect with our Mentor Panel</a>
              </li>

              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OffCanvas;
