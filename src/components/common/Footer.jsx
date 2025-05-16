import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/svg/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1e1e1e, #0d0d0d)",
        color: "#fff ",
      }}
      className="pt-5 ff pb-4"
    >
      <Container>
        <Row className="gy-4">
          <Col lg={3} sm={12}>
            <img height={60} src={logo} alt="logo" />
            <p className="mb-3 fs_16 text_gray mb-0 mt-3">
              Over 8,912,000 Satisfied <br className="d-none d-lg-block"></br>{" "}
              with our appearance
            </p>
            <div className="d-flex gap-3">
              <FaFacebookF size={25} style={{ cursor: "pointer" }} />
              <FaTwitter size={25} style={{ cursor: "pointer" }} />
              <FaLinkedinIn size={25} style={{ cursor: "pointer" }} />
            </div>
          </Col>

          <Col lg={2} sm={6} className="col-6">
            <h6 className="fw-semibold mb-3 fs_20">Resources</h6>
            <ul className="list-unstyled">
              <li className=" fs_16 text_gray mt-3">Knowledgebase</li>
              <li className=" fs_16 text_gray mt-3">Online Doc</li>
              <li className=" fs_16 text_gray mt-3">Redundant</li>
            </ul>
          </Col>

          <Col lg={2} sm={6} className="col-6">
            <h6 className="fw-semibold mb-3 fs_20">About us</h6>
            <ul className="list-unstyled">
              <li className=" fs_16 text_gray mt-3">Knowledgebase</li>
              <li className=" fs_16 text_gray mt-3">Online Doc</li>
              <li className=" fs_16 text_gray mt-3">Redundant</li>
            </ul>
          </Col>

          <Col lg={5} sm={12}>
            <h6 className="fw-semibold mb-3 fs_20">
              Subscribe to new Newsletter
            </h6>
            <p className="fs_16 text_gray mt-3 mb-0">
              What are you waiting for? Subscribe and follow our progress!
            </p>
            <Form className="d-flex gap-3 align-items-center mt-4">
              <Form.Control
                type="email"
                placeholder="email@example.com"
                className=" py-3 px-4"
              />
              <button
                className=" text-nowrap  py-3 px-4 text-white border-0 rounded-2"
                style={{ background: "#FF6900", border: "none" }}
              >
                Subscribe now
              </button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4 mt-md-5" style={{ borderColor: "#444" }} />

        <div className="d-flex align-items-center justify-content-between ">
          <div className="fs_16 text-white text-center">
            © Copyright 2025 <span style={{ color: "#FF6900" }}>V</span>ED
            <span style={{ color: "#FF6900" }}>G</span>URU
          </div>

          <u className="d-flex p-0 m-0 gap-4 align-items-center ">
            <Link to="/privacy">
              <li
                className="mb-0 pb-0 text-white ff fs_16 "
                style={{ cursor: "pointer" }}
              >
                Privacy Policy
              </li>
            </Link>
            <Link to="/terms">
              <li
                className="mb-0 pb-0 text-white ff fs_16 "
                style={{ cursor: "pointer" }}
              >
                Terms & Conditions
              </li>
            </Link>
          </u>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
