import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import Header from "../components/Header/Header";
// import Home from "../components/Home/Home/Home";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto	">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
