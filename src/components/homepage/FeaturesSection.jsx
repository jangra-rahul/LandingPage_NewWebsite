import React from "react";
import { Col, Row } from "react-bootstrap";
import icon1 from "../../assets/images/png/icon1.svg";
import icon2 from "../../assets/images/png/icon2.svg";
import icon3 from "../../assets/images/png/icon3.svg";
import icon4 from "../../assets/images/png/icon4.svg";
import pink_shadow from "../../assets/images/svg/pink_shadow.svg";
import blue_shadow from "../../assets/images/svg/blue_shadow.svg";

const FeaturesSection = () => {
  return (
    <div className="py-5 position-relative">
      <img
        width={600}
        height={600}
        className="d-md-block d-none position-absolute top-0 start-0"
        src={pink_shadow}
        alt="pink_shadow"
      />
      <img
        width={600}
        height={600}
        className="d-md-block d-none position-absolute bottom-0 end-0"
        src={blue_shadow}
        alt="blue_shadow"
      />
      <div className="container position-relative z-index-1 pt-md-5">
        <div className="d-lg-flex align-items-center justify-content-between ">
          <h3 className=" text-center text-lg-start fs_60 mb-0 ff fw-semibold">
            We provide <span style={{ color: "#ED8E1F" }}>excellent</span>{" "}
            <br className="d-none d-lg-block" />
            <span style={{ color: "#1A6F8A" }}>features</span> from us
          </h3>
          <p className="fs_20 text-center text-lg-start mt-3 mt-lg-0 text_gray ff fw-normal mb-0">
            We shall never deny a guest, even the most ridiculous{" "}
            <br className="d-none d-lg-block" /> request. We provide excellent
            features from us
          </p>
        </div>
        <Row className="mt-4">
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon1} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">Job Search</h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Kerjarodi.com is an application for job seekers and workers who
                prioritize user comfort and the quality of services provided by
                our team
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon2} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">Worker Search</h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Kerjarodi.com is an application for job seekers and workers who
                prioritize user comfort and the quality of services provided by
                our team
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon3} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">Message</h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Kerjarodi.com is an application for job seekers and workers who
                prioritize user comfort and the quality of services provided by
                our team
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon4} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">
                Dark mode theme
              </h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Kerjarodi.com is an application for job seekers and workers who
                prioritize user comfort and the quality of services provided by
                our team
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeaturesSection;
