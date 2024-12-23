import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { apiSignup } from "../services/auth";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveSignup = async (event) => {
    event.preventDefault(); //prevents the page from reloading
    try {
      setLoading(true);
      //prepare data to be sent to the backend
      const formData = new FormData(event.target); //takes data from the form
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const location = formData.get("location");
      const password = formData.get("password");

      //check if password match if you are using 2 password feilds
      //if (password1 !== password2){
      //return
      //   }
      //
      //payload contains key : value pairs below
      //if key and value are same, pick one eg. name, if not then state both seperated with a colon(;) eg. name:name
      const payload = { firstName, lastName, email, location, password };
      const response = await apiSignup(payload);
      // console.log(response.data);



      
    

      Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        showConfirmButton: false,
        timer: 1000,
      });

      navigate("/dash-board"); //change this to dashboard when Joel gives you the route
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: "Please check your details and try again.",
      });
    } finally {
      setLoading(false); //if you dont do this the loading will continue even if there is an error
    }
  };

  return (
    <div className="bg-[#EAEAEA] flex justify-center items-center w-[100vw] h-[100vh] ">
      <div
        id="main"
        className="w-[80vw] h-[60vh] p-[4%] absolute bg-[#3B3B3B] flex flex-col justify-center"
      >
        <div id="description" className="w-[60%]">
          <h3 className="text-white text-[2.5rem] text-left">
            Already have an account?
          </h3>
          <h4 className="text-white text-[1.2rem] text-left">
            Click on the button below to login
          </h4>
        </div>

        <Link to="/login">
          <button
            type="button"
            className="border-2 border-white w-[15%] bg-[#3B3B3B] text-white px-4 py-2 rounded-lg mt-[5%] hover:bg-[#E41E1B]"
          >
            LOGIN
          </button>
        </Link>
      </div>

      <div
        id="subscidiary"
        className="bg-[white] md:w-[30vw] sm:w-[60vw] md:h-[70vh]  border-black flex justify-center items-center ml-[40%] md:relative"
      >
        <form
          onSubmit={saveSignup}
          className="md:w-full sm:w-[60vw] flex flex-col items-center"
        >
          <h1 className="text-[#E41E1B] font-bold text-3xl mb-2">SIGN UP</h1>

          <div className="mb-2 w-[70%]">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name here"
              className="w-full p-1 border rounded "
              required
            />
          </div>

          <div className="mb-2 w-[70%]">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name here"
              className="w-full p-1 border rounded "
              required
            />
          </div>

          <div className="mb-2 w-[70%]">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
              className="w-full p-1 border rounded"
              required
            />
          </div>
          <div className="mb-2 w-[70%]">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="location"
              id="location"
              name="location"
              placeholder="Enter your location here"
              className="w-full p-1 border rounded"
              required
            />
          </div>

          <div className="mb-2 w-[70%]">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password here"
              className="w-full p-1 mb-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="border-2 border-white bg-[#E41E1B] text-white px-4 py-2 rounded-lg hover:bg-[#E41E1B]"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
