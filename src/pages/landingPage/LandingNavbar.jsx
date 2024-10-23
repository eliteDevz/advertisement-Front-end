const LandingNavbar = () => {
  return (
    <div>
      <nav className="bg-white w-[100vw] h-[9vh] ">
        <div
          id="nav-container"
          className="w-[80%] h-[100%] mx-auto flex items-center justify-between"
        >
          <div id="nav-logo">
            <a href="./index.html" className="text-black font-bold">
              <h3 className="text-[2.5rem]">
                Window.<span className="text-[#e41e1b] ">Shopper</span>
              </h3>
            </a>
          </div>
          <div
            id="right-side"
            className="flex gap-x-[1rem] items-center justify-center]"
          >
            <a
              href=""
              className="hover:text-[#e41e1b] hover:border-b-[1.5px] hover:border-[#e41e1b]"
            >
              Sign In
            </a>
            <span>|</span>
            <a
              href=""
              className="hover:text-[#e41e1b] hover:border-b-[1.5px] hover:border-[#e41e1b]"
            >
              Register
            </a>
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