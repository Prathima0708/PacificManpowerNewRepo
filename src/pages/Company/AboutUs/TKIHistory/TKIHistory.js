import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import TkiHistoryPage from "./TkiHistoryPage";

const TKIHistory = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>TKI History</title>
      </MetaTags>
      <Section />
      <TkiHistoryPage />
    </React.Fragment>
  );
};

export default TKIHistory;
