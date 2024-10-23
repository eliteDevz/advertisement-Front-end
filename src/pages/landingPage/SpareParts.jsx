// import audi from '../../assets/ads/audi.png'
import AdCard from "../../components/AdCard.jsx";
import { spareParts } from "../../services/groups.js";

const SpareParts = () => {
  return (
    <section>
      <div
        id="alignment-container"
        className="w-[80%] mx-auto flex flex-col gap-y-[2rem] py-[3rem]"
      >
        <h4 className="text-[2rem] font-medium">Spare Parts</h4>
        <div
          id="ad-cards"
          className="grid grid-cols-3 grid-rows-2 gap-x-[1rem] gap-y-[1.5rem]"
        >
          {/* card */}
          {spareParts.PARTS.map((part, index) => {
            console.log(part);
            return (
              <AdCard
                key={index}
                title={part.title}
                price={part.price}
                image={part.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpareParts;
