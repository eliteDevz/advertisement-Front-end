import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiSignup } from "../services/auth";

const Signup = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  const saveSignup = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const response = apiSignup({
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        password: formData.get("password"),
      });

      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/ads"); //change this to dashboard when joel gives you the route
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: "Please check your details and try again.",
      });
    }
  };

  const saveLogin = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const response = await apiSignup(formData);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1100,
      });

      navigate("/ads");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please check your email or password and try again.",
      });
    }
  };

  return (
    <div className="bg-[rgb(204,204,204)] flex justify-center items-center w-[100vw]  h-[100vh]">
      <div id="main" className="w-[80vw] h-[60vh] p-[4%] absolute bg-[#3B3B3B]">
        {showForm ? (
          <form onSubmit={saveSignup} className="w-full">
            <div className="mb-2">
              <label
                className="block text-white font-bold mb-1"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Enter your first name here"
                className="w-[30%] p-1 border rounded border-black"
                required
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-white font-bold mb-1"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Enter your last name here"
                className="w-[30%] p-1 border rounded border-black"
                required
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-white font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                className="w-[30%] p-1 border rounded"
                required
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-white font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password here"
                className="w-[30%] p-1 mb-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="border-2 border-white bg-[#3B3B3B] text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        ) : (
          <div id="description" className="w-[60%]">
            <h1 className="text-white text-[2.5rem] text-left">
              Don't have an account?
            </h1>
            <p className="text-white text-lg">
              Click <span className="font-bold">"SIGNUP"</span> to create one
              easily!
            </p>
          </div>
        )}

        {!showForm && (
          <button
            type="button"
            onClick={handleSignupClick}
            className="border-2 border-white w-[15%] bg-[#3B3B3B] text-white px-4 py-2 rounded-lg mt-[5%] hover:bg-red-600"
          >
            Sign Up
          </button>
        )}
      </div>

      <div
        id="subscidiary"
        className="bg-[white] w-[30vw] h-[70vh] flex justify-center border-black items-center ml-[40%] relative"
      >
        <form onSubmit={saveLogin} className="w-[80%]">
          <h1 className="text-red-600 font-bold text-3xl mb-2">LOGIN</h1>
          <div className="mb-2">
            <label
              className="block text-gray-700 font-bold mb-4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-[100%] p-1 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-[100%] p-1 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 border-2 border-white bg-red-500 text-white px-4 py-2 rounded-lg w-[30%] hover:bg-red-600"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
