import plus from "../../assets/dashboard/plus.png";
import { fashion } from "../../services/groups";
import { Link } from 'react-router-dom'

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
            <div
              key={index}
              className=" bg-white w-[100%] h-[170px]  flex rounded-[6px] shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
            >
              <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm flex justify-center items-center overflow-hidden">
                <img
                  src={car.image}
                  alt="Image of ad"
                  className="w-[100%] h-[100%] object-cover rounded-[inherit]  "
                />
              </div>
              <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
                <h5 className="font-medium">{car.title}</h5>
                <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
                  {car.price}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Overview;
