import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "../NewsList/Section";
import Selected from "../NewsList/Selected";
import { Container } from "reactstrap";
import Listing from "./Listing";

const NewsList = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Manage Jobs</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <Listing />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default NewsList;
