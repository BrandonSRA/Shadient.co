import { LandingPage } from "../pages/LandingPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function BrowserRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default BrowserRouter;