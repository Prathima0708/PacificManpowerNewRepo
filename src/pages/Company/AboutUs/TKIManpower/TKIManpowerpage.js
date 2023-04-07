import React from "react";
import { Col, Container, Row } from "reactstrap";

const TKIManpowerpage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} style={{ lineHeight: "2.2em" }}>
              <ul>
                <li>
                  TKI Manpower has been providing services to the OK Tedi Mine
                  for the last 22 years and is recognized as a provider of
                  highly skilled PNG national and Expatriates.
                </li>

                <li>
                  The TKI Manpower team is very experienced in relation to our
                  core services and has an experienced team to manage our large
                  workforce located at many locations including the Mine, Mill,
                  Workshops, Administration, Tunnels, Properties, Bige and
                  Kiunga.
                </li>
                <li>
                  If you require any Shutdown, Short Term or Long term staffing
                  requirements please contact the Site Manager at TKI Manpower
                </li>
              </ul>
              <br />
              <p>
                <h5>Contact</h5>
                TKI Manpower
                <br />
                Site Manager - John Thorne
              </p>
              <p>
                TKI Manpower P.O.
                <br /> Box 292
                <br /> Tabubil, WP <br />
                Ph:6499623
                <br /> Fax:6499628
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TKIManpowerpage;
