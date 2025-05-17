import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/common/CustomNavbar";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CustomNavbar />
      <Container>
        <div className="py-5 ff">
          <h2 className="fw-bold" style={{ color: "#FF6900" }}>
            Refund Policy
          </h2>

          <h4 className="mt-5">INTRODUCTION</h4>
          <p>
            This Refund Policy governs purchases and services provided by Mahna
            Astrology Private Limited, operating under the brand VedGuru. By
            booking astrology services or purchasing products such as gems,
            jewelry (artificial and real), holy water, essential oils, perfumes,
            yantras, god idols, astrological charts, books, clothing,
            merchandise, and general Ayurvedic, religious, and astrology
            products through our website, you agree to this policy, which is
            incorporated into our Terms & Conditions. We operate a strict
            non-refunded policy unless explicitly stated below.
          </p>

          <h4 className="mt-5"> 1. NON-REFUNDABLE PURCHASES</h4>
          <ul>
            <li className="list mt-4">
              <strong>General Rule:</strong> All sales of products and services
              are final and non-refundable, except as outlined in this policy.
              No refunds will be issued for change of mind, dissatisfaction with
              product quality, or subjective disagreement with astrology
              consultation outcomes.
            </li>
          </ul>

          <h4 className="mt-5"> 2. REFUNDS FOR NON-DELIVERY</h4>
          <ul>
            <li className="list mt-4">
              <strong>Eligibility:</strong> Refunds are only available if
              VedGuru or our vendors fail to deliver a purchased product or
              scheduled astrology service.
            </li>
            <li className="list mt-3">
              <strong>Products:</strong> If a product cannot be shipped (e.g.,
              due to stock unavailability or vendor failure), you will be
              notified, and a full refund will be issued at our discretion.
            </li>
            <li className="list mt-3">
              <strong>Services:</strong> If an astrology consultation is not
              provided due to our error (e.g., astrologer unavailability), you
              may request a refund, subject to our approval.
            </li>
            <li className="list mt-3">
              <strong>Request Process:</strong> Submit refund requests within 7
              days of the expected delivery date or service time to{" "}
              <a href="mailto:support@vedguru.com">support@vedguru.com</a>.
              Include proof of purchase and details of non-delivery.
            </li>
            <li className="list mt-3">
              <strong>Processing:</strong> Approved refunds will be processed
              within 10 business days to your original payment method, though
              delays may occur due to bank policies, for which we are not
              liable.
            </li>
          </ul>

          <h4 className="mt-5">3 .DAMAGED PRODUCTS AND REPLACEMENTS</h4>
          <p>
            <strong>Condition:</strong> If a product arrives damaged, we will
            provide a replacement only if the damage occurred during transit, as
            determined by our satisfaction.
          </p>
          <p>
            <strong>Process:</strong>
          </p>
          <ul>
            <li className="list mt-4">
              Notify us within 7 days of delivery at{" "}
              <a href="mailto:support@vedguru.com">support@vedguru.com</a> with
              photos of the damage and packaging.
            </li>
            <li className="list mt-3">
              Upon inspection and confirmation of transit damage, a replacement
              will be shipped within 5 business days, subject to availability.
              Original product delivered needs to be returned to get the
              replacement.
            </li>
            <li className="list mt-3">
              <strong>Non-Eligible Damage:</strong> Damage due to mishandling
              after delivery or normal wear and tear does not qualify for
              replacement.
            </li>
            <li className="list mt-3">
              <strong>Refund for Non-Replacement:</strong> If we cannot provide
              a replacement (e.g., item out of stock), a refund may be issued at
              VedGuru’s sole discretion, processed within 10 business days of
              return receipt.
            </li>
          </ul>

          <h4 className="mt-5"> 4. EXCLUSIONS</h4>
          <ul>
            <li className="list mt-4">
              <strong>Non-Refundable Fees:</strong> Shipping costs, taxes, and
              additional fees (e.g., customs duties) are non-refundable under
              all circumstances.
            </li>
            <li className="list mt-3">
              <strong>Personalized/Perishable Items:</strong> Custom products
              (e.g., astrological charts) and perishable items are
              non-returnable and non-refundable.
            </li>
            <li className="list mt-3">
              <strong>Force Majeure:</strong> No refunds or replacements will be
              provided for delays or non-delivery due to events beyond our
              control (e.g., natural disasters, strikes).
            </li>
          </ul>

          <h4 className="mt-5"> 5. DISCRETIONARY AUTHORITY</h4>
          <p>
            <strong>Sole Discretion:</strong> VedGuru reserves the right to
            approve or deny refunds and replacements based on the circumstances,
            even within the conditions outlined above. We may offer credits or
            alternatives instead of refunds at our discretion.
          </p>

          <h4 className="mt-5"> 6. CONTACT</h4>
          <p>
            For refund or replacement inquiries, email{" "}
            <a href="mailto:support@vedguru.com">support@vedguru.com</a>. This
            policy may be updated—check this page for the latest version.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RefundPolicy;
