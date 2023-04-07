import React from "react";
import { MetaTags } from "react-meta-tags";
import WinimaPage from "./WinimaPage";
import Section from "./Section";

const Winima = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Winima Pacific Manpower</title>
      </MetaTags>
      <Section />
      <WinimaPage />
    </React.Fragment>
  );
};

export default Winima;
