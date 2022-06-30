import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import OffCanvas from "./offcanvas";

const Layout = props => {
  return (
    <Fragment>
      <Header />
      <OffCanvas />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
