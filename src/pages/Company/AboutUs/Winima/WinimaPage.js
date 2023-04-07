import React from "react";
import { Col, Container, Row } from "reactstrap";

const WinimaPage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} style={{ lineHeight: "2.1em" }}>
              <p>
                This is another exciting Joint Venture between the Hidden Valley
                mine landowners, Winima Investments which represents directly
                one grouping of the Hidden Valley landowners, has entered into a
                JV with Pacific Manpower to provide our core services to the
                mine and the wider Lae community.
              </p>
              <p>
                Winima is represented in the JV by the Chairman Mr Samson Kawa
                and Mr Kiwi Mauri. The JV is located at the MMJV Hidden Valley
                Mine site. The team will provide our core services of Manpower,
                Recruitment and Immigration services.
              </p>
              <p>
                <h5 style={{ fontFamily: "Poppins" }}>Contact</h5>
                Lee Robertson <br />
                Business Development Manager <br /> Email:
                bdmpom@pacificmanpower.com.pg <br />
                Mobile - 7327 9301
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default WinimaPage;
