import React from "react";
import CustomNavbar from "../common/CustomNavbar";
import phone_imgs from "../../assets/images/png/screenImg1.png";

const Hero = () => {
  return (
    <div
      style={{ background: "#211E1B" }}
      className="min-vh-100 position-relative overflow-hidden"
    >
      <CustomNavbar />
      <div className="container pt-xl-1 d-flex flex-column flex-lg-row align-items-center justify-content-between">
        {/* Left Section */}
        <div className="hero-left text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="text-white fs_60 mb-0 ff fw-semibold">
            Easy to Connect with <br className="d-none d-lg-block" /> Trusted{" "}
            <span style={{ color: "#FF6900" }}>Astrologers</span>
          </h1>
          <p className="fs_20 text_gray ff fw-normal my-3">
            We help you find the right astrologer and divine guidance in just a
            few taps. <br className="d-none d-lg-block" /> From expert
            consultations to authentic spiritual items – it's all here.
          </p>

          <button className="custom_btn mt-2 px-4 py-2 rounded-2">
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
