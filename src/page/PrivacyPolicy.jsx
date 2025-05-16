import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/common/CustomNavbar";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <CustomNavbar />
      <Container>
        {" "}
        <div className="py-5  ff">
          <h2 className=" fw-bold" style={{ color: "#FF6900" }}>
            Privacy Policy
          </h2>

          <h4 className="mt-5">1. Information We Collect</h4>
          <p>
            We collect information you provide when registering, using services,
            or contacting support. This may include your name, email, and phone
            number.
          </p>

          <h4 className="mt-5">2. How We Use Information</h4>
          <p>We use the collected information to:</p>
          <ul>
            <li className="list mt-2">Provide and maintain our services.</li>
            <li className="list mt-2">Improve user experience.</li>
            <li className="list mt-2">
              Communicate with users regarding updates and support.
            </li>
          </ul>

          <h4 className="mt-5">3. Data Protection</h4>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
          </p>

          <h4 className="mt-5">4. Sharing of Information</h4>
          <p>
            We do not share your personal information with third parties except
            as necessary to provide our services or as required by law.
          </p>
          <h4 className="mt-5">5. Cookies</h4>
          <p>
            VedGuru uses cookies to enhance user experience. Users can control
            cookie preferences through their browser settings.
          </p>
          <h4 className="mt-5">6. Changes to Privacy Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. We encourage
            users to review this page periodically for any changes.
          </p>
          <h4 className="mt-5">6. Contact Us:</h4>
          <p>
            If you have any questions about these Terms & Conditions or the
            Privacy Policy, please contact us at{" "}
            <a href="#">support@vedguru.netlify.app</a>.app.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
