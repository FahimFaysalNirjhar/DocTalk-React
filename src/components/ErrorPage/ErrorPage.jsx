import React from "react";
import "../../App.css";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('bg-error.png')",
      }}
    >
      <div>
        <h1 className="text-white font-plus-jakarta-sans text-5xl mt-80 text-center">
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
  );
};

export default ErrorPage;
