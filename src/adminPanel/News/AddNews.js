import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { subURL } from "../../utils/URLs";

const AddNews = () => {
  const [filename, setFilename] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescp, setNewsDescp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    async function storeData() {
      const formData = new FormData();
      formData.append("news_title", newsTitle);
      formData.append("news_description", newsDescp);
      formData.append("news_image", filename);
      formData.append("user_account_id", 1);

      console.log("formdata before post req", formData);

      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/trendingnews/`, formData, {
          headers: headers,
        });
        console.log(res.data);

        if (res.status === 201) {
          console.log("success");
          // setSuccessMessage("Data saved successfully!");
          // setShowModal(true);
          // do something to log the user in, e.g. redirect to a dashboard page
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }

    storeData();
    setNewsTitle("");
    setNewsDescp("");
    setFilename("");
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Post a News !</h5>
              </div>
            </Col>
          </Row>
          <form
            action="#"
            className="job-post-form shadow mt-4"
            onSubmit={handleSubmit}
          >
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      News Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Title"
                      value={newsTitle}
                      onChange={(e) => setNewsTitle(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="newsdescription" className="form-label">
                      News Description
                    </Label>
                    <textarea
                      className="form-control"
                      id="newsdescription"
                      rows="3"
                      placeholder="Enter news Description"
                      value={newsDescp}
                      onChange={(e) => setNewsDescp(e.target.value)}
                    ></textarea>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label for="newsImage">News Image</Label>
                    <Input
                      type="file"
                      name="newsImage"
                      id="newsImage"
                      onChange={(e) => setFilename(e.target.files[0])}
                    />
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/admin" className="btn btn-success">
                      Back
                    </Link>
                    <Button to="#" className="btn btn-purple">
                      Submit <i className="mdi mdi-send"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AddNews;
