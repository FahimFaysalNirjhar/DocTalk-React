import React from "react";
import { useLoaderData, useParams, Link } from "react-router";
import "../../App.css";

const DoctorDetails = () => {
  const { registrationNumber } = useParams();
  const doctors = useLoaderData();
  const doctor = doctors.find(
    (doctor) => doctor.registrationNumber === registrationNumber,
  );

  if (!doctor) {
    return (
      <div className="bg-[#EFEFEF] min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow p-10 flex flex-col items-center gap-3 max-w-md w-full">
          <div className="text-6xl">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800">No Doctor Found!</h1>
          <p className="text-gray-500 text-center">
            No doctor found with registration number:
          </p>
          <p className="flex items-center gap-2 text-[#0F0F0FB2] font-semibold text-lg">
            <img className="w-[20px]" src="r_logo.svg" alt="" />
            {registrationNumber}
          </p>
          <Link to="/" className="mt-4 w-full flex justify-center">
            <button className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-colors">
              View All Doctors
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#EFEFEF] py-10 p-2">
      <div className="max-w-5xl mx-auto bg-white rounded-xl px-6 md:px-10 py-8 shadow-sm">
        <h1 className="font-plus-jakarta-sans text-[#141414] text-3xl font-bold text-center">
          Doctor’s Profile Details
        </h1>
        <p className="font-plus-jakarta-sans text-[#141414B3] text-justify md:text-center my-5">
          Learn more about the doctor’s qualifications, experience, and areas of
          expertise. This profile provides essential information to help you
          understand the doctor’s background, medical specialties, and
          commitment to patient care, ensuring you can make confident healthcare
          decisions.
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
