import React from "react";
import { Col, Container, Row } from "reactstrap";

const PayrollPage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} style={{lineHeight:'2.1em'}}>
              <ul>
                <li>
                  Due to the experience we have gained in our own company
                  payrolls, we offer a service to improve your payroll system
                </li>
                <li>
                  We offer a payroll service for small and medium companies.
                </li>
                <li>
                  Fully computerised payroll system to calculate your payroll,
                  taxation and NPF
                </li>
                <li>Hard and soft copies of reports provided</li>

                <li>
                  {" "}
                  <span style={{ color: "red" }}>Call us</span> and we will make
                  fortnightly payroll easy.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PayrollPage;
