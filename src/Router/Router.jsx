import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Contact from "../pages/Root/Contact/Contact";
import Home from "../pages/Home/Home";
import { NavLink } from "react-router";
import Emergency from "../pages/Emergency/Emergency";
import Blog from "../pages/Blog/Blog";
import Booking from "../pages/Booking/Booking";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/doctor-data/refs/heads/main/doctor.json",
          ).then((res) => res.json()),
        Component: Home,
      },
      {
        path: "/contact_us",
        Component: Contact,
      },
      {
        path: "/emergency",
        Component: Emergency,
      },
      {
        path: "/blog",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/blog_data/refs/heads/main/blog_data.json",
          ).then((res) => res.json()),
        Component: Blog,
      },
      {
        path: "/booking",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/doctor-data/refs/heads/main/doctor.json",
          ).then((res) => res.json()),
        Component: Booking,
      },
      {
        path: "/doctordetails/:registrationNumber",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/doctor-data/refs/heads/main/doctor.json",
          ).then((res) => res.json()),
        Component: DoctorDetails,
      },
    ],
    errorElement: (
      <div
        className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('bg-error.png')",
        }}
      >
        <div>
          <h1 className="text-white font-plus-jakarta-sans text-5xl mt-48 text-center">
            Oops ! Page Not Found
          </h1>
          <div className="text-center mt-5">
            <NavLink to="/">
              <button
                className="text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
                style={{
                  background: "linear-gradient(to bottom, #3B7CD3, #2C5AAA)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to bottom, #5A9FF0, #3A6FCC)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to bottom, #3B7CD3, #2C5AAA)")
                }
                onMouseDown={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to bottom, #2F66B0, #1F4480)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to bottom, #5A9FF0, #3A6FCC)")
                }
              >
                Go to HomePage
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    ),
  },
]);
