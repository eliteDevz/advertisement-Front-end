import LandingNavbar from "../pages/landingPage/LandingNavbar";
import LandingFooter from "../pages/landingPage/LandingFooter";
import { Outlet } from "react-router-dom";
import Slider from "../pages/landingPage/Slider";
import SearchBar from "../components/SearchBar";
import { apiSearchProduct } from "../services/product";
import { useState } from "react";

const LandingLayout = () => {
  const [ads, setAds] = useState()
  const handleSearch = async(searchQuery) => {
 try {
   const response = await apiSearchProduct(searchQuery);
   console.log(response.data);
   setAds(response.data)
 } catch (error) {
   alert(error);
 }
  }
  return (
    <div className="w-[100vw] flex flex-col gap-y-[4rem] bg-[#ffffff]">
      <LandingNavbar />
      <Slider />
      <SearchBar onSearch={handleSearch} />
      
      <Outlet context={ads}/>
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
