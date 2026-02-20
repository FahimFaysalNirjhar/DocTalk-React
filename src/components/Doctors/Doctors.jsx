import React from "react";
import "../../App.css";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ data }) => {
  return (
    <div className="bg-[#EFEFEF] p-2 pt-16 md:pt-0">
      <h1 className="font-plus-jakarta-sans text-4xl font-bold text-center text-[#0F0F0F]">
        Our Best Doctors
      </h1>
      <p className="max-w-4xl mx-auto text-center font-plus-jakarta-sans mt-8">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="max-w-9/12 mx-auto mt-6 mb-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pb-12 gap-6">
        {data.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
