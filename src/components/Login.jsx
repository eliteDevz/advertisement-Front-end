import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiLogin, apiProfile } from "../services/auth";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveLogin = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const formData = new FormData(event.target);
      const email = formData.get("email");
      const password = formData.get("password");
      const response = await apiLogin({ email, password }); //payload goes here
      console.log(response.data);
      
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        //get user profile
        // const profileResponse = await apiProfile();
        // console.log(profileResponse.data);


      }

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please check your email or password and try again.",
      });
    } finally {
      setLoading(false); //if you dont do this the loading will continue even if there is an error
    }
  };

  return (
    <div className="bg-[#EAEAEA] sm:flex-cols-2 md:flex justify-center md:items-center w-[100vw] h-[100vh]">
      <div
        id="main"
        className="md:w-[80vw] sm:w-[50vw]  md:h-[60vh] md:p-[4%] md:absolute bg-[#3B3B3B] flex flex-col justify-center"
      >
        <div id="description" className="md:w-[60%]">
          <h1 className="text-white text-[2.5rem] text-left">
            Don&apos;t have an account?
          </h1>
          <h4 className="text-white text-[1.2rem] text-left">
            Click on the button below to create one
          </h4>
        </div>

        <Link to="/signup">
          <button
            type="button"
            className="border-2 border-white w-[15%] bg-[#3B3B3B] text-white px-4 py-2 rounded-lg mt-[5%] hover:bg-red-600"
          >
            SIGN UP
          </button>
        </Link>
      </div>

      <div
        id="subscidiary"
        className="bg-white md:w-[30vw] sm:w-[60vw] md:h-[70vh] flex justify-center items-center ml-[40%] md:relative"
      >
        <form
          onSubmit={saveLogin}
          className="w-[80%] flex flex-col items-center"
        >
          <h1 className="text-[#E41E1B] font-bold text-3xl mb-2">LOGIN</h1>
          <div className="mb-2 w-[100%]">
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
          <div className="mb-2 w-[100%]">
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
            className="mt-6 border-2 border-white bg-[#E41E1B] text-white px-4 py-2 rounded-lg w-[30%] hover:bg-[#E41E1B]"
            //notice that you put the wriring on the button eg "Login" inside the conditional rendering below
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

