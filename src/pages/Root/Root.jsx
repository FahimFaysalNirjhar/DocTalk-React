import React from "react";
import Header from "../../components/Header/Header";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Root;
