import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import TKIManpowerpage from "./TKIManpowerpage";

const TKIManpower = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Landowner Joint Ventures</title>
      </MetaTags>
      <Section />
      <TKIManpowerpage />
    </React.Fragment>
  );
};

export default TKIManpower;
