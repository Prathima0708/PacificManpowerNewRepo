import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { Container, Card, Col, Input, Row, CardBody } from "reactstrap";
import MetaTags from "react-meta-tags";
import bcrypt from "bcryptjs";
import { useHistory } from "react-router-dom";
import moment from "moment";

import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import signUpImage from "../../assets/images/auth/sign-up.png";
import { Form } from "react-bootstrap";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enteredDOB, setEnteredDOB] = useState(null);
  const [enteredPhone, setEnteredPhone] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const history = useHistory();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function firstNameChangeHandler(event) {
    setFirstName(event.target.value);
  }
  function lastNameChangeHandler(event) {
    setLastName(event.target.value);
  }
  const handleDOBChange = (event) => {
    setEnteredDOB(event.target.value);
  };
  function handlePhonenoChange(event) {
    setEnteredPhone(event.target.value);
  }
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    event.preventDefault();

    // handle signup form submit
    console.log("Signing up...");

    async function storeData() {
      const formData = {
        user_type_id: 2,
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: enteredDOB,
        gender: selectedGender,
        isactive: true,
        contact_number: enteredPhone,
        email_notification_active: false,
        user_image: null,
      };
      console.log(formData);
      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(
          "http://127.0.0.1:8000/spacificmanpower/user_save_account/",
          formData,
          { headers: headers }
        );
        console.log(res.data);

        // try {
        //   await localStorage.setItem("username", res.data.user_name);
        // } catch (error) {}
        if (res.status === 201) {
          console.log("success");
          history.push("/");

          // do something to log the user in, e.g. redirect to a dashboard page
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }

    storeData();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEnteredDOB("");
    //setPhone("");
  }
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <MetaTags>
              <title>Sign Up</title>
            </MetaTags>
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="align-items-center">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signUpImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>Let's Get Started</h5>
                                <p className="text-white-70">
                                  Sign Up and get access to all the features of
                                  PacificManpower
                                </p>
                              </div>
                              <Form
                                action="/"
                                className="auth-form"
                                onSubmit={handleSubmit}
                              >
                                {/* <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    First Name
                                  </label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    required
                                    id="usernameInput"
                                    placeholder="Enter your firstname"
                                    value={firstName}
                                    onChange={firstNameChangeHandler}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    Last Name
                                  </label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    required
                                    id="usernameInput"
                                    placeholder="Enter your lastname"
                                    value={lastName}
                                    onChange={lastNameChangeHandler}
                                  />
                                </div> */}
                                <div className="d-flex">
                                  <div className="mb-3 me-3">
                                    <label
                                      htmlFor="firstNameInput"
                                      className="form-label"
                                    >
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      required
                                      id="firstNameInput"
                                      placeholder="Enter your first name"
                                      value={firstName}
                                      onChange={firstNameChangeHandler}
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="lastNameInput"
                                      className="form-label"
                                    >
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      required
                                      id="lastNameInput"
                                      placeholder="Enter your last name"
                                      value={lastName}
                                      onChange={lastNameChangeHandler}
                                    />
                                  </div>
                                </div>

                                <div className="d-flex">
                                  <div className="mb-3 me-3">
                                    <label
                                      htmlFor="passwordInput"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      required
                                      id="emailInput"
                                      placeholder="Enter your email"
                                      value={email}
                                      onChange={handleEmailChange}
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="emailInput"
                                      className="form-label"
                                    >
                                      Password
                                    </label>
                                    <Input
                                      type="password"
                                      className="form-control"
                                      id="passwordInput"
                                      placeholder="Enter your password"
                                      value={password}
                                      onChange={handlePasswordChange}
                                    />
                                  </div>
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Date of Birth
                                  </label>
                                  <Input
                                    type="date"
                                    className="form-control"
                                    id="DOB"
                                    placeholder="Enter your DOB"
                                    value={enteredDOB}
                                    onChange={handleDOBChange}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Contact Number
                                  </label>
                                  <Input
                                    type="phone"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter your phone no"
                                    value={enteredPhone}
                                    onChange={handlePhonenoChange}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="genderInput"
                                    className="form-label"
                                  >
                                    Gender
                                  </label>
                                  <div className="d-flex align-items-center">
                                    <label
                                      htmlFor="maleInput"
                                      className="form-check-label me-3"
                                    >
                                      <input
                                        type="radio"
                                        id="maleInput"
                                        value="male"
                                        checked={selectedGender === "male"}
                                        onChange={handleGenderChange}
                                        className="form-check-input me-1"
                                      />
                                      Male
                                    </label>

                                    <label
                                      htmlFor="femaleInput"
                                      className="form-check-label"
                                    >
                                      <input
                                        type="radio"
                                        id="femaleInput"
                                        value="female"
                                        checked={selectedGender === "female"}
                                        onChange={handleGenderChange}
                                        className="form-check-input me-1"
                                      />
                                      Female
                                    </label>
                                  </div>
                                </div>

                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Sign Up
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Already a member ?{" "}
                                  <Link
                                    to="/"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign In{" "}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
