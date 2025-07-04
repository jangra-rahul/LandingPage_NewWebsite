import React from "react";
import { Container } from "react-bootstrap";
import gPlay_icon from "../../assets/images/svg/gplay_icon.svg";
import appStore_Icon from "../../assets/images/svg/appStore_icon.svg";
import requset_img from "../../assets/images/png/requst_imgs.png";

const RequestSection = () => {
  return (
    <div id="scroll" style={{ background: "#EAF1F5" }} className="pt-5">
      <Container className="pt-md-5">
        <h3 className=" position-relative text-capitalize z-index-1 text-black text-center fs_60 mb-0 ff fw-semibold">
          <span style={{ color: "#FF6900" }}> VEDGURU </span> helps you connect
          with expert <br className="d-none d-lg-block" /> astrologers anytime,
          anywhere.
        </h3>
        <p className="fs_20 position-relative z-index-1 text_gray ff fw-normal mb-0 text-center mt-4">
          VEDGURU is your one-stop solution for astrology consultations,{" "}
          <br className="d-none d-lg-block" /> poojas, and powerful remedies.
        </p>
        <div className="d-flex position-relative z-index-1 justify-content-center align-items-center gap-md-2 gap-2 mt-5">
          <a href="https://play.google.com/store/apps/details?id=com.vedguru.app" target="_blanck"><img width={160} height={60} src={gPlay_icon} alt="gPlay_icon" /></a>
          <a href="https://apps.apple.com/in/app/vedguru/id6746742016" target="_blanck">  <img
            width={160}
            height={47}
            src={appStore_Icon}
            alt="appStore_Icon"
          /></a>
        
        </div>
        <img className="w-100  mt-5" src={requset_img} alt="requset_img" />
      </Container>
    </div>
  );
};

export default RequestSection;
