import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-[30px] max-w-[1757px] flex justify-between items-center py-[17.5px] text-[#252525] bg-white absolute top-[43px] left-[45px] right-[45px] rounded-[10px]">
      {/* logo */}
      <div className="flex items-center gap-x-[11px]">
        <img src="images/illustration/logo.svg" alt="logo" />
        <span className="text-xl 2xl:text-2xl">Hijabpro</span>
      </div>
      {/* menu */}
      <ul className="lg:flex hidden text-[#825542] items-center 2xl:text-xl gap-x-[50px]">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">New Arrivals</a>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      {/* cta */}
      <div className="flex items-center relative gap-5 lg:gap-x-[35px]">
        <img src="images/illustration/cart.svg" alt="cart" className="" />
        <button className="px-[16px] hidden lg:flex py-[11px] 2xl:text-xl  rounded-[5px] border border-black">
          Get Started
        </button>
        {/* hamburger button */}
        <button
          onClick={handleOpen}
          className="lg:hidden flex flex-col gap-y-1"
        >
          <span
            className={`block w-[20px] h-[2px] transition-all duration-300 bg-black ${
              isOpen && "rotate-45 translate-y-[6px]"
            }`}
          />
          <span
            className={`block w-[20px] transition-all duration-300 h-[2px]  bg-black ${
              isOpen && "opacity-0"
            }`}
          />
          <span
            className={`block w-[20px] transition-all duration-300 h-[2px]  bg-black ${
              isOpen && "-rotate-45 translate-y-[-6px]"
            }`}
          />
        </button>
        {/* mobile menu */}
        {isOpen && (
          <div className="absolute lg:hidden z-50 rounded-[5px] top-14 w-44 p-2 -left-24 bg-white">
            <ul className="flex flex-col gap-y-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <button className="py-3 rounded-[5px] border border-black">
                Get Started
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
