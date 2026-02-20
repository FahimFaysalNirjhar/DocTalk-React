import React from "react";

const Doctor = ({ doctor }) => {
  const { image, name, experience, education, registrationNumber } = doctor;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-3">
        <figure className="h-[205px] w-full overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="Doctor"
            className="w-full h-full object-cover object-top"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-5">
            <p className="text-[#09982F] rounded-full border border-[rgba(9,152,47,0.2)] bg-[rgba(9,152,47,0.1)] text-center flex justify-center items-center p-3 md:p-0">
              Available
            </p>
            <p className="text-[#176AE5] rounded-full border border-[#176AE533] bg-[#176AE51A] text-center flex justify-center items-center p-1 md:p-0">
              {experience} experience
            </p>
          </div>
          <h2 className="card-title  ">{name}</h2>
          <p className="text-[#0F0F0F99] font-medium border-b-2 border-dashed border-b-[#0F0F0F33] pb-4">
            {education}
          </p>
          <p className="flex items-center gap-2 text-[#0F0F0FB2] font-semibold text-lg">
            <img className="w-[20px]" src="r_logo.svg" alt="" /> Reg No:{" "}
            {registrationNumber}
          </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] ">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
