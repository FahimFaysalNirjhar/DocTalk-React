import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  } else {
    storedId.push(id);

    localStorage.setItem("doctors", JSON.stringify(storedId));

    toast.success("Appointment booked successfully with the doctor!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }
};

const removeId = (id) => {
  const storedId = getDoctorLocal();
  const remainingId = storedId.filter((storedId) => storedId !== id);
  localStorage.setItem("doctors", JSON.stringify(remainingId));
  toast.info("Appointment removed successfully!", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

export { addToLocal, getDoctorLocal, removeId };
