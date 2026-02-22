import React from "react";
import { useLoaderData, useParams, Link, data } from "react-router";
import "../../App.css";
import { CgInfo } from "react-icons/cg";
import { addToLocal } from "../../Utilities/localStorage";
import { ToastContainer } from "react-toastify";

const DoctorDetails = () => {
  const { registrationNumber } = useParams();
  const doctors = useLoaderData();
  const doctor = doctors.find(
    (doctor) => doctor.registrationNumber === registrationNumber,
  );
  const {
    image,
    name,
    education,
    workingAt,
    availabilityDays,
    consultationFee,
  } = doctor;

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const availableToday = availabilityDays.includes(today);

  const handleAddDoctor = (id) => {
    addToLocal(id);
  };

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
      <div className="max-w-5xl mx-auto bg-white rounded-xl px-6 md:px-10 py-8 shadow-sm flex flex-col md:flex-row mt-8 gap-6">
        <div className=" max-w-sm  overflow-hidden rounded-2xl self-start">
          <img
            src={image}
            alt="doctor image"
            className="w-full h-hull object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-plus-jakarta-sans font-bold text-3xl mb-4">
            {name}
          </h1>
          <p className="text-[#0F0F0F99] font-plus-jakarta-sans text-lg font-medium mb-4">
            {education}
          </p>
          <p className="font-plus-jakarta-sans text-xl font-medium text-[#0F0F0F] mb-4 border-b-2 border-dashed border-b-[#0F0F0F33] pb-4">
            <span className="text-[#0F0F0F80]">Working at </span>
            <br />
            {workingAt}
          </p>
          <p className="flex items-center gap-2 text-[#0F0F0FB2] font-semibold justify-start text-lg border-b-2 border-dashed border-b-[#0F0F0F33] pb-4">
            Reg No:
            {
              <span className="flex items-center gap-2 text-[#0F0F0FB2] font-semibold text-lg">
                <img className="w-[20px]" src="/r_logo.svg" alt="" />
                {registrationNumber}
              </span>
            }
          </p>
          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center my-4">
            <span className="font-plus-jakarta-sans text-[#0F0F0F] font-bold">
              Availability
            </span>
            {availabilityDays.map((day, idx) => (
              <p
                key={idx}
                className="text-[#FFA000] font-plus-jakarta-sans text-sm font-medium rounded-full  border border-[#FFA00033] bg-[#FFA0001A] py-2 px-4"
              >
                {day}
              </p>
            ))}
          </div>
          <p className="font-plus-jakarta-sans text-[#0F0F0F] font-bold">
            Consultation Fee:
            <span className="text-[#176AE5]">
              {" "}
              Taka: {consultationFee}
            </span>{" "}
            <span className="text-[#14141480] font-light">(incl. Vat)</span>{" "}
            <span className="text-[#176AE5] font-light">Per consultation</span>
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto bg-white rounded-xl px-6 md:px-10 py-8 shadow-sm my-8">
        <h1 className="font-plus-jakarta-sans text-[#141414] text-3xl font-bold text-center border-b-2 border-dashed border-b-[#0F0F0F33] pb-4">
          Book an Appointment
        </h1>
        {availableToday ? (
          <div>
            <div className="flex  justify-between items-center py-4 border-b-2 border-dashed border-b-[#0F0F0F33]">
              <h1 className="font-plus-jakarta-sans text-[#0F0F0F] text-lg font-bold">
                Availability
              </h1>
              <p className="font-plus-jakarta-sans text-sm font-medium text-[#09982F] rounded-full border border-[#09982F33] bg-[#09982F1A] px-4 py-1 ">
                Doctor Available Today
              </p>
            </div>
            <div>
              <h1 className="rounded-full bg-[#FFA0001A] text-[#FFA000] px-4 py-1  text-sm flex gap-1  items-center my-4">
                {" "}
                <CgInfo />
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
              </h1>
              <div className=" text-center   mt-4">
                <button
                  onClick={() => handleAddDoctor(registrationNumber)}
                  className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] "
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
            <ToastContainer />
          </div>
        ) : (
          <div>
            <div className="flex  justify-between items-center py-4 border-b-2 border-dashed border-b-[#0F0F0F33]">
              <h1 className="font-plus-jakarta-sans text-[#0F0F0F] text-lg font-bold">
                Availability
              </h1>
              <p className="font-plus-jakarta-sans text-sm font-medium rounded-full border-[#FF4D6D33] bg-[#FF4D6D1A] px-4 py-1 text-[#FF4D6D]">
                Doctor Is Not Available Today
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
