import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import LandOwnerPage from "./LandOwnerPage";

const LandOwner = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Landowner Joint Ventures</title>
      </MetaTags>
      <Section />
      <LandOwnerPage />
    </React.Fragment>
  );
};

export default LandOwner;
