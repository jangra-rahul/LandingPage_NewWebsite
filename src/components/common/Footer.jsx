import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1e1e1e, #0d0d0d)",
        color: "#fff ",
      }}
      className="pt-4 ff pb-4"
    >
      <Container>
        {" "}
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
            <Link to="/refund">
              <li
                className="mb-0 pb-0 text-white ff fs_16 "
                style={{ cursor: "pointer" }}
              >
                Refund Policy
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
