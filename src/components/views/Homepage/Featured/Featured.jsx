import { useState, useEffect } from "react";

const Featured = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mount
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full max-w-[1846px] mx-auto rounded-[10px] mt-[57px] overflow-x-hidden bg-white shadow-[4px_0_10px_rgba(0,0,0,0.1)]">
      <div className="h-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          {/* Left Column - Title and Photo 1 */}
          <div className="md:col-span-1 lg:col-span-4">
            <h1
              className={`text-3xl sm:text-[38px] font-medium leading-tight mb-4 sm:mb-6 text-center lg:text-left
              transform transition-all duration-700 ease-out delay-300
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Explore Styles for Every
              <br />
              Mood and Moment
            </h1>
            <div
              className={`w-full lg:w-[400px] aspect-[4/5] bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-xl mx-auto lg:mx-0
              transform transition-all duration-700 ease-out delay-500
              ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              PHOTO 1
            </div>
          </div>

          {/* Middle Column - Sections and Bottom Photos */}
          <div className="flex flex-col md:col-span-1 lg:col-span-5 lg:pl-8">
            <div className="flex-1 pt-8 space-y-8 lg:pt-20 lg:space-y-12">
              {[1, 2, 3].map((num, index) => (
                <div
                  key={num}
                  className={`transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }
                  `}
                  style={{ transitionDelay: `${700 + index * 200}ms` }}
                >
                  <div className="flex items-start gap-4 mb-2">
                    <span className="text-lg text-gray-900">0{num}.</span>
                    <h2 className="text-lg font-medium text-gray-900">
                      Section {num === 1 ? "One" : num === 2 ? "Two" : "Three"}
                    </h2>
                  </div>
                  <p className="ml-12 text-sm leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                    do eiusmod tempor incididunt ulabore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 lg:mt-12 transform transition-all duration-700 delay-[1300ms]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-6 sm:flex-row lg:gap-8">
                <div
                  className={`w-full h-px bg-gray-300 sm:w-px sm:h-28 transition-all duration-500
                  ${isVisible ? "opacity-100" : "opacity-0"}`}
                />

                <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:justify-start">
                  {[3, 4, 5].map((num, index) => (
                    <div
                      key={num}
                      className={`flex items-center justify-center w-24 h-24 text-gray-600 bg-gray-300 rounded-lg
                      transform transition-all duration-500
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${1500 + index * 150}ms` }}
                    >
                      PHOTO {num}
                      {num === 5 && (
                        <div className="absolute hidden -translate-y-1/2 lg:block -right-96 top-1/2">
                          <div
                            className={`flex items-center justify-center w-10 h-10 bg-black rounded-full
                            transform transition-all duration-500 hover:scale-110
                            ${
                              isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-8 opacity-0"
                            }`}
                            style={{ transitionDelay: "2000ms" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-white transform -rotate-45"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Photo 2 */}
          <div className="md:col-span-2 lg:col-span-3">
            <div
              className={`w-full aspect-square lg:h-[280px] bg-gray-300 rounded-lg flex items-center justify-center text-lg text-gray-600
              transform transition-all duration-700 ease-out delay-[800ms]
              ${
                isVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-8 opacity-0 scale-95"
              }`}
            >
              PHOTO 2
            </div>
          </div>

          {/* Mobile Arrow Button */}
          <div
            className={`absolute lg:hidden top-6 lg:top-auto lg:bottom-6 bottom-auto right-6 transform transition-all duration-500
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "2000ms" }}
          >
            <div className="flex items-center justify-center w-10 h-10 transition-transform bg-black rounded-full hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white transform -rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
