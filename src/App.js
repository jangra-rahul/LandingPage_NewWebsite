import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage";
import Footer from "./components/common/Footer";
import PrivacyPolicy from "./page/PrivacyPolicy";
import TermsConditions from "./page/TermsConditions";
import RefundPolicy from "./page/RefundPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
