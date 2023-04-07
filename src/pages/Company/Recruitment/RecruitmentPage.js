import React from "react";
import { Col, Container, Row } from "reactstrap";

const RecruitmentPage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} style={{lineHeight:'2.1em'}}>
              <ul>
                <li>
                  Our recruitment services aim to take the hassle out of finding
                  new staff, our database offers considerable cost savings and
                  efficiencies, in our aim to supply quality staff for your
                  business.
                </li>
                <li>
                  Our team will work with you to set the requirements, job
                  descriptions and your other needs
                </li>
                <li>
                  We offer a full recruitment service including advertising,
                  interviews, reference checking
                </li>
                <li>
                  Our recruitment service offers the ability to recruit directly
                  for the client or to supply as a manpower contract for the
                  probationary period (excluding Expats).
                </li>
                <li>
                  Recruitment service available for PNG Nationals, Other Country
                  Nationals (OCNs) and Expatriates
                </li>
                <li>
                  Positions can be advertised on all media including a free
                  listing on our Job Seeker section on this website.
                </li>
                <li>
                  A very cost effective service with a fixed upfront fee
                  structure.
                </li>

                <li>
                  {" "}
                  <span style={{ color: "red" }}>Call the</span> Recruitment
                  team today and find your next Staff member with Pacific
                  Manpower
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default RecruitmentPage;
