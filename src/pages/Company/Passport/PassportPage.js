import React from "react";
import { Col, Container, Row } from "reactstrap";

const PassportPage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} style={{lineHeight:'2.1em'}}>
              <ul>
                <li>
                  Use our in house team to complete and manage the lodgement of
                  all Visa's and Work permits for Expat employees
                </li>
                <li>
                  Our team has in excess of 10 years experience with the Labour
                  and Immigration Departments
                </li>
                <li>Lodge PNG visa applications for overseas visitors</li>
                <li>
                  Lodgement of PNG passport and all overseas Visa applications
                  for your PNG Staff travelling overseas for training courses
                  etc
                </li>
                <li>PNG Birth certificates arranged</li>
                <li>Prompt, Efficient and Cost effective service</li>
                <li>
                  Avoid the complexities of your Immigration needs, with the
                  experienced team at Pacific Manpower.
                </li>
                <li>
                  {" "}
                  <span style={{ color: "red" }}>Call us</span> now for a free
                  consultation and our rates
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PassportPage;
