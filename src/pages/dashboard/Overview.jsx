import plus from "../../assets/dashboard/plus.png";
import VendorAdCard from "../../components/VendorAdCard";
import { fashion } from "../../services/groups";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <section id="overview" className="h-[100%] w-[100%]">
      <div
        id="alignment-container"
        className=" h-[100%]  py-[2rem] grid grid-cols-3 grid-row-2 gap-x-[1rem] gap-y-[1.5rem]"
      >
        <div
          id="add-ad"
          className=" flex items-center justify-center w-[100%] h-[170px]"
        >
          <Link to="/dashboard/new-ad">
            <div
              className="h-[170px] rounded-[150px] w-[170px] bg-white flex items-center justify-center"
              title="Add New Advert"
            >
              <img src={plus} alt="plus sign" className="h-[100px] w-[100px]" />
            </div>
          </Link>
        </div>
        {fashion.FASH.map((car, index) => {
          return (
            <VendorAdCard
              key={index}
              title={car.title}
              price={car.price}
              image={car.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Overview;
