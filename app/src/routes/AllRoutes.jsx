import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/Footer/Footer";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
