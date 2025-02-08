const About = () => {
  return (
    <section className="mt-[57px] max-w-[1846px] mx-auto py-[76px] px-11 shadow-[4px_0px_10px_0px_rgba(0,0,0,0.1)] rounded-md">
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-0 lg:justify-between lg:items-center">
        {/* left */}
        <div className="flex flex-col gap-[41px]">
          <div>
            <h2 className="font-medium 2xl:text-[48px] lg:text-[32px]">
              3000 +
            </h2>
            <p className="2xl:text-2xl lg:text-xl">Lorem Ipsum Dolor</p>
          </div>
          <button className="py-[17.5px] rounded-[5px] border border-black">
            Get Started
          </button>
        </div>

        {/* right */}
        <div className="flex flex-col 2xl:max-w-[1343px] lg:max-w-[800px] lg:flex-row 2xl:gap-[71.5px] gap-[41px]">
          {/* card 1 */}
          <div className="flex flex-col gap-5">
            <h2 className="font-medium 2xl:text-[40px] lg:text-[28px]">
              Section One
            </h2>
            <p className="2xl:text-[18px] lg:text-[16px] text-[14px]">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim
              ad minim
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col gap-5">
            <h2 className="font-medium 2xl:text-[40px] lg:text-[28px]">
              Section Two
            </h2>
            <p className="2xl:text-[18px] lg:text-[16px] text-[14px]">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim
              ad minim
            </p>
          </div>
          {/* card 3 */}
          <div className="flex flex-col gap-5">
            <h2 className="font-medium 2xl:text-[40px] lg:text-[28px]">
              Section Three
            </h2>
            <p className="2xl:text-[18px] lg:text-[16px] text-[14px]">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim
              ad minim
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
