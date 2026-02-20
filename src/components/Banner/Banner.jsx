import React from "react";
import "../../App.css";

const Banner = () => {
  return (
    <div className=" bg-[#EFEFEF] py-4 md:py-10">
      <div className=" max-w-11/12 mx-auto border-3 border-white rounded-3xl bg-gradient-to-b from-white/10 to-white backdrop-blur-md">
        <h1 className="font-plus-jakarta-sans text-center text-4xl font-bold mt-14 max-w-3xl mx-auto">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="max-w-4xl mx-auto text-center font-plus-jakarta-sans mt-8">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center p-2 mt-10 md:mb-16">
          <img
            className="w-full max-w-sm h-auto md:max-w-md lg:max-w-lg md:h-67.75 rounded-xl"
            src="banner-img-1.png"
            alt="banner-img"
          />

          <img
            className="w-full max-w-sm h-auto md:max-w-md lg:max-w-lg md:h-67.75 rounded-xl"
            src="b2.png"
            alt="banner-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
