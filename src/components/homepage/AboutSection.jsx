import React, { useRef } from "react";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import about_img from "../../assets/images/svg/image1.png";
import about_img3 from "../../assets/images/png/satyam.jpeg";
import about_img_1 from "../../assets/images/png/image.png";
import about_img_4 from "../../assets/images/svg/image.png"; // second image
import left_arrow from "../../assets/images/png/left_icon.svg";
import right_arrow from "../../assets/images/png/right_icon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Pradeep Sharma",
    text: `VEDGURU helped me find clarity during a difficult phase. The astrologer's guidance felt personal, spiritual, and deeply accurate.`,
    image: about_img,
  },
  {
    name: "Vijender Singh",
    text: `Connecting with VEDGURU was a turning point for me. The remedies and insights I received truly brought peace and direction to my life.`,
    image: about_img_1,
  },
  {
    name: "Satyam Ahuja",
    text: `From daily guidance to live sessions, VEDGURU is my trusted companion for spiritual and astrological support. Highly recommended!`,
    image: about_img3,
  },
  {
    name: "Rahul Jangra",
    text: `VEDGURU’s astrologers not only predict but explain — I’ve gained a deeper understanding of myself and my journey through their sessions.`,
    image: about_img_4,
  },
];

const AboutSection = () => {
  const sliderRef = useRef();

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="testimonial" style={{ background: "#EEF3F7" }} className="py-5">
      <div className="container py-md-5">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <Row className="align-items-center">
                <Col lg={4} className="mb-4 mb-lg-0">
                  <img
                    height={550}
                    className="w-100  object-fit-cover rounded-4"
                    src={item.image}
                    alt="about_img"
                  />
                </Col>
                <Col lg={8}>
                  <h3 className="text-black text-capitalize fs_60 mb-0 ff fw-semibold">
                    What makes
                    <span style={{ color: "#FF6900" }}> VEDGURU </span>
                    special?
                  </h3>
                  <h4 className="ff fs_32 fw-semibold mb-0 mt-4">
                    {item.name}
                  </h4>
                  {/* <p className="ff fs_16 text_gray fw-normal mb-0 mt-2">
                    {item.title}
                  </p> */}
                  <div
                    className="bg-white p-4 rounded-2 mt-4"
                    style={{ maxWidth: "400px" }}
                  >
                    <p className="mb-0 fs_16 text_gray ff fw-normal">
                      {item.text}
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <img
                      width={60}
                      height={60}
                      onClick={() => sliderRef.current.slickPrev()}
                      src={left_arrow}
                      style={{ cursor: "pointer" }}
                      alt="left"
                    />
                    <img
                      width={60}
                      height={60}
                      onClick={() => sliderRef.current.slickNext()}
                      src={right_arrow}
                      style={{ cursor: "pointer" }}
                      alt="right"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutSection;
