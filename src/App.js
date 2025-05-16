import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage";
import Footer from "./components/common/Footer";
import PrivacyPolicy from "./page/PrivacyPolicy";
import TermsConditions from "./page/TermsConditions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
