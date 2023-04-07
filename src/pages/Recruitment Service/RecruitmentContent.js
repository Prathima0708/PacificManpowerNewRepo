import React from "react";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";

const RecruitmentContent = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg={6} style={{ lineHeight: "2em", fontStyle: "Ubuntu" }}>
              <div className="section-title mt-4 mt-lg-0">
                <p className="text-muted">
                  If you are a Recruitment Agency or your business requires a
                  Recruitment Service and would like to seek the assistance from
                  Pacific Manpower, please contact us today on the following
                  form. Complete the details below and we shall get back to
                  within the next working day.
                </p>
                <h6
                  style={{
                    fontFamily: "Ubuntu",
                    letterSpacing: "2px",
                    fontSize: "18px",
                  }}
                >
                  Postal Address
                </h6>{" "}
                <p className="text-muted">
                  {" "}
                  PO Box 876,
                  <br /> Konedobu, NCD,
                  <br /> Papua New Guinea
                </p>
                <h6
                  style={{
                    fontFamily: "Ubuntu",
                    letterSpacing: "2px",
                    fontSize: "18px",
                  }}
                >
                  Head Office
                </h6>{" "}
                <p className="text-muted">
                  {" "}
                  Level 3 Burns Haus,
                  <br />
                  20 Champion Parade,
                  <br /> Downtown, Port Moresby
                </p>
                <Form
                  method="post"
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                >
                  <span id="error-msg"></span>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="nameInput" className="form-label">
                          Name
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                          Email
                        </Label>
                        <Input
                          type="email"
                          className="form-control"
                          id="emaiol"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </Col>
                    {/* <Col md={6}>
                  <div className="mb-3">
                    <Label htmlFor="subjectInput" className="form-label">
                      Subject
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Enter your subject"
                    />
                  </div>
                </Col> */}
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="meassageInput" className="form-label">
                          Your Message
                        </Label>
                        <textarea
                          className="form-control"
                          placeholder="Enter your message"
                          name="comments"
                          rows="3"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-end">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                      {" "}
                      Send Message <i className="uil uil-message ms-1"></i>
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default RecruitmentContent;
