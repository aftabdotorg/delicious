import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/Footer/Footer";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
