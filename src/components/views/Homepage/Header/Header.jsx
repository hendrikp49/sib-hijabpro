import Navbar from "../../../templates/Navbar";

const Header = () => {
  return (
    <header className="max-w-[1846px] text-white relative px-[45px] pt-[180px] pb-[53px] h-[1024px] mx-auto rounded-md bg-[#C4C4C4] flex">
      <Navbar />
      {/* text absolute center */}
      <div className="absolute bottom-[96px] left-0 right-0 flex flex-col items-center justify-center text-center gap-y-5">
        <h1 className="2xl:text-[84px] lg:text-[42px] text-[28px] font-medium 2xl:text-6xl max-w-[1225px]">
          Redefining Modesty with Style and Comfort
        </h1>
        <p className="font-sans text-sm 2xl:text-lg max-w-[764px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
      </div>
      <div className="flex flex-col justify-between w-full">
        {/* top */}
        <div className="flex items-center justify-between w-full">
          {/* left */}
          <div className="max-w-[387px] flex flex-col gap-y-[14px]">
            <h2 className="font-medium text-lg 2xl:text-[22px]">Since 2024</h2>
            <p className="font-sans text-sm 2xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          {/* right */}
          <p className="flex flex-col items-center text-lg 2xl:text-2xl">
            <span>01</span>
            <span>/</span>
            <span>09</span>
          </p>
        </div>

        {/* bottom */}
        <div className="flex justify-between w-full">
          {/* left */}
          <ul className="flex flex-wrap text-lg 2xl:text-2xl items-center gap-x-[25px]">
            <li>
              <a href="#">TW</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
            <li>
              <a href="#">FB</a>
            </li>
            <li>
              <a href="#">WA</a>
            </li>
          </ul>
          {/* right */}
          <button className="flex items-center justify-center 2xl:w-[57px] w-[30px] aspect-square rounded-full border border-white">
            <img src="images/illustration/arrow-down.svg" alt="arrow-down" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
