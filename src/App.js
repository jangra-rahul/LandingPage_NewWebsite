import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage";
import Footer from "./components/common/Footer";
import PrivacyPolicy from "./page/PrivacyPolicy";
import RefundPolicy from "./page/RefundPolicy";
import TermsConditions from "./page/TermsConditions";
import DownloadApp from "./components/DownloadApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="download-app" element={<DownloadApp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
