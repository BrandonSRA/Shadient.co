import { Home } from "../pages/Home";
import { LandingPage } from "../pages/LandingPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ServicesPages } from "../pages/ServicesPages";
import { CompanyPages } from "../pages/CompanyPages";

function BrowserRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/company" element={<CompanyPages />} />
        <Route path="/services" element={<ServicesPages />} />
      </Routes>
    </Router>
  );
}

export default BrowserRouter;
