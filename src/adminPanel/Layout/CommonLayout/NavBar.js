import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

import darkLogo from "../../../assets/images/logo-dark.png";
import lightLogo from "../../../assets/images/logo-light.png";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import userImage1 from "../../../assets/images/user/img-01.jpg";
import jobImage from "../../../assets/images/featured-job/img-01.png";
import profileImage from "../../../assets/images/profile.jpg";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [job, setJob] = useState(false);
  const [company, setCompany] = useState(false);
  const [news, setNews] = useState(false);

  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }

  //menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    var matchingMenuItem = null;
    var ul = document.getElementById("navbarCollapse");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }

    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });
  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <nav
        style={{
          fontFamily: "Poppins",
          letterSpacing: "0.5px",
          color: "black",
        }}
        className={"navbar navbar-expand-lg fixed-top sticky p-0 " + navClass}
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={darkLogo} height="55" alt="" className="logo-dark" />
            <img src={lightLogo} height="22" alt="" className="logo-light" />
          </Link>
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mx-auto navbar-center">
              {/* <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="homedrop"
                  className="arrow-none"
                  onClick={() => setHome(!home)}
                >
                  Home <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: home,
                  })}
                  aria-labelledby="homedrop"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/layout2">
                      Home 2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/layout3">
                      Home 3
                    </Link>
                  </li>
                </ul>
              </NavItem> */}
              <NavItem>
                <Link className="nav-link" to="/admin">
                  Home
                </Link>
              </NavItem>

              {/* <NavItem>
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </NavItem> */}

              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="jobdropdown"
                  role="button"
                  onClick={() => setJob(!job)}
                >
                  Jobs <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: job,
                  })}
                  aria-labelledby="jobdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/postjob">
                      Post a job
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myjobs">
                      My Jobs
                    </Link>
                  </li>
                </ul>
              </NavItem>
              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="companydropdown"
                  role="button"
                  onClick={() => setCompany(!company)}
                >
                  Company <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: company,
                  })}
                  aria-labelledby="companydropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/addcompany">
                      Add Company details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myjobs">
                      My Company
                    </Link>
                  </li>
                </ul>
              </NavItem>
              {/* <NavItem>
                <Link className="nav-link" to="/addcompany">
                  Add Company
                </Link>
              </NavItem> */}

              <NavItem>
                <Link className="nav-link" to="/candidateList">
                  Candidate List
                </Link>
              </NavItem>

              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="newsdropdown"
                  role="button"
                  onClick={() => setNews(!news)}
                >
                  News <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: news,
                  })}
                  aria-labelledby="newsdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/addnews">
                      Add News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mynews">
                      News List
                    </Link>
                  </li>
                </ul>
              </NavItem>
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Dropdown
              onClick={() => setUserProfile(!userProfile)}
              isOpen={userProfile}
              toggle={dropDownuserprofile}
              className="list-inline-item"
            >
              <DropdownToggle
                to="#"
                className="header-item"
                id="userdropdown"
                type="button"
                tag="a"
                aria-expanded="false"
              >
                <img
                  src={profileImage}
                  alt="mdo"
                  width="35"
                  height="35"
                  className="rounded-circle me-1"
                />{" "}
                <span className="d-none d-md-inline-block fw-medium">
                  Hi, Admin
                </span>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-end"
                aria-labelledby="userdropdown"
                end
              >
                <li>
                  <Link className="dropdown-item" to="/myprofile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signout">
                    Logout
                  </Link>
                </li>
              </DropdownMenu>
            </Dropdown>
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
