// import audi from '../../assets/ads/audi.png'
import AdCard from "../../components/AdCard.jsx";
import { fashion } from "../../services/groups.js";

const Furniture = () => {
  return (
    <section>
      <div
        id="alignment-container"
        className="w-[80%] mx-auto flex flex-col gap-y-[2rem] py-[3rem]"
      >
        <h4 className="text-[2rem] font-medium">Furniture</h4>
        <div
          id="ad-cards"
          className="grid grid-cols-3 grid-rows-2 gap-x-[1rem] gap-y-[1.5rem]"
        >
          {/* card */}
          {fashion.FASH.map((item, index) => {
            console.log(item);
            return (
              <AdCard
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Furniture;
