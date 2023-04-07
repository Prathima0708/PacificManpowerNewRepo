import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, Col, Input, Row } from "reactstrap";

const RightSideContent = () => {
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/spacificmanpower/trendingnews/${id}`)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4 candidate-personal-detail">
            <div>
              <h6
                className="fs-17 fw-semibold mb-3 "
                style={{
                  backgroundColor: "#F7F9F9",
                  padding: "1em",
                  fontFamily: "Ubuntu",
                  letterSpacing: "2px",
                  fontSize: "20px",
                }}
              >
                {/* Newcrest Employees awarded Australian Scholarships */}
                {newsData.news_title}
              </h6>
              <p
                className="text-muted mb-2"
                style={{
                  lineHeight: "2.3em",
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                {/* Newcrest congratulated its Lihir employees Lyndon Gorie and
                Kelvin Gurra, who have received prestigious Australia Awards
                scholarships to undertake further study in Australia, beginning
                in 2019. Lyndon - an electrical engineer currently working in
                Process Control - hopes to undertake his Masters in Electrical
                Engineering in Queensland. Kelvin - Superintendent, Human
                Resources - hopes to study a Masters in Human Resources in
                Melbourne. They have both been working at Lihir for 10 years.
                "Newcrest encourages all our employees to continue to learn,
                train and develop, to help them reach leadership and technical
                professional roles," said Sally Dawkins, Manager, Social "Kelvin
                and Lyndon's hard work and potential have been recognised by
                these important Investment & National Engagement (PNG).
                scholarships, and we know they will make the most of this
                exciting opportunity." Lyndon and Kelvin are among 90 Australia
                Award recipients from PNG who will commence study in Australia
                in 2019. The awardees were honoured at a dinner on October 13 in
                Port Moresby, attended by the Minister for Public Service Elias
                Kapavore and senior members of the Australian High Commission.
                "Newcrest has given me so much during my career," said Kelvin.
                "I am excited about studying in Melbourne, and then I want to
                bring my new skills and experiences home, to give back to
                Newcrest and to PNG." The Australia Awards Scholarships include
                a range of short and long-term study options, offered by the
                Australian government to Papua New Guinea's existing and future
                leaders. Through study and research, recipients develop the
                knowledge and skills to drive change, influence PNG's
                development and build enduring links with Australia. More than
                11,000 Papua New Guineans have studied in Australia under the
                Australia awards, which also provide scholarships for study in
                PNG. Newcrest is a proud supporter of the Australia awards
                program. */}
                {newsData.news_description}
              </p>
              <br />
              <div className="learn-more">
                <Link to="/news" className="form-text text-danger">
                  <i className="uil uil-angle-left-b"></i>Back to news{" "}
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
