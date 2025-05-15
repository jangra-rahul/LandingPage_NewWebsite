import React from "react";
import CustomNavbar from "../common/CustomNavbar";
import phone_imgs from "../../assets/images/png/screenImg.png";

const Hero = () => {
  return (
    <div
      style={{ background: "#211E1B" }}
      className="min-vh-100 position-relative overflow-hidden"
    >
      <CustomNavbar />
      <div className="container pt-lg-5 pt-3 d-flex flex-column flex-lg-row align-items-center justify-content-between">
        {/* Left Section */}
        <div className="hero-left text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="text-white fs_60 mb-0 ff fw-semibold">
            Easy to find a <span style={{ color: "#ED8E1F" }}>Job</span> and{" "}
            <br className="d-none d-lg-block" />
            <span style={{ color: "#1A6F8A" }}>Worker</span> with Us
          </h1>
          <p className="fs_20 text_gray ff fw-normal my-4">
            We help you find the right job or worker for you. Don’t worry, we
            provide <br className="d-none d-lg-block" />
            satisfactory service for you. Let’s try it now!
          </p>
          <button className="get-started-btn mt-2 px-4 py-2 rounded-2">
            Get Started&nbsp; →
          </button>
        </div>
      </div>

      {/* Right Section Image - Positioned at Bottom */}
      <div
        className="hero-img position-absolute bottom-0 w-100 d-flex justify-content-center"
        style={{ zIndex: 0 }}
      >
        <div className="container">
          <img src={phone_imgs} alt="UI" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
