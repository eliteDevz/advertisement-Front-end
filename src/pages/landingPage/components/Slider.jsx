import { Carousel, Typography } from "@material-tailwind/react";
import slideBg1 from "../../../assets/slider/slideBg1.jpg";

const Slider = () => {
  return (
    <div
      id="slider"
      className="h-[330px] w-[80%] mx-auto bg-black rounded-[20px]"
    >
      <Carousel>
        <div className="relative">
          <img
            src={slideBg1}
            alt="background for slide one"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div
            id="overlay"
            className="h-[100%] w-[100%] p-[30px] bg-gradient-to-r from-[#000000b0] to-[#00000000] absolute top-0 left-0 rounded-[20px] flex flex-col gap-y-[1.3rem]"
          >
            <Typography variant="h1" color="white" className="text-[2.5rem] font-bold leading-[2.9rem]">
              Get the grip you need<br />for every mile
            </Typography>
            <Typography variant="lead " color="white" className="font-medium">
              From highways to off-road, our tires keep you<br />rolling no matter
              where life takes you
            </Typography>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;