import { useState } from "react";

const ProductSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    {
      id: 1,
      name: "Product One",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 2,
      name: "Product Two",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 3,
      name: "Product Three",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 4,
      name: "Product Four",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 5,
      name: "Product Five",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 6,
      name: "Product Six",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 7,
      name: "Product Seven",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 8,
      name: "Product Eight",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 9,
      name: "Product Nine",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 10,
      name: "Product Ten",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 11,
      name: "Product Eleven",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
    {
      id: 12,
      name: "Product Twelve",
      description:
        "Lorem ipsum dolor sit amet, consectetlpiscing elit, sed do eiusmod tempor incididunt",
      image: "/api/placeholder/280/280",
    },
  ];

  // Calculate how many products to show per page based on screen size
  const getProductsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 4; // Desktop
    }
    return 4; // Default for SSR
  };

  const totalPages = Math.ceil(products.length / getProductsPerPage());
  const displayedProducts = products.slice(
    currentPage * getProductsPerPage(),
    (currentPage + 1) * getProductsPerPage()
  );

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="bg-white max-w-[1846px] mx-auto pt-[76px] pb-[90px] rounded-[10px] px-[45px] shadow-[4px_0px_10px_0px_rgba(0,0,0,0.1)] mt-[57px]">
      <div className="">
        <div className="max-w-[1920px] mx-auto">
          {/* Responsive Typography */}
          <h1 className="mb-6 text-3xl font-medium text-center sm:mb-8 lg:mb-12 sm:text-4xl lg:text-5xl">
            Explore Styles for Every
            <br />
            Mood and Moment
          </h1>

          {/* Responsive Product Grid */}
          <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6 lg:mb-12">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col animate-fadeIn"
                style={{ animationDelay: `${product.id * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="2xl:max-w-[410px] self-center lg:self-auto  max-w-[204px] md:max-w-[300px] 2xl:h-[414px] md:h-[304px] h-[200px] mb-3 overflow-hidden bg-gray-300 rounded-lg sm:mb-4 aspect-square group">
                  <img
                    // src={product.image}
                    // alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Product Info */}
                <h3 className="mb-2 text-xl font-medium sm:text-2xl">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base line-clamp-2">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          {/* Responsive Navigation Dots */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-8 sm:w-12 lg:w-16 h-1 rounded-full transition-all duration-300 ${
                  currentPage === index ? "bg-black" : "bg-gray-200"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
