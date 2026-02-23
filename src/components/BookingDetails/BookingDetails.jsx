import React from "react";
import "../../App.css";
import { toast } from "react-toastify";

const BookingDetails = ({ doctor, handleRemoveDoctor }) => {
  const { name, education, consultationFee, registrationNumber } = doctor;

  const handleCancel = () => {
    toast.info("Appointment removed successfully!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
    setTimeout(() => {
      handleRemoveDoctor(registrationNumber);
    }, 2600);
  };

  return (
    <div className="max-w-10/12 mx-auto bg-white shadow-sm p-8 rounded-xl mb-8">
      <div className="flex justify-between">
        <h1 className="font-plus-jakarta-sans text-[#0F0F0F] text-xl font-bold">
          {name}
        </h1>
        <p className="text-[#0F0F0F99] font-medium font-plus-jakarta-sans">
          {education}
        </p>
      </div>
      <h1 className="text-[#0F0F0F99] font-medium font-plus-jakarta-sans">
        ৳{consultationFee}
      </h1>
      <div className="w-full text-center mt-4">
        <button
          onClick={handleCancel}
          className="btn btn-wide text-[#F00] rounded-full border border-[#F00]"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
