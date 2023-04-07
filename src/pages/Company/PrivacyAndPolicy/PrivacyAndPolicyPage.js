import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const PrivacyAndPolicyPage = () => {
  const privacyandpolicyPage = [
    {
      id: 1,
      // policyTitle: "Use for Jobcy",
      policyRules: [
        {
          id: 1,
          policyInnerRule:
            " Our Expertriate IT consultant is highly qualified and has worked for many major organisation. Talk to us to provide our highly skilled IT consultant support for your Network, Hardware, Software, security issues.",
        },
        {
          id: 2,
          policyInnerRule: " LAN and WAN Network design & deployment services",
        },
        {
          id: 3,
          policyInnerRule:
            " This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Jobcy. This policy is not applicable to any information collected offline or via channels other than this website.",
        },
        {
          id: 4,
          policyInnerRule:
            " Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity to our website with regards to the information that they shared and/or collect in Jobcy. This policy is not applicable to any information collected offline or via channels other than this website.",
        },
      ],
    },
    {
      id: 2,
      policyTitle: "We use your information to :",
      policyRules: [
        {
          id: 1,
          policyInnerRule: "  Digital Marketing Solutions for Tomorrow",
        },
        {
          id: 2,
          policyInnerRule: " Our Talented & Experienced Marketing Agency",
        },
        {
          id: 3,
          policyInnerRule:
            " It is said that song composers of the past used texts.",
        },
        {
          id: 4,
          policyInnerRule: " Create your own skin to match your brand",
        },
      ],
    },
    {
      id: 3,
      policyTitle: "Privacy and copyright protection",
      policyRules: [
        {
          id: 1,
          policyInnerRule:
            '  There is now an <b className=text-danger>"abundance</b> of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.',
        },
        {
          id: 2,
          policyInnerRule:
            " It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
        },
      ],
    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            {/* {privacyandpolicyPage.map((privacyandpolicyDetails, key) => (
              <Col lg={12} key={key}>
                <h5 className="mb-4">{privacyandpolicyDetails.policyTitle}</h5>
                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                  {privacyandpolicyDetails.policyRules.map(
                    (privacyandpolicyInner, key) => (
                      <li key={key}>{privacyandpolicyInner.policyInnerRule}</li>
                    )
                  )}
                </ul>
              </Col>
            ))} */}
            <Col lg={8} style={{lineHeight:'2.1em'}}>
              <p>
                Our Expertriate IT consultant is highly qualified and has worked
                for many major organisation. Talk to us to provide our highly
                skilled IT consultant support for your Network, Hardware,
                Software, security issues.
              </p>
              <ul>
                <li>LAN and WAN Network design & deployment services</li>
                <li>Microsoft Domain & Active Directory Solutions</li>
                <li>File servers and Storage Solutions</li>
                <li>Data Backup and Recovery solutions</li>
                <li>Tier 1-3 desktop & server support</li>
                <li>Onsite & remote services</li>
                <li>Hardware & software procurement</li>
                <li>Asset management services</li>
                <li>Firewall Solution</li>
                <li>All Windows Server Operating Systems Support</li>
                <li>Anti Virus Solutions</li>
                <li>Microsoft Office System 2003 | 2007 | 2010 | 2013</li>
                <li>Attendance system solution</li>
              </ul>
            </Col>
            <div className="text-end">
              <Link to="#" className="btn btn-primary">
                <i className="uil uil-print"></i> Print
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PrivacyAndPolicyPage;
