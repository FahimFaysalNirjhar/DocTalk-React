import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { getDoctorLocal, removeId } from "../../Utilities/localStorage";
import BookingDetails from "../../components/BookingDetails/BookingDetails";
import "../../App.css";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
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
const margin = { top: 20, right: 30, left: 20, bottom: 5 };

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
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("booked") === "true") {
      toast.success("Appointment booked successfully with the doctor!", {
        toastId: "book-success", // ✅ prevents duplicate
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });

      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  const data = useLoaderData();
  const [docId, setDocId] = useState(getDoctorLocal());

  const bookedDoctors = data.filter((doctor) =>
    docId.includes(doctor.registrationNumber),
  );

  const chartData = [
    bookedDoctors.reduce((acc, doctor) => {
      acc[doctor.name] = doctor.consultationFee;
      return acc;
    }, {}),
  ];

  const handleRemoveDoctor = (registrationNumber) => {
    removeId(registrationNumber);
    setTimeout(() => {
      setDocId(getDoctorLocal());
    }, 2600);
  };

  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-10 pb-28">
      {bookedDoctors.length === 0 ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-2xl shadow p-10 flex flex-col items-center gap-3 max-w-md w-full text-center">
            <div className="text-6xl">📋</div>
            <h1 className="text-2xl font-bold text-gray-800">
              No Appointments Booked!
            </h1>
            <p className="text-gray-500">
              You have not booked any appointments yet.
            </p>
            <Link to="/" className="mt-4 w-full flex justify-center">
              <button className="btn btn-wide text-[#176AE5] rounded-full border border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-colors">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
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
            <h1 className="font-plus-jakarta-sans text-[#141414] text-4xl font-extrabold text-center">
              My Today Appointments
            </h1>
            <p className="mt-4 mb-8 text-[#0F0F0F] font-plus-jakarta-sans text-center">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
            {bookedDoctors.map((doctor) => (
              <BookingDetails
                key={doctor.id}
                doctor={doctor}
                handleRemoveDoctor={handleRemoveDoctor}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;
