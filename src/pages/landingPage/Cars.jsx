// import audi from '../../assets/ads/audi.png'

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
          <div className="w-[100%] h-[170px]  flex rounded-[6px] shadow-lg">
            <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm">
              <img
                src="https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258"
                alt="Image of ad"
                className="w-[100%] h-[100%] rounded-[inherit]"
              />
            </div>
            <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
              <h5 className="font-medium">Audi RS5 2014</h5>
              <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
                $40,000.00
              </h4>
            </div>
          </div>
          <div className="w-[100%] h-[170px]  flex rounded-[6px] shadow-lg">
            <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm">
              <img
                src="https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258"
                alt="Image of ad"
                className="w-[100%] h-[100%] rounded-[inherit]"
              />
            </div>
            <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
              <h5 className="font-medium">Audi RS5 2014</h5>
              <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
                $40,000.00
              </h4>
            </div>
          </div>
          <div className="w-[100%] h-[170px]  flex rounded-[6px] shadow-lg">
            <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm">
              <img
                src="https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258"
                alt="Image of ad"
                className="w-[100%] h-[100%] rounded-[inherit]"
              />
            </div>
            <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
              <h5 className="font-medium">Audi RS5 2014</h5>
              <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
                $40,000.00
              </h4>
            </div>
          </div>
          <div className="w-[100%] h-[170px]  flex rounded-[6px] shadow-lg">
            <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm">
              <img
                src="https://carfax-img.vast.com/carfax/v2/-8672953507659361787/1/344x258"
                alt="Image of ad"
                className="w-[100%] h-[100%] rounded-[inherit]"
              />
            </div>
            <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
              <h5 className="font-medium">Audi RS5 2014</h5>
              <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
                $40,000.00
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cars;