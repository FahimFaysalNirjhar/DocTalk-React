import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "DocTalk";
    } else if (path === "/booking") {
      document.title = "Booking";
    } else if (path === "/contact_us") {
      document.title = "Contact Us";
    } else if (path === "/emergency") {
      document.title = "Emergency";
    } else if (path === "/blog") {
      document.title = "Blog";
    } else if (path.startsWith("/doctordetails/")) {
      document.title = "Doctor Details";
    }
  }, [location]);

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
