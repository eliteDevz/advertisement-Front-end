import { Link, NavLink } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <div>
      <nav className="bg-white w-[100vw] h-[9vh] ">
        <div
          id="nav-container"
          className="w-[80%] h-[100%] mx-auto flex items-center justify-between"
        >
          <Link to="/">
            <div id="nav-logo">
              <a href="./index.html" className="text-black font-bold">
                <h3 className="text-[2.5rem]">
                  Window.<span className="text-[#e41e1b] ">Shopper</span>
                </h3>
              </a>
            </div>
          </Link>
          <div
            id="right-side"
            className="flex gap-x-[1rem] items-center justify-center]"
          >
            <NavLink
              to="/login-registration"
              // style={({ isActive }) => ({ color: isActive && "#e41e1b" })}
            >
              <a
                href=""
                className="hover:text-[#e41e1b] hover:border-b-[1.5px] hover:border-[#e41e1b]"
              >
                Sign In
              </a>
            </NavLink>
            <span>|</span>
            <NavLink
              to="/login-registration"
              style={({ isActive }) => ({
                color: isActive && "#e41e1b",
              })}
            >
              <a
                href=""
                className="hover:text-[#e41e1b] hover:border-b-[1.5px] hover:border-[#e41e1b]"
              >
                Register
              </a>
            </NavLink>
            <button className="h-[5.5vh] px-[1.9rem] bg-[#e41e1b] rounded-[0.625rem] text-white hover:bg-black ">
              Advertise
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default  LandingNavbar;