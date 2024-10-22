import Signup from "../../components/Signup";
import LandingFooter from "../landingPage/LandingFooter";
import LandingNavbar from "../landingPage/LandingNavbar";

const SignUp = () => {
  return (
    <div className="w-[100vw] flex flex-col gap-y-[4rem] bg-[#ffffff]">
      <LandingNavbar />
      <Signup />
      <LandingFooter />
    </div>
  );
}

export default SignUp;