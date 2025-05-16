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
          <h3 className=" text-center text-capitalize text-lg-start fs_60 mb-0 ff fw-semibold">
            Experience the Best with <br className="d-none d-lg-block" />
            <span style={{ color: "#FF6900" }}> VEDGURU’s</span> Unique Features
          </h3>
        </div>
        <Row className="mt-4">
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon1} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">
                Live Astrologer Access
              </h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Connect instantly with top astrologers available live — get
                real-time guidance on love, career, health, and more.
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon2} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">
                Multi-Language Chat Support
              </h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Chat with astrologers in your preferred language including
                Hindi, English, and Punjabi — enhancing comfort and clarity in
                conversations.
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon3} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">
                Verified Expert Profiles & Reviews
              </h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Get complete transparency with verified astrologer profiles,
                detailed expertise tags, and genuine user reviews and ratings.
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-4">
            <div className="card_box p-4">
              <img width={48} src={icon4} alt="icon1" />
              <h4 className=" fs_32 ff fw-semibold mb-0 mt-3">
                Gift an Experience
              </h4>
              <p className=" mb-0 fs_20 text_gray ff fw-normal mt-3">
                Send personalized gifts to astrologers during chats — add a
                thoughtful touch to your spiritual journey and support.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeaturesSection;
