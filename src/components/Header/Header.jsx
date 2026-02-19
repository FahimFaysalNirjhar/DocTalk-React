import React from "react";
import "../../App.css";
import { Link, NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">
        <li>
          <button className="text-[#0F0F0FB3] font-plus-jakarta-sans text-lg font-medium">
            Home
          </button>
        </li>
      </NavLink>
      <NavLink to="/booking">
        <li>
          <button className="text-[#0F0F0FB3] font-plus-jakarta-sans text-lg font-medium">
            My-Bookings
          </button>
        </li>
      </NavLink>
      <NavLink to="/blog">
        <li>
          <button className="text-[#0F0F0FB3] font-plus-jakarta-sans text-lg font-medium">
            Blogs
          </button>
        </li>
      </NavLink>
      <NavLink to="/contact_us">
        <li>
          <button className="text-[#0F0F0FB3] font-plus-jakarta-sans text-lg font-medium">
            Contact Us
          </button>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="bg-[#EFEFEF]">
      <div className="navbar md:max-w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl p-0">
            <img
              width={30}
              height={30}
              className="object-cover"
              src="logo.png"
              alt=""
            />
            <span className="font-plus-jakarta-sans md:font-bold md:text-3xl">
              DocTalk
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ml-5">
          <Link to="/emergency">
            <button className="btn rounded-full bg-[#176AE5]  text-white font-plus-jakarta-sans md:text-xl md:py-6 md:px-8">
              Emergency
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
