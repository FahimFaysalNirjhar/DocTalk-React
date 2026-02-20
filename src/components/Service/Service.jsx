import React from "react";
import "../../App.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="bg-[#EFEFEF]" ref={ref}>
      <h1 className="font-plus-jakarta-sans text-4xl font-bold text-center text-[#0F0F0F]">
        We Provide Best Medical Services
      </h1>
      <p className="text-center font-plus-jakarta-sans my-6 p-3">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center pb-20">
        <div className="card bg-base-100  shadow-sm p-6">
          <figure className="justify-start w-[55px] mb-0 pb-0">
            <img src="success-doctor.png" alt="success doctor" />
          </figure>
          <div className="card-body p-3">
            <h2 className="card-title font-plus-jakarta-sans font-extrabold text-5xl">
              {inView && <CountUp end={199} duration={3} suffix="+" />}
            </h2>
            <p className="text-[#0F0F0F99] font-plus-jakarta-sans text-2xl font-semibold  ">
              Total Doctors
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm p-6">
          <figure className="justify-start w-[55px] mb-0 pb-0">
            <img src="success-review.png" alt="success review" />
          </figure>
          <div className="card-body p-3">
            <h2 className="card-title font-plus-jakarta-sans font-extrabold text-5xl">
              {inView && <CountUp end={467} duration={3} suffix="+" />}
            </h2>
            <p className="text-[#0F0F0F99] font-plus-jakarta-sans text-2xl font-semibold  ">
              Total Reviews
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm p-6">
          <figure className="justify-start w-[55px] mb-0 pb-0">
            <img src="success-patients.png" alt="success patients" />
          </figure>
          <div className="card-body p-3">
            <h2 className="card-title font-plus-jakarta-sans font-extrabold text-5xl">
              {inView && <CountUp end={1900} duration={3} suffix="+" />}
            </h2>
            <p className="text-[#0F0F0F99] font-plus-jakarta-sans text-2xl font-semibold  ">
              Patients
            </p>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm p-6">
          <figure className="justify-start w-[55px] mb-0 pb-0">
            <img src="success-staffs.png" alt="success staffs" />
          </figure>
          <div className="card-body p-3">
            <h2 className="card-title font-plus-jakarta-sans font-extrabold text-5xl">
              {inView && <CountUp end={300} duration={3} suffix="+" />}
            </h2>
            <p className="text-[#0F0F0F99] font-plus-jakarta-sans text-2xl font-semibold  ">
              Total Stuffs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
