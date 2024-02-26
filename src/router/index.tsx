import { CompanyPages } from "../pages/Companypages";
import { Home } from "../pages/Home";
import { LandingPage } from "../pages/LandingPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function BrowserRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/company" element={<CompanyPages/>} />
      </Routes>
    </Router>
  );
}

export default BrowserRouter;
