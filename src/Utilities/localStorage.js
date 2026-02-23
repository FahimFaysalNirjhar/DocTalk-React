import Swal from "sweetalert2";
const getDoctorLocal = () => {
  const storedId = localStorage.getItem("doctors");
  if (storedId) {
    return JSON.parse(storedId);
  }
  return [];
};

const addToLocal = (id) => {
  const storedId = getDoctorLocal();
  if (storedId.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have already booked an appointment with this doctor.",
    });
    return false; // ← ADD THIS
  } else {
    storedId.push(id);
    localStorage.setItem("doctors", JSON.stringify(storedId));
    return true; // ← ADD THIS
  }
};

const removeId = (id) => {
  const storedId = getDoctorLocal();
  const remainingId = storedId.filter((storedId) => storedId !== id);
  localStorage.setItem("doctors", JSON.stringify(remainingId));
};

export { addToLocal, getDoctorLocal, removeId };
