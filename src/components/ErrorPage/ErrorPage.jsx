import React from "react";
import "../../App.css";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-top flex items-center justify-center relative"
      style={{
        backgroundImage: "url('bg-error.png')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex flex-col items-center justify-center text-center px-4 relative z-10">
        <h1 className="text-9xl font-extrabold text-white opacity-20">404</h1>
        <h2 className="text-white font-plus-jakarta-sans text-4xl md:text-5xl font-bold mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-white opacity-70 mt-4 text-lg max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <NavLink to="/">
            <button
              className="text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-200"
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
              Go to Homepage
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
