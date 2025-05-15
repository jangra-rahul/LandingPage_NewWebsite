import React, { useRef } from "react";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import about_img_1 from "../../assets/images/png/about_img.png";
import about_img_2 from "../../assets/images/png/about_img.png"; // second image
import left_arrow from "../../assets/images/png/left_icon.svg";
import right_arrow from "../../assets/images/png/right_icon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Cameron Williamson",
    title: "Founder Gojek Corp.",
    text: `Kerjarodi.com is an application for job seekers and workers who
    prioritize user comfort and the quality of services provided by our team`,
    image: about_img_1,
  },
  {
    name: "Jenny Wilson",
    title: "CEO Uber",
    text: `The platform is easy to use and helps me find talented people fast.
    I love the UI and responsiveness.`,
    image: about_img_2,
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
    <div style={{ background: "#EEF3F7" }} className="py-5">
      <div className="container py-md-5">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <Row className="align-items-center">
                <Col lg={4} className="mb-4 mb-lg-0">
                  <img className="w-100" src={item.image} alt="about_img" />
                </Col>
                <Col lg={8}>
                  <h3 className="text-black fs_60 mb-0 ff fw-semibold">
                    What do they{" "}
                    <span style={{ color: "#ED8E1F" }}>think about</span>
                    <br className="d-none d-lg-block" />
                    <span style={{ color: "#1A6F8A" }}> our App?</span>
                  </h3>
                  <h4 className="ff fs_32 fw-semibold mb-0 mt-4">
                    {item.name}
                  </h4>
                  <p className="ff fs_16 text_gray fw-normal mb-0 mt-2">
                    {item.title}
                  </p>
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
