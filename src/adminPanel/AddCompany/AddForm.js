import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { subURL } from "../../utils/URLs";
import axios from "axios";

const AddForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [businessStream, setBusinessStream] = useState("");

  const [companyWebsite, setCompanyWebsite] = useState("");
  const [establishmentDate, setEstablishmentDate] = useState("");
 
  const [filename, setFilename] = useState("");
  const [businessStreamOptions, setBusinessStreamOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchBusinessStreamOptions = async () => {
      const response = await fetch(`${subURL}/business_stream/`);
      const data = await response.json();
      console.log(data);
      setBusinessStreamOptions(data);
    };

    fetchBusinessStreamOptions();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    async function storeData() {
      // const formData = {
      //   company_name: companyName,
      //   profile_description: profileDescription,
      //   business_stream_id: businessStream,
      //   establishment_date: establishmentDate,
      //   company_website_url: companyWebsite,
      //   company_image: companyImage,
      // };
      const formData = new FormData();
      formData.append("company_name", companyName);
      formData.append("profile_description", profileDescription);
      formData.append("business_stream_id", businessStream);
      formData.append("establishment_date", establishmentDate);
      formData.append("company_website_url", companyWebsite);
      formData.append("company_image", filename);
      console.log("formdata before post req", formData);

      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(
          `${subURL}/company_save_details/`,
          formData,
          { headers: headers }
        );
        console.log(res.data);

        if (res.status === 201) {
          console.log("success");
          setSuccessMessage("Data saved successfully!");
          setShowModal(true);
          // do something to log the user in, e.g. redirect to a dashboard page
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }

    storeData();
    setCompanyName("");
    setProfileDescription("");
    setBusinessStream("");
    setEstablishmentDate("");
    setCompanyWebsite("");
    setFilename("");
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Add Company Details!</h5>
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
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      Company Name
                    </Label>
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="jobdescription" className="form-label">
                      Profile Description
                    </Label>
                    <Input
                      type="textarea"
                      name="profileDescription"
                      id="profileDescription"
                      value={profileDescription}
                      onChange={(e) => setProfileDescription(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="businessstream" className="form-label">
                      Business Stream
                    </label>
                    <Input
                      type="select"
                      name="businessStream"
                      id="businessStream"
                      value={businessStream}
                      onChange={(e) => setBusinessStream(e.target.value)}
                    >
                      <option value="">Select Business Stream</option>
                      {businessStreamOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.business_stream_name.charAt(0).toUpperCase() +
                            option.business_stream_name.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="companyWebsite">Company Website URL</Label>
                    <Input
                      type="url"
                      name="companyWebsite"
                      id="companyWebsite"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="establishmentDate">Establishment Date</Label>
                    <Input
                      type="date"
                      name="establishmentDate"
                      id="establishmentDate"
                      value={establishmentDate}
                      onChange={(e) => setEstablishmentDate(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="companyImage">Company Image</Label>
                    <Input
                      type="file"
                      name="companyImage"
                      id="companyImage"
                      // accept="image/*"
                      // onChange={(e) => setCompanyImage(e.target.files[0])}
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
          <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
            <ModalHeader toggle={() => setShowModal(false)}>
              Success
            </ModalHeader>
            <ModalBody>{successMessage}</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => setShowModal(false)}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AddForm;
