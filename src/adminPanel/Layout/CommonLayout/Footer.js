import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer = [
    {
      id: 1,
      title: "Discover",
      menu: [
        {
          id: 1,
          link: "/aboutus",
          subTitle: "About Us",
        },
        {
          id: 2,
          link: "/contact",
          subTitle: "Contact Us",
        },
        // {
        //   id: 3,
        //   link: "/services",
        //   subTitle: "Services",
        // },
        // {
        //   id: 4,
        //   link: "/blog",
        //   subTitle: "Blog",
        // },
        // {
        //   id: 5,
        //   link: "/team",
        //   subTitle: "Team",
        // },
        // {
        //   id: 6,
        //   link: "/pricing",
        //   subTitle: "Pricing",
        // },
      ],
    },
    {
      id: 2,
      title: "Core Service",
      menu: [
        {
          id: 1,
          link: "/manpower",
          subTitle: "Manpower",
        },
        {
          id: 2,
          link: "/recruitment",
          subTitle: "Recruitment",
        },
        {
          id: 3,
          link: "/payroll",
          subTitle: "Payroll",
        },
        {
          id: 4,
          link: "/technical",
          subTitle: "Technical Services",
        },
      ],
    },
    // {
    //   id: 3,
    //   title: "For Candidates",
    //   menu: [
    //     {
    //       id: 1,
    //       link: "/candidatelist",
    //       subTitle: "Candidate List",
    //     },
    //     {
    //       id: 2,
    //       link: "/candidategrid",
    //       subTitle: "Candidate Grid",
    //     },
    //     {
    //       id: 3,
    //       link: "/candidatedetails",
    //       subTitle: "Candidate Details",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Support",
    //   menu: [
    //     {
    //       id: 1,
    //       link: "/contact",
    //       subTitle: "Help Center",
    //     },
    //     {
    //       id: 2,
    //       link: "/faqs",
    //       subTitle: "FAQ'S",
    //     },
    //     {
    //       id: 3,
    //       link: "/privacyandpolicy",
    //       subTitle: "Privacy Policy",
    //     },
    //   ],
    // },
  ];
  const footerIcons = [
    {
      id: 1,
      socialIcon: "uil uil-facebook-f",
    },
    {
      id: 2,
      socialIcon: "uil uil-linkedin-alt",
    },
    {
      id: 3,
      socialIcon: "uil uil-google",
    },
    {
      id: 4,
      socialIcon: "uil uil-twitter",
    },
  ];
  return (
    <React.Fragment>
      <section className="bg-footer">
        <Container>
          <Row>
            {/* <Col lg={4}>
              <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                <h4 className="text-white mb-4">Pacific Manpower</h4>
                <p className="text-white-50">
                  It is a long established fact that a reader will be of a page
                  reader will be of at its layout.
                </p>
                <p className="text-white mt-3">Follow Us on:</p>
                <ul className="footer-social-menu list-inline mb-0">
                  {footerIcons.map((footerIcondetails, key) => (
                    <li className="list-inline-item" key={key}>
                      <Link to="#">
                        <i className={footerIcondetails.socialIcon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col> */}
            {/* {footer.map((footerdetails, key) => (
              <Col lg={2} xs={6} key={key}>
                <div className="footer-item mt-4 mt-lg-0">
                  <p className="fs-16 text-white mb-4">{footerdetails.title}</p>
                  {(footerdetails.menu || []).map((menuInner, key) => (
                    <ul className="list-unstyled footer-list mb-0" key={key}>
                      <li>
                        <Link to={menuInner.link}>
                          <i className="mdi mdi-chevron-right"></i>{" "}
                          {menuInner.subTitle}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </Col>
            ))} */}

            <Col lg={2} xs={6} style={{ fontFamily: "Poppins" }}>
              <div className="footer-item mt-4 mt-lg-0">
                <p className="fs-16 text-white mb-4">Address</p>

                <ul className="list-unstyled footer-list mb-0 text-white-50">
                  <li>P.O. Box 876 Konedobu, NCD Papua New Guinea</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} xs={6} style={{ fontFamily: "Poppins" }}>
              <div className="footer-item mt-4 mt-lg-0">
                <p className="fs-16 text-white mb-4">Contact</p>

                <ul className="list-unstyled footer-list mb-0 text-white-50">
                  <li>
                    Tel (+675) 70311391/392/393/394 <br />
                    Fax (+675) 3210131 contact@pacificmanpower.com.pg
                  </li>
                </ul>
              </div>
            </Col>
            {footer.map((footerdetails, key) => (
              <Col lg={2} xs={6} key={key} style={{ fontFamily: "Poppins" }}>
                <div className="footer-item mt-4  mt-lg-0">
                  <p className="fs-16 text-white mb-4">{footerdetails.title}</p>
                  {(footerdetails.menu || []).map((menuInner, key) => (
                    <ul className="list-unstyled footer-list mb-0" key={key}>
                      <li>
                        <Link to={menuInner.link}>
                          <i className="mdi mdi-chevron-right"></i>{" "}
                          {menuInner.subTitle}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="text-white-50 text-center mb-0">
                {new Date().getFullYear()} &copy; Jobcy - Job Listing Page
                Template by{" "}
                <Link
                  to="//themesdesign.in/"
                  target="_blank"
                  className="text-reset text-decoration-underline"
                >
                  Themesdesign
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div> */}
    </React.Fragment>
  );
};

export default Footer;
