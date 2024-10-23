import LandingFooter from "../landingPage/LandingFooter";
import LandingNavbar from "../landingPage/LandingNavbar";
import Login from '../../components/Login.jsx'

const LogIn = () => {
  return (
    <div className="w-[100vw] flex flex-col gap-y-[4rem] bg-[#ffffff]">
      <LandingNavbar />
      <Login />
      <LandingFooter />
    </div>
  );
};

export default LogIn;


