import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LandingFooter = () => {

    const date = new Date().getFullYear()
    console.log(date);

const navigate = useNavigate();

    const handleAdvertise = () => {
      Swal.fire({
        title: "You need an account to be able to post ads.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Create Account",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#e41e1b",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to the advertisement page
          navigate("/signup"); // change '/post_ad' to the correct route
        }
      });
    };

  return (
    <footer className="w-[100vw] h-[40vh] bg-[#EAEAEA] relative py-[80px]">
      <div id="alignment-container" className="w-[80%] h-[100%] mx-auto">
        <div id="top" className="flex justify-between">
          <div id="left" className="flex flex-col gap-y-[1rem]">
            <h5 className="font-semibold text-[1.2rem]">Useful Links</h5>
            <ul className="flex flex-col gap-y-[0.7rem]">
              <Link to="/signup">
                <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer">
                  Register Account
                </li>
              </Link>
              <Link to="/login">
                <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer">
                  Login
                </li>
              </Link>
              <Link to="/">
                <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer" onClick={handleAdvertise}>
                  Advertise
                </li>
              </Link>
              <Link to="">
                <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer">
                  Back to top
                </li>
              </Link>
            </ul>
          </div>
          <div id="middle" className="flex flex-col items-center gap-y-[1rem]">
            <h4 className="text-[2rem] font-semibold">
              Subscribe to our Newsletter
            </h4>
            <form action="" className="flex">
              <input
                id="emailInput"
                type="email"
                className="h-[3rem] w-[400px] rounded-l-[40px] px-[25px]"
                placeholder="Input your email here"
              />
              <button
                type="submit"
                className=" h-[3rem] bg-[#e41e1b] px-[25px] rounded-r-[40px] text-white hover:bg-black"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div id="right" className="flex flex-col gap-y-[1rem]">
            <h5 className="font-semibold text-[1.2rem]">Help & Support</h5>
            <ul className="flex flex-col gap-y-[0.7rem]">
              <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer">
                About Window.Shopper
              </li>

              <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer">
                Contact Us
              </li>

              <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer">
                Terms of Service{" "}
              </li>

              <li className="text-[#6a5a5a] hover:text-[#e41e1b] cursor-pointer">
                FAQs{" "}
              </li>
            </ul>
          </div>
        </div>
        <div
          id="bottom"
          className="text-center absolute bottom-[10px] left-[50%] -translate-x-[50%] "
        >
          <p className="text-[#6a5a5a]">
            © Copyright {date} | Sweat and blood of Elite.Devs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
