import React from "react";
import { Col, Container, Row } from "reactstrap";

const TechnicalPage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} style={{lineHeight:'2.1em'}}>
              <ul>
                <li>
                  Pacific Manpower has a wide experience in engineering and
                  construction projects.
                </li>
                <li>
                  Qualified and experienced engineering and construction team.
                </li>
                <li>Solid track record in Projects throughout the country.</li>
                <li>
                  Project Management, Fixed price Projects, Labour and
                  Supervision supply
                </li>
                <li>Pacific Manpower offers the total solution</li>

                <li>
                  {" "}
                  <span style={{ color: "red" }}>Call </span> any of our
                  management team for assistance.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TechnicalPage;
