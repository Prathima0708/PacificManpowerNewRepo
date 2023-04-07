import React, { useEffect } from "react";
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import jobImage5 from "../../../assets/images/featured-job/img-05.png";
import jobImage6 from "../../../assets/images/featured-job/img-06.png";
import { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from "../../../pages/Jobs/JobList2/Pagination";
import axios from "axios";
var ID;
const Listing = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

  const [editModal, setEditModal] = useState(false);

  const openEditModal = () => setEditModal(!editModal);
  const [newsData, setNewsData] = useState([]);
  const [filename, setFilename] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescp, setNewsDescp] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/spacificmanpower/trendingnews/")
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function editItem(id) {
    ID = id;
    console.log("id is", id);
    setEditModal(true);

    const filteredDummuyData = newsData.find((data) => data.id === id);

    setNewsTitle(filteredDummuyData.news_title);
    setNewsDescp(filteredDummuyData.news_description);

    setFilename(filteredDummuyData.news_image);
  }

  function updateHandler() {
    const FormData = {
      news_title: newsTitle,
      news_description: newsDescp,
      news_image: filename,
    };

    async function updateData() {
      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const dataForm = FormData;
        const resLogin = await axios.put(
          `http://127.0.0.1:8000/spacificmanpower/trendingnews/${ID}/`,
          dataForm,
          {
            headers: headers,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    updateData();
  }
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {newsData.map((item, key) => (
            <Card className="job-box card mt-4" key={key}>
              <CardBody className="p-4">
                <Row>
                  <Col lg={1}>
                    <Link to="#">
                      <img
                        src={item.news_image}
                        alt=""
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </Col>

                  <Col lg={9}>
                    <div className="mt-3 mt-lg-0">
                      <h5 className="fs-17 mb-1">
                        <Link to="#" className="text-dark">
                          {item.news_title}
                        </Link>
                      </h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            {item.news_description}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col lg={2} className="align-self-center">
                    <ul className="list-inline mt-3 mb-0">
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <Link
                          to="#"
                          className="avatar-sm bg-soft-success d-inline-block text-center rounded-circle fs-18"
                          onClick={() => editItem(item.id)}
                        >
                          <i className="uil uil-edit"></i>
                        </Link>
                      </li>
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <Link
                          onClick={openModal}
                          to="#"
                          className="avatar-sm bg-soft-danger d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
        <Pagination />
      </Row>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Delete Jobs ?
              </h5>
            </div>
            <ModalBody>
              <div>
                <h6 className="text-danger">
                  Are you sure you want to delete News ?
                </h6>
              </div>
            </ModalBody>
            <div className="modal-footer">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary btn-sm"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Yes, delete
              </button>
            </div>
          </Modal>
        </div>
      </div>

      <div
        className="modal fade"
        id="editmodal"
        tabIndex="-1"
        aria-labelledby="editmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={editModal} toggle={editModal} centered tabIndex="-1">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit News
              </h5>
            </div>
            <ModalBody>
              <Col lg={12}>
                <div className="mb-4">
                  <Label htmlFor="jobtitle" className="form-label">
                    News Title
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="jobtitle"
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="jobtitle" className="form-label">
                    News Description
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="jobtitle"
                    value={newsDescp}
                    onChange={(e) => setNewsDescp(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="jobtitle" className="form-label">
                    News Image
                  </Label>
                  <img src={filename} alt="" className="img-fluid rounded-3" />
                  <Input
                    type="file"
                    name="newsImage"
                    id="newsImage"
                    onChange={(e) => setFilename(e.target.files[0])}
                  />
                </div>
              </Col>
            </ModalBody>

            <div className="modal-footer">
              <button
                type="button"
                onClick={openEditModal}
                className="btn btn-primary btn-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-danger btn-sm"
                onClick={updateHandler}
              >
                Update12
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Listing;
