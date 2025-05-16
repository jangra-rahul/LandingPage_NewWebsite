import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/common/CustomNavbar";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <CustomNavbar />
      <Container>
        <div className="py-5 ff">
          <h2 className=" fw-bold" style={{ color: "#FF6900" }}>
            Terms & Conditions
          </h2>

          <h4 className="mt-5">1. Acceptance of Terms</h4>
          <p>
            By accessing and using VedGuru's services, you agree to comply with
            these Terms & Conditions. If you do not agree, please refrain from
            using our services.
          </p>

          <h4 className="mt-5">2. Use of Service</h4>
          <p>
            VedGuru provides educational content and tools for personal,
            non-commercial use. Users must not misuse the platform or engage in
            unauthorized activities.
          </p>

          <h4 className="mt-5">3. User Responsibilities</h4>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account information and for all activities under their account.
          </p>

          <h4 className="mt-5">4. Intellectual Property</h4>
          <p>
            All content on VedGuru, including text, graphics, logos, and
            software, is the property of VedGuru and is protected by applicable
            intellectual property laws.
          </p>
          <h4 className="mt-5">5. Termination</h4>
          <p>
            VedGuru reserves the right to suspend or terminate access to its
            services for violations of these Terms & Conditions.
          </p>
          <h4 className="mt-5">6. Modifications to Terms</h4>
          <p>
            VedGuru may update these Terms & Conditions periodically. Continued
            use of the services after changes indicates acceptance of the new
            terms.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TermsConditions;
