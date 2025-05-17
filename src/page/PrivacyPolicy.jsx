import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/common/CustomNavbar";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CustomNavbar />
      <Container>
        <div className="py-5 ff">
          <h2 className="fw-bold" style={{ color: "#FF6900" }}>
            Privacy Policy
          </h2>

          <h4 className="mt-5">INTRODUCTION</h4>
          <p>
            Mahna Astrology Private Limited, operating as VedGuru, is committed
            to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your personal information when
            you use our website, book astrology services, or purchase products.
            By engaging with our platform, you consent to this policy, which
            complies with applicable laws, including India’s Information
            Technology Act, 2000, and Digital Personal Data Protection (DPDP)
            Act, 2023.
          </p>

          <h4 className="mt-5">1. INFORMATION WE COLLECT</h4>
          <ul>
            <li className="list mt-4">
              <strong>Personal Information:</strong> Includes name, email, phone
              number, address, date of birth, payment details, and astrological
              data (e.g., birth chart details) provided during account creation,
              purchases, or consultations.
            </li>
            <li className="list mt-3">
              <strong>Usage Data:</strong> Includes IP address, browser type,
              pages visited, time spent on the site, and device information
              collected via cookies and analytics tools.
            </li>
            <li className="list mt-3">
              <strong>Submissions:</strong> Feedback, reviews, or other content
              you submit to us.
            </li>
            <li className="list mt-3">
              <strong>Consultation Data:</strong> Information shared during
              astrology sessions, which may be recorded for quality assurance.
            </li>
          </ul>

          <h4 className="mt-5">2. HOW WE USE YOUR INFORMATION</h4>
          <ul>
            <li className="list mt-4">
              <strong>Service Delivery:</strong> To process orders, schedule
              consultations, and provide personalized astrology services.
            </li>
            <li className="list mt-3">
              <strong>Communication:</strong> To send transactional emails
              (e.g., order confirmations), respond to inquiries, and, with your
              consent, share promotional offers.
            </li>
            <li className="list mt-3">
              <strong>Improvement:</strong> To analyze usage patterns and
              enhance our website, products, and services.
            </li>
            <li className="list mt-3">
              <strong>Legal Compliance:</strong> To meet regulatory requirements
              or protect our rights.
            </li>
          </ul>

          <h4 className="mt-5">3. COOKIES AND TRACKING</h4>
          <ul>
            {" "}
            <li className="list mt-4">
              <strong>Cookies:</strong> We use cookies to improve your browsing
              experience, track preferences, and analyze traffic. By using our
              site, you consent to cookies.
            </li>
            <li className="list mt-3">
              <strong>Opt-Out:</strong> You can disable cookies via browser
              settings, but this may affect site functionality.
            </li>
          </ul>

          <h4 className="mt-5">4. SHARING YOUR INFORMATION</h4>
          <p>We share data with:</p>
          <ul>
            <li className="list mt-4">
              Independent astrologers for consultation purposes.
            </li>
            <li className="list mt-3">
              Payment processors (e.g., banks, gateways) for transactions.
            </li>
            <li className="list mt-3">
              Shipping partners for product delivery.
            </li>
            <li className="list mt-3">
              Analytics providers (e.g., Google Analytics) for site performance.
            </li>
          </ul>
          <p>
            <strong>Legal Disclosure:</strong> We may share data if required by
            law, to enforce our Terms, or to protect our rights, safety, or
            property.
          </p>
          <p>
            <strong>No Sale:</strong> We do not sell your personal information
            to third parties.
          </p>

          <h4 className="mt-5">5. DATA STORAGE AND SECURITY</h4>
          <ul>
            <li className="list mt-4">
              <strong>Location:</strong> Data is stored on secure servers in
              India. If you are outside India, your data may be transferred to
              and processed here.
            </li>
            <li className="list mt-3">
              <strong>Security:</strong> We use encryption (e.g., SSL for
              payments) and reasonable safeguards, but no system is fully
              secure—we are not liable for breaches beyond our control.
            </li>
            <li className="list mt-3">
              <strong>Retention:</strong> We retain data as long as needed for
              service delivery, legal obligations, or business purposes, after
              which it is securely deleted.
            </li>
          </ul>

          <h4 className="mt-5">6. YOUR RIGHTS</h4>
          <ul>
            <li className="list mt-4">
              <strong>Access and Correction:</strong> You may request access to
              or correction of your personal data by emailing{" "}
              <a href="mailto:support@vedguru.com">support@vedguru.com</a>.
            </li>
            <li className="list mt-3">
              <strong>Deletion:</strong> You may request data deletion, subject
              to legal retention requirements.
            </li>
            <li className="list mt-3">
              <strong>Opt-Out:</strong> Unsubscribe from marketing emails via
              the link in our communications.
            </li>
          </ul>

          <h4 className="mt-5">7. THIRD-PARTY LINKS AND TOOLS</h4>
          <p>
            Our site may include third-party links or tools (e.g., zodiac
            calculators). We are not responsible for their privacy
            practices—review their policies before use.
          </p>

          <h4 className="mt-5">8. CHANGES TO THIS POLICY</h4>
          <p>
            We may update this policy by posting changes here. Continued use
            after updates implies consent. Check periodically for the latest
            version.
          </p>

          <h4 className="mt-5">9. CONTACT</h4>
          <p>
            For privacy inquiries, reach us at{" "}
            <a href="mailto:support@vedguru.com">support@vedguru.com</a>.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
