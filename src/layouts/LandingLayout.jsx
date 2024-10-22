import LandingNavbar from "../pages/landingPage/LandingNavbar";
import LandingFooter from "../pages/landingPage/LandingFooter";
import { Outlet } from "react-router-dom";
import Slider from "../pages/landingPage/Slider";

const LandingLayout = () => {
  return (
    <div className="w-[100vw] flex flex-col gap-y-[4rem] bg-[#ffffff]">
      <LandingNavbar />
      <Slider />
      <Outlet />
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
