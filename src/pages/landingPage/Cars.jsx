// import audi from '../../assets/ads/audi.png'
import AdCard from "../../components/AdCard.jsx";
import { vehicles } from "../../services/groups.js";

const Cars = () => {
  return (
    <section>
      <div
        id="alignment-container"
        className="w-[80%] mx-auto flex flex-col gap-y-[2rem] py-[3rem]"
      >
        <h4 className="text-[2rem] font-medium">Cars</h4>
        <div
          id="ad-cards"
          className="grid grid-cols-3 grid-rows-2 gap-x-[1rem] gap-y-[1.5rem]"
        >
          {/* card */}
          {vehicles.CARS.map((car, index) => {
            console.log(car);
            return (
              <AdCard
                key={index}
                title={car.title}
                price={car.price}
                image={car.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cars;
