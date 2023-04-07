import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { subURL } from "../../../utils/URLs";
import Select from "react-select";
import axios from "axios";

const JobPostEdit = () => {
  const [jobType, setJobType] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [skillName, setSkillName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [zip, setZip] = useState("");
  const [isCompanyNameHidden, setIsCompanyNameHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const [jobTypeOptions, setJobTypeOptions] = useState([]);
  const [skillSetOptions, setSkillSetOptions] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchJobTypeOptions = async () => {
      const response = await fetch(`${subURL}/job_type/`);
      const data = await response.json();

      setJobTypeOptions(data);
    };

    fetchJobTypeOptions();
  }, []);

  useEffect(() => {
    axios
      .get(`${subURL}/company_save_details`)
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const fetchSkillSetOptions = async () => {
      const response = await fetch(`${subURL}/skillset/`);
      const data = await response.json();

      setSkillSetOptions(data);
    };

    fetchSkillSetOptions();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const options = data.map((country) => ({
        label: country.name,
        value: country.alpha2Code,
      }));
      console.log(options.lablel);
      setCountries(options);
    };
    fetchCountries();
  }, []);
  const handleChange = (selectedOption) => {
    const countryName = selectedOption ? selectedOption.label : "";
    setSelectedCountry(selectedOption);
    setSendSelectedCountry(countryName);
  };
  const handleChangeCompany = (event) => {
    setSelectedCompanyId(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('skill id',skillName)
    async function storeData() {
      const formData = {
        job_type_id: jobType,
        company_id: selectedCompanyId,
        is_company_name_hidden: isCompanyNameHidden,

        job_description: jobDescription,
        is_active: isActive,

        skill_set_id: skillName,
        skill_level: skillLevel,
        street_address: streetAddress,
        city: city,
        state: state,
        country: sendSelectedCountry,
        zip: zip,
        user_account_id: 1,
      };
      console.log(formData);
      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(`${subURL}/post_job/`, formData, {
          headers: headers,
        });
        console.log(res.data);

        if (res.status === 201) {
          console.log("success");
          setSuccessMessage("Data saved successfully!");
          setShowModal(true);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }
    storeData();
    setJobType("");
    setSkillName("");
    setSkillLevel("");
    setStreetAddress("");
    setCity("");
    setState("");
    setCountries("");
    setZip("");
    setJobDescription("");
    setSelectedCountry("");
    setCompanies([]);
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Post a New Job!</h5>
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
                    <Label for="jobType">Job Type</Label>
                    <Input
                      type="select"
                      name="jobType"
                      id="jobType"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="">Select Job Type</option>
                      {jobTypeOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.job_type.charAt(0).toUpperCase() +
                            option.job_type.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label for="skillLevel">Skill Name</Label>
                    <Input
                      type="select"
                      name="skillname"
                      id="skillname"
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}
                    >
                      <option value="">Select Skill Name</option>
                      {skillSetOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.skill_set_name.charAt(0).toUpperCase() +
                            option.skill_set_name.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label for="skillLevel">Skill Level</Label>
                    <Input
                      type="select"
                      name="skillLevel"
                      id="skillLevel"
                      value={skillLevel}
                      onChange={(e) => setSkillLevel(e.target.value)}
                    >
                      <option value="">Select Skill Level</option>
                      <option value="1"> 1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Input>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="streetAddress">Street Address</Label>
                    <Input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="state">State</Label>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="country">Country</Label>

                    <Select
                      placeholder="Select Country"
                      options={countries}
                      value={selectedCountry}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="zip">Zip</Label>
                    <Input
                      type="text"
                      name="zip"
                      id="zip"
                      maxLength={7}
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={3} style={{ marginTop: "3%" }}>
                  <div className="mb-4">
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={isCompanyNameHidden}
                        onChange={(e) =>
                          setIsCompanyNameHidden(e.target.checked)
                        }
                      />{" "}
                      Hide Company Name
                    </Label>
                  </div>
                </Col>
                <Col lg={3} style={{ marginTop: "3%" }}>
                  <div className="mb-4">
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                      />{" "}
                      Active
                    </Label>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="jobDescription">Job Description</Label>
                    <Input
                      type="textarea"
                      name="jobDescription"
                      id="jobDescription"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="jobDescription">Company Name</Label>
                    <Input
                      type="select"
                      name="companyname"
                      id="companyname"
                      // value={companies}
                      onChange={handleChangeCompany}
                    >
                      <option value="">Select Company Name</option>
                      {companies?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.company_name.charAt(0).toUpperCase() +
                            option.company_name.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/admin" className="btn btn-success">
                      Back
                    </Link>
                    <Button type="submit" className="btn btn-purple">
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

export default JobPostEdit;
