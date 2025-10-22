import React, { useRef, useState } from 'react'
import { ArrowLeftOutlineIcon, ArrowRightOutlineIcon } from './ui/Icons'
import Shop from './Shop'

const ProdCategory = () => {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth / 2; // scroll about half the container width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const products = [
    { id: 1, name: "Bakery", image: "/src/assets/project assets/bakery/bakery.jpg", catId: 0 },
    { id: 2, name: "Bread", image: "/src/assets/project assets/bakery/bread.png", catId: 1 },
    { id: 3, name: "Cake", image: "/src/assets/project assets/bakery/cake.png", catId: 2 },
    { id: 4, name: "Coffee", image: "/src/assets/project assets/bakery/coffe.png", catId: 3 },
    { id: 5, name: "Croissants", image: "/src/assets/project assets/bakery/croissants.png", catId: 4 },
    { id: 6, name: "Danish", image: "/src/assets/project assets/bakery/danish.png", catId: 5 },
    { id: 7, name: "Juice", image: "/src/assets/project assets/bakery/juice.png", catId: 0 },
    { id: 8, name: "Loaf", image: "/src/assets/project assets/bakery/loaf.png", catId: 1 },
    { id: 9, name: "Muffin", image: "/src/assets/project assets/bakery/muffin.png", catId: 6 },
    { id: 10, name: "Pie", image: "/src/assets/project assets/bakery/pie.png", catId: 7 },
    { id: 11, name: "Softbread", image: "/src/assets/project assets/bakery/softbread.png", catId: 1 },
  ];

  return (
    <div className="w-full bg-gray-100 px-4 pt-5 lg:p-8 lg:pb-0">
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll("left")}
          className="absolute z-10 flex items-center justify-center w-8 h-8 mt-4 rounded-full focus:outline-none bg-white shadow-lg hover:bg-green-500 transition-colors duration-200 left-0 top-1/2 -translate-y-1/2"
        >
          <ArrowLeftOutlineIcon className="w-4 h-4" />
        </button>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll("right")}
          className="absolute z-10 flex items-center justify-center w-8 h-8 mt-4 rounded-full focus:outline-none bg-white shadow-lg hover:bg-green-500 transition-colors duration-200 right-0 top-1/2 -translate-y-1/2"
        >
          <ArrowRightOutlineIcon className="w-4 h-4" />
        </button>

        {/* Scrollable Product Grid */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={() => setSelectedCategory(product.catId)}
            className="flex-shrink-0 w-48 h-56 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <div className="p-4 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center mb-3">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      
      {/* Shop Component */}
      {selectedCategory !== null && (
        <div className="mt-8">
          <Shop categoryId={selectedCategory} limit={6} />
        </div>
      )}
    </div>
  )
}

export default ProdCategory
