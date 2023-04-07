import React from "react";
import Home from "../Home";
import Section from "../Layout3/Section";
import MetaTags from "react-meta-tags";
import NavBar from "../../../Layout/CommonLayout/NavBar";

const Layout3 = () => {
  return (
    <>
      <MetaTags>
        <title>Home</title>
      </MetaTags>
      <Section />
      <Home />
    </>
  );
};
export default Layout3;
