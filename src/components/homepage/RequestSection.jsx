import React from "react";
import { Container } from "react-bootstrap";
import gPlay_icon from "../../assets/images/svg/gplay_icon.svg";
import appStore_Icon from "../../assets/images/svg/appStore_icon.svg";
import requset_img from "../../assets/images/png/requst_imgs.png";

const RequestSection = () => {
  return (
    <div style={{ background: "#EAF1F5" }} className="pt-5">
      <Container className="pt-md-5">
        <h3 className=" text-black text-center fs_60 mb-0 ff fw-semibold">
          We shall <span style={{ color: "#ED8E1F" }}>never deny</span> a guest,
          even the <br className="d-none d-lg-block" />
          <span style={{ color: "#1A6F8A" }}> most ridiculous request</span>
        </h3>
        <p className="fs_20 text_gray ff fw-normal mb-0 text-center mt-4">
          Kerjarodi.com is an application for job seekers and workers who
          prioritize <br className="d-none d-lg-block" /> user comfort and the
          quality of services provided by our team
        </p>
        <div className="d-flex justify-content-center align-items-center gap-md-2 gap-2 mt-5">
          <img width={160} height={60} src={gPlay_icon} alt="gPlay_icon" />
          <img
            width={160}
            height={47}
            src={appStore_Icon}
            alt="appStore_Icon"
          />
        </div>
        <img className="w-100 mt-5" src={requset_img} alt="requset_img" />
      </Container>
    </div>
  );
};

export default RequestSection;
