import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/common/CustomNavbar";
import HomePage from "./page/HomePage";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
