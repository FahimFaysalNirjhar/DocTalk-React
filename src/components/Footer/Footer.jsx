import React from "react";
import "../../App.css";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const links = (
    <>
      <NavLink to="/">
        <li>
          <button className="text-[#0F0F0FB3] font-plus-jakarta-sans text-lg font-medium">
            Home
          </button>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <button className="text-[#0F0F0FB3] font-plus-jakarta-sans text-lg font-medium">
            My-Bookings
          </button>
        </li>
      </NavLink>
      <NavLink>
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
    <div>
      <footer
        className="footer mx-auto
 footer-horizontal footer-center p-10"
      >
        <aside>
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
          <ul className="menu menu-horizontal px-1">{links}</ul>
          <div
            className="divider w-full
"
          ></div>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook size={34} className=" text-[#00B2FF]" />
            </a>
            <a href="https://x.com/" target="_blank">
              <FaSquareXTwitter size={34} />
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-faysal-a62b91153/"
              target="_blank"
            >
              <FaLinkedin size={34} className=" text-[#2489BE]" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src="fi_3670209.svg" alt="youtube" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
