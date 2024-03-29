import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import ProductPage from "../ProductPage/ProductPage";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Navbar />
      <div className="main">
        <Sidebar />
        <ProductPage />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
