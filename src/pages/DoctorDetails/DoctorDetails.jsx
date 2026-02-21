import React from "react";
import { useLoaderData, useParams, Link } from "react-router";

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
  return <div></div>;
};

export default DoctorDetails;
