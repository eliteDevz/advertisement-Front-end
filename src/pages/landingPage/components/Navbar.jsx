const Navbar = () => {
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
                Shop.<span className="text-[#e41e1b] ">Window</span>
              </h3>
            </a>
          </div>
          <div
            id="right-side"
            className="flex gap-x-[1rem] items-center justify-center]"
          >
            <a href="./business.html">Sign In</a>
            <span>|</span>
            <a href="">Register</a>
            <button className="h-[5.5vh] px-[1.5rem] bg-[#e41e1b] rounded-[0.625rem] text-white hover:bg-[#e41e1b] hover:border-[2px]">
              Sell
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;