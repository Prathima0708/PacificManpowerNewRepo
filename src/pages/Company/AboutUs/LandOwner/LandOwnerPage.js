import React from "react";
import { Col, Container, Row } from "reactstrap";

const LandOwnerPage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} style={{ lineHeight: "2.1em" }}>
              <p>
                It is part of our company mission statement to develop
                successful Landowner Joint Ventures and partnerships.
              </p>
              <p>
                This provides us with Harmonious business relationships in
                resource areas, while allowing us to build a national brand and
                operation
              </p>
              <p>
                As part of our growth we seek to develop our landowner joint
                ventures to benefit the local resource owners and also to
                develop a nationwide service for our clients to source manpower.
              </p>
              <p>
                The JVs have full access to all the Pacific Manpower resources
                and database
              </p>
              <p>
                We currently have joint venture on Lihir Island and will be
                announcing new IV's shortly
              </p>
              <p>
                If you represent resource landowners and would like to discuss a
                business opportunity, please contact our office.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LandOwnerPage;
