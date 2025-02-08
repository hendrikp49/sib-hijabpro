import { useState, useEffect } from "react";

const ContactUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "Category One",
    "Category Two",
    "Category Three",
    "Category Four",
    "Category Five",
    "Category Six",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative max-w-[1846px] mt-[57px] rounded-[10px] mx-auto bg-gray-400 min-h-[600px] w-full">
      {/* Mobile Menu Button */}
      <div className="absolute z-20 lg:hidden right-4 top-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white transition-colors rounded-lg hover:bg-gray-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`
            lg:px-16 lg:pt-8 
            ${isMobileMenuOpen ? "block" : "hidden lg:block"}
            ${isLoaded ? "animate-fadeIn" : "opacity-0"}
          `}
      >
        <ul className="flex flex-col items-center gap-6 p-4 bg-gray-800 lg:flex-row lg:gap-x-36 lg:p-0 lg:bg-transparent">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`
                    text-base font-normal text-white cursor-pointer hover:text-gray-200 transition-all
                    transform ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }
                  `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Content */}
      <div
        className={`
            absolute left-4 sm:left-8 lg:left-16 top-1/3 
            ${
              isLoaded
                ? "animate-slideUp opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
      >
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white leading-[1.1] transition-all duration-700">
            Questions? Let&apos;s
            <br />
            Get in Touch!
          </h1>
          <button className="px-6 py-2 text-sm text-white transition-all duration-300 transform border border-white sm:px-8 sm:py-3 sm:text-base hover:bg-white hover:text-gray-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
