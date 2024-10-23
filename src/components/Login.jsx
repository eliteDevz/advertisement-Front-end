import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiLogin } from "../services/auth";

const Login = () => {
  const navigate = useNavigate();

  const saveLogin = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);

      const response = await apiLogin({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
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
    <div className="bg-[rgb(204,204,204)] sm:flex-cols-2 md:flex justify-center md:items-center w-[100vw] h-[100vh]">
      <div
        id="main"
        className="md:w-[80vw] sm:w-[50vw]  md:h-[60vh] md:p-[4%] md:absolute bg-[#3B3B3B]"
      >
        <div id="description" className="md:w-[60%]">
          <h1 className="text-white text-[2.5rem] text-left">
            Don't have an account?
          </h1>
        </div>

        <Link to = "/signup">
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
          <h1 className="text-red-600 font-bold text-3xl mb-2">LOGIN</h1>
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
            className="mt-6 border-2 border-white bg-red-500 text-white px-4 py-2 rounded-lg w-[30%] hover:bg-red-600"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

