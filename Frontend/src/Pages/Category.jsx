import { ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import React, { useState, useRef } from "react";


const Category = () => {
  const categories = [
    {
      title: "Manual Machines",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/042/386/non_2x/farming-and-gardening-tools-equipment-with-wheel-barrow-fork-spade-watering-can-sprayer-illustration-vector.jpg",
      type: "manual",
    },
    {
      title: "Power Tools",
      image:
        "https://t.pimg.jp/054/341/129/1/54341129.jpg",
      type: "power",
    },
    {
      title: "Irrigation Systems",
      image:
        "https://cdn.shopify.com/s/files/1/0722/2059/files/manual-niyo-spray-pump-file-6145.jpg?v=1737432598",
      type: "irrigation",
    },
    {
        title: "Heavy Machinary Systems",
        image:
          "https://sharpgaruda.com/wp-content/uploads/2023/05/ATV-2A.png",
        type: "Heavy",
      },
   
  ];

  const [filter, setFilter] = useState("all");
  const scrollRef = useRef(null);

  // Filter categories based on selected filter
  const filteredCategories =
    filter === "all"
      ? categories
      : categories.filter((cat) => cat.type === filter);

  // Handle arrow clicks for horizontal scrolling
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector(".category-card").offsetWidth + 32; // Card width + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 py-16">
      <section className="container mx-auto px-4">
        {/* Header and Filters */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-10">
            <h2 className="uppercase text-4xl md:text-6xl font-extrabold text-gray-900 tracking-wider bg-clip-text  bg-gradient-to-r from-green-600 via-yellow-500 to-red-500">
              Categories
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleScroll("left")}
                className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Previous Category"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Next Category"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {["all", "manual", "power", "irrigation","Heavy"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-md ${
                  filter === type
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-8 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar
        >
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="category-card flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 snap-center"
            >
              {/* Image */}
              <div className="relative h-70 overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.title} category`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {category.title}
                </h4>
                <a
                  href={`/${category.title.toLowerCase().replace(" ", "-")}`}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-md"
                  aria-label={`Explore ${category.title}`}
                >
                  <MoveUpRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;