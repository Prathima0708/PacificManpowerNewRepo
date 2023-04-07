import React from "react";
import MetaTags from "react-meta-tags";
import ManpowerPage from "./ManpowerPage";
import Section from "./Section";

const Manpower = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Manpower</title>
      </MetaTags>
      <Section />
      <ManpowerPage />
    </React.Fragment>
  );
};

export default Manpower;
