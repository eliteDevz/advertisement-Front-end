import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AdvertisePopup = () => {
  const navigate = useNavigate();

  const handleAdvertise = () => {
    Swal.fire({
      title: "You need an account to be able to post ads.",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Create Account",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to the advertisement page
        navigate("/post_ad"); // change '/post_ad' to the correct route
      }
    });
  };

  return (
    <button
      onClick={handleAdvertise}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Advertise
    </button>
  );
};

export default AdvertisePopup;
