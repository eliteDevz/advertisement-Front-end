import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

const DashboardLayout2 = () => {
  return (
    <div>
      <div className="bg-[#EAEAEA] w-[100vw] h-[100vh]  shadow-lg flex relative">
        <div id="sidebar" className="w-[18%] h-[100%]">
          <Sidebar />
        </div>
        <div id="Right-side" className="w-[82%] h-[100%]">
          <div
            id="nav-placeholder"
            className="w-[82vw] h-[12vh] bg-[#a8383800]"
          >
            <Navbar />
          </div>

          <div id="action-area" className="w-[100%]  flex justify-evenly">
            <div id="middle-section" className="w-[100%] h-[100%]">
              <div
                id="middle-section-container"
                className="w-[95%] h-[100%] mx-auto pt-[20px] flex flex-col gap-y-[2rem]"
              >
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout2;
