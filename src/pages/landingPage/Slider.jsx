import { Button, Carousel, Typography } from "@material-tailwind/react";
import slideBg1 from "../../assets/slider/slideBg1.jpg";
import cars from "../../assets/slider/cars.png";
import house from "../../assets/slider/house.png";

export const Slider = () => {
  return (
    <Carousel
      className="h-[330px] w-[80%] mx-auto  rounded-[20px] overflow-y-hidden"
      transition={{ duration: 0.5 }}
      autoplay="true"
      autoplayDelay={4000}
      loop="true"
    >
      {/* Slide 1 */}
      <div id="slide1" className="relative w-[100%] h-[100%]">
        <img
          src={slideBg1}
          alt="background for slide one"
          className="w-[100%] h-[100%] object-cover rounded-[20px] "
        />
        <div className="h-[100%] w-[80%] py-[30px] px-[100px] bg-gradient-to-r from-[#000000b0] to-[#00000000] absolute top-0 left-0 rounded-[20px] flex flex-col gap-y-[1.3rem] justify-center">
          <Typography
            variant="h1"
            color="white"
            className="text-[2.5rem] font-bold leading-[2.9rem]"
          >
            Get the grip you need
            <br />
            for every mile
          </Typography>
          <Typography variant="lead " color="white" className="font-medium">
            From highways to off-road, our tires keep you
            <br />
            rolling no matter where life takes you
          </Typography>

          <Button
            size="lg"
            className="w-[200px] px-[15px] py-[10px] font-medium border-[1.5px] hover:text-[black] hover:bg-[white]"
          >
            View Parts
          </Button>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="relative w-[100%] h-[100%]">
        <img
          src={cars}
          alt="background for slide one"
          className="w-[100%] h-[100%] object-cover rounded-[20px]"
        />
        <div className="h-[100%] w-[80%] py-[30px] px-[100px] bg-gradient-to-r from-[#000000b0] to-[#00000000] absolute top-0 left-0 rounded-[20px] flex flex-col gap-y-[1.3rem] justify-center">
          <Typography
            variant="h1"
            color="white"
            className="text-[2.5rem] font-bold leading-[2.9rem]"
          >
            From sleek sedans to powerful SUVs
            <br />
            find your perfect ride today!
          </Typography>
          <Typography variant="lead " color="white" className="font-medium">
            Discover a wide range of cars to suit
            <br />
            every lifestyle and budget.
          </Typography>

          <Button
            size="lg"
            className="w-[200px] px-[15px] py-[10px] font-medium border-[1.5px] hover:text-[black] hover:bg-[white]"
          >
            Explore Parts
          </Button>
        </div>
      </div>

      {/* Slide 3 */}

      <div id="slide3" className="relative w-[100%] h-[100%]">
        <img
          src={house}
          alt="background for slide one"
          className="w-[100%] h-[100%] object-cover rounded-[20px]"
        />
        <div className="h-[100%] w-[80%] py-[30px] px-[100px] bg-gradient-to-r from-[#000000b0] to-[#00000000] absolute top-0 left-0 rounded-[20px] flex flex-col gap-y-[1.3rem] justify-center">
          <Typography
            variant="h1"
            color="white"
            className="text-[2.5rem] font-bold leading-[2.9rem]"
          >
            Your dream home awaits!
            <br />
          </Typography>
          <Typography variant="lead " color="white" className="font-medium">
            Explore our exclusive listings of beautiful homes and properties{" "}
            <br />
            at unbeatable prices. Start your journey to homeownership now!
          </Typography>

          <Button
            size="lg"
            className="w-[200px] px-[15px] py-[10px] font-medium border-[1.5px] hover:text-[black] hover:bg-[white]"
          >
            View Homes
          </Button>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
