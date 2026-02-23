import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { getDoctorLocal } from "../../Utilities/localStorage";
import BookingDetails from "../../components/BookingDetails/BookingDetails";
import { removeId } from "../../Utilities/localStorage";
import { ToastContainer } from "react-toastify";
import "../../App.css";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f7f",
  "#a4de6c",
  "#d0ed57",
  "#83a6ed",
];

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  if (x == null || y == null || width == null || height == null) return null;
  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
};

const Booking = () => {
  const data = useLoaderData();
  const doctorId = getDoctorLocal();

  const bookedDoctors = data.filter((doctor) =>
    doctorId.includes(doctor.registrationNumber),
  );

  const chartData = [
    bookedDoctors.reduce((acc, doctor) => {
      acc[doctor.name] = doctor.consultationFee;
      return acc;
    }, {}),
  ];

  const [docId, setDocId] = useState(getDoctorLocal());

  const handleRemoveDoctor = (registrationNumber) => {
    removeId(registrationNumber);
    setDocId(getDoctorLocal());
  };

  return (
    <>
      <div className="bg-[#EFEFEF] pt-10 pb-28">
        <div className="max-w-10/12 mx-auto bg-white rounded-2xl shadow-sm border-0">
          <div className="overflow-x-auto">
            <div style={{ minWidth: "500px", height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={margin}>
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  {bookedDoctors.map((doctor, index) => (
                    <Bar
                      key={doctor.registrationNumber}
                      dataKey={doctor.name}
                      fill={COLORS[index % COLORS.length]}
                      shape={TriangleBar}
                      label={{
                        position: "top",
                        formatter: (value) => `৳${value}`,
                      }}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <h1 className="font-plus-jakarta-sans text-[##141414] text-4xl font-extrabold text-center">
            My Today Appointments
          </h1>

          <p className="mt-4 text-[#0F0F0F] font-plus-jakarta-sans text-center">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>

          {bookedDoctors.map((doctor) => (
            <BookingDetails
              key={doctor.id}
              doctor={doctor}
              handleRemoveDoctor={handleRemoveDoctor}
            />
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Booking;
