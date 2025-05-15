import React, { useState } from "react";
import logo from "../../assets/images/svg/logo.svg";
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="py-4">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-5">
            <a href="#">
              <img height={36} src={logo} alt="web logo" />
            </a>
            <ul className="mb-0 ps-0 d-lg-flex d-none align-items-center gap-lg-5 gap-3">
              <li>
                <a
                  className="fs_16 ff fw-semibold text_gray hovermanue"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="fs_16 ff fw-semibold text_gray hovermanue"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="fs_16 ff fw-semibold text_gray hovermanue"
                  href="#"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  className="fs_16 ff fw-semibold text_gray hovermanue"
                  href="#"
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
          <div className="d-md-flex d-none align-items-center gap-3">
            <button className=" fs_16 fw-semibold rounded-2  custom_btn ff  border-0">
              Sign In
            </button>
            <div
              className="border border-1"
              style={{ height: "30px", borderColor: "#474747" }}
            ></div>
            <button className=" fs_16 fw-semibold rounded-2 transparent_btn ff   border-0">
              Sign Up
            </button>
          </div>
          <div className="d-lg-none">
            <button
              onClick={handleShow}
              className="bg-transparent border-0 text-white p-0"
            >
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img height={30} src={logo} alt="web logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
            <li className=" mt-3">
              <a className="fs_16 ff fw-semibold text_gray hovermanue" href="#">
                Home
              </a>
            </li>
            <li className=" mt-3">
              <a className="fs_16 ff fw-semibold text_gray hovermanue" href="#">
                About us
              </a>
            </li>
            <li className=" mt-3">
              <a className="fs_16 ff fw-semibold text_gray hovermanue" href="#">
                Featured
              </a>
            </li>
            <li className=" mt-3">
              <a className="fs_16 ff fw-semibold text_gray hovermanue" href="#">
                Testimonial
              </a>
            </li>
            <li className=" mt-3">
              <button className="fs_16 d-md-none d-block fw-semibold rounded-2 py-3 custom_btn ff border-0 w-100">
                Sign In
              </button>
            </li>
            <li>
              <button className="fs_16 d-md-none d-block fw-semibold rounded-2 text-black py-3 ff border-0 w-100">
                Sign Up
              </button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CustomNavbar;
