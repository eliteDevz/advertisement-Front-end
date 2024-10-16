import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";

const LandingPage = () => {
  return (
    <div className="w-[100vw] flex flex-col row-gap-[3rem]">
      <Navbar/>
      <Slider />
    </div>
  );
};

export default LandingPage;
