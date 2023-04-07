import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

//import images

const TopBar = () => {
  const iconTobar = [
    {
      id: 1,
      classname: "uil uil-whatsapp",
    },
    {
      id: 2,
      classname: "uil uil-facebook-messenger-alt",
    },
    {
      id: 3,
      classname: "uil uil-instagram",
    },
    {
      id: 4,
      classname: "uil uil-envelope",
    },
    {
      id: 5,
      classname: "uil uil-twitter-alt",
    },
  ];
  //Language Dropdown
  



  return (
    <React.Fragment>
      <div className="top-bar" style={{ zIndex: 1030 }}>
        <Container fluid className="custom-container">
          <Row className="g-0 align-items-center"></Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
