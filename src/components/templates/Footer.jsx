import { useState, useEffect } from "react";
import { ArrowUpRightWhite, Hijabpro } from "../../../public/icons";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Navigation links array for cleaner code
  const navLinks = [
    "Home",
    "New Arrivals",
    "Collections",
    "About Us",
    "Blog",
    "Contact Us",
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden bg-white">
      {/* Black background container */}
      <div
        className={`max-w-[1846px] mx-auto mt-[57px] bg-[#252525] rounded-[10px] 
        transform transition-all duration-700 ease-out
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="relative w-full pt-8 sm:pt-10 lg:pt-12 max-w-[1846px] mx-auto p-4 sm:p-6 lg:p-8">
          {/* Logo */}
          <div
            className={`flex items-center justify-center gap-3 mb-6 sm:mb-8 
            transform transition-all duration-500 delay-300
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <img
              src={Hijabpro}
              alt="hijab pro logo"
              className="w-32 sm:w-auto"
            />
          </div>

          {/* White section for navigation */}
          <div className="w-full bg-white rounded-[10px] p-6 sm:p-8 lg:p-12">
            {/* Top Bar */}
            <div className="flex flex-col items-start justify-between mb-12 sm:flex-row sm:items-center lg:mb-24">
              {/* Subscribe Button */}
              <div className="flex items-center gap-3 mb-6 sm:mb-0">
                <span className="text-lg sm:text-xl">Subscribe Now</span>
                <button
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#252525] rounded-full
                  transform transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={ArrowUpRightWhite}
                    alt="arrow up right white"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="absolute p-2 text-gray-500 sm:hidden top-4 right-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>

              {/* Navigation Links */}
              <nav
                className={`w-full sm:w-auto ${
                  isMenuOpen ? "block" : "hidden"
                } sm:block`}
              >
                <ul className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 lg:gap-10">
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`transform transition-all duration-500 delay-${
                        index * 100
                      }
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <a
                        href="#"
                        className="text-gray-500 transition-colors hover:text-black"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 lg:gap-40">
              {/* Footer sections data */}
              {[
                {
                  title: "Product",
                  links: [
                    "Lorem ipsum",
                    "Lorem",
                    "Dolor Sit Amet",
                    "Dolor Lorem",
                    "Ipsum Dolor",
                    "Lorem",
                  ],
                },
                {
                  title: "Explore",
                  links: ["Resources", "Blog", "Documents"],
                },
                {
                  title: "Community",
                  links: ["Community Central", "Support", "Help", "My Info"],
                },
                {
                  title: "Company",
                  links: ["About Us", "Partners", "Customers", "Contact Us"],
                },
              ].map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`transform transition-all duration-700 delay-${
                    sectionIndex * 200
                  }
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <h3 className="mb-6 text-lg lg:mb-8 sm:text-xl">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-gray-500 lg:space-y-5">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="transition-colors hover:text-black"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
