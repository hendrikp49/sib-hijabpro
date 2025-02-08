const Popular = () => {
  return (
    <section className="mt-[57px] max-w-[1846px] mx-auto py-[53px] px-[45px] shadow-[4px_0px_10px_0px_rgba(0,0,0,0.1)] bg-[#F6F6F6] rounded-md">
      <div className="flex flex-col gap-[63px]">
        {/* top */}
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
          <h2 className="font-medium 2xl:text-[40px] max-w-[540px] lg:text-[28px]">
            Fresh Hijabs to Complete Your Wardrobe
          </h2>
          <button className="w-[57px] flex items-center justify-center aspect-square rounded-full border border-black">
            <img src="images/illustration/arrow-right.svg" alt="arrow-right" />
          </button>
        </div>

        {/* bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-[49px] lg:gap-[30px] gap-[20px]">
          {/* card 1 */}
          <div className="max-w-[553px] relative rounded-[10px] h-[457px] bg-[#C4C4C4] px-[27px] py-[28px]">
            <div className="flex flex-col max-w-[90%] mx-auto absolute bottom-[28px] left-0 right-0 gap-[26px] items-center">
              <h3 className="font-medium text-white 2xl:text-[32px] lg:text-[24px] text-lg">
                Product One
              </h3>
              <button className="rounded-[4px] py-[22.5px] px-2 w-full bg-white">
                Buy Get Discount
              </button>
            </div>
          </div>
          {/* card 2*/}
          <div className="max-w-[553px] relative rounded-[10px] h-[457px] bg-[#C4C4C4] px-[27px] py-[28px]">
            <div className="flex flex-col max-w-[90%] mx-auto absolute bottom-[28px] left-0 right-0 gap-[26px] items-center">
              <h3 className="font-medium text-white 2xl:text-[32px] lg:text-[24px] text-lg">
                Product One
              </h3>
              <button className="rounded-[4px] py-[22.5px] px-2 w-full bg-white">
                Buy Get Discount
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className="max-w-[553px] relative rounded-[10px] h-[457px] bg-[#C4C4C4] px-[27px] py-[28px]">
            <div className="flex flex-col max-w-[90%] mx-auto absolute bottom-[28px] left-0 right-0 gap-[26px] items-center">
              <h3 className="font-medium text-white 2xl:text-[32px] lg:text-[24px] text-lg">
                Product One
              </h3>
              <button className="rounded-[4px] py-[22.5px] px-2 w-full bg-white">
                Buy Get Discount
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
