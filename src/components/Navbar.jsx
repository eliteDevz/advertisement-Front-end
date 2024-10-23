import { Link } from "react-router-dom";
import avatar from '../assets/navbar/avatar.png'
import bell from '../assets/navbar/notification-bell.png'

const Navbar = () => {
  return (
    <nav className="w-[82vw] h-[12vh] bg-white z-10 box-shadow fixed top-0 right-0">
      <div id="nav-container" className="w-[95%] h-[100%] mx-auto flex">
        <div
          id="search-side"
          className="  w-[78%] h-[100%] flex items-center justify-center"
        >
          <input
            id="emailInput"
            type="email"
            className="h-[3rem] w-[500px] rounded-l-[40px] px-[25px] bg-[#FFFFFF] border-[2px]"
            placeholder="Search by category, ads or keywords"
          />
          <button
            type="submit"
            className=" h-[3rem] bg-[#e41e1b] px-[25px] rounded-r-[40px] text-white"
          >
            Search
          </button>
        </div>
        <div
          id="user"
          className="   w-[22%] h-[100%] flex items-center justify-end gap-x-[1.5rem]"
        >
          <img
            src={bell}
            alt="notification bell"
            className="h-[25px] w-[25px]"
          />
          <div className="flex gap-x-[0.7rem] items-center mr-[1rem]">
            <div className="h-[38px] w-[38px] rounded-[40px]">
              <img
                src={avatar}
                alt="profile picture"
                className="rounded-[40px]"
              />
            </div>
            <h6 className="text-[1rem] font-semibold">Sheik Mutawakill</h6>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;