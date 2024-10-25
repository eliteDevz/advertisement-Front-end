// import audi from '../../assets/ads/audi.png'
import axios from "axios";
import AdCard from "../../components/AdCard.jsx";
import { fashion } from "../../services/groups.js";
import { baseUrl } from "../../services/config.js";
import { useEffect, useState } from "react";
import loadingGif from '../../assets/adCard/loading.gif'

const AllAds = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAd = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseUrl}/adverts`);
      console.log(response);
      console.log(loading);
      setAds(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAd();
  }, []);

  return (
    <section>
      <div
        id="alignment-container"
        className="w-[80%] mx-auto flex flex-col gap-y-[2rem] py-[3rem]"
      >
        <h4 className="text-[2rem] font-medium">All Ads</h4>
        {loading ? (
          <div className="h-[300px] w-[100%] flex items-center justify-center">
            <img src={loadingGif} alt="loading gif" className="h-[70px]"/>
            </div>
        ) : (
          <div
            id="ad-cards"
            className="grid grid-cols-3 grid-rows-2 gap-x-[1rem] gap-y-[1.5rem]"
          >
            {/* card */}
            {ads.map((item) => {
              console.log(item);
              return (
                <AdCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllAds;
