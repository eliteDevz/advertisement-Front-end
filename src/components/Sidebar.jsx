import { Link, NavLink } from 'react-router-dom';
import logout from '../assets/sidebar/logout.png'
import chat from '../assets/sidebar/chat.png'
import settings from '../assets/sidebar/settings.png'

const Sidebar = () => {
  return (
    <section
      id="sidebar"
      className="w-[18vw] h-[100vh] bg-white box-shadow z-20 fixed top-0 left-0"
    >
      <div
        id="sidebar-container"
        className="w-[80%] h-[100%] mx-auto py-[3.2rem] pl-[1.2rem] flex flex-col gap-y-[3rem]"
      >
        <Link to="/">
          <div id="app-name" className="items-center">
            <h3 className="text-[1.4rem] font-semibold text-[#001643]">
              {/* Book<span className="text-[1.7rem] font-light">Haven</span> */}
              Window.<span className="text-[#e41e1b]">Shopper</span>
            </h3>
          </div>
        </Link>
        <div id="menu-items" className="flex flex-col gap-y-[2rem]">
          <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src=""
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({ color: isActive && "#e41e1b" })}
            >
              <h5 className="text-[1.17rem] text-[#727C8E] hover:text-[#e41e1b]">
                My Ads
              </h5>
            </NavLink>
          </div>

          <NavLink
            to="/dashboard/overview"
            style={({ isActive }) => ({ color: isActive && "#e41e1b" })}
          >
            <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
              <div
                id="img-bg"
                className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
              >
                <img
                  src=""
                  alt="heart shaped icon"
                  className="h-[28px] w-[28px]"
                />
              </div>
              <h5 className="text-[1.17rem] text-[#727C8E] hover:text-[#e41e1b]">
                Overview
              </h5>
            </div>
          </NavLink>
          <Link to="">
            <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
              <div
                id="img-bg"
                className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
              >
                <img
                  src=""
                  alt="heart shaped icon"
                  className="h-[28px] w-[28px]"
                />
              </div>
              <h5 className="text-[1.17rem]  text-[#727C8E]">Authors</h5>
            </div>
          </Link>
        </div>

        <hr className="w-[100%] mx-auto border-t-2px " />

        <div id="preferences" className="flex flex-col gap-y-[2rem]">
          <div
            id="preference-item"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={settings}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Settings</h5>
          </div>
          <div
            id="preference-item"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={chat}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Support</h5>
          </div>
          <div
            id="preference-item"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={logout}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Logout</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar