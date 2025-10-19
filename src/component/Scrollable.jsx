import React, { useRef } from 'react'
import { ArrowLeftOutlineIcon, ArrowRightOutlineIcon } from './ui/Icons'
import ScrollableImg1 from './scrollable images/ScrollableImg1'
import ScrollableImg2 from './scrollable images/ScrollableImg2'
import ScrollableImg3 from './scrollable images/ScrollableImg3'
import ScrollableImg4 from './scrollable images/ScrollableImg4'

const Scrollable = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth / 3; // scroll about one box width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const boxes = [
    { id: 1, component: ScrollableImg1 },
    { id: 2, component: ScrollableImg2 },
    { id: 3, component: ScrollableImg3 },
    { id: 4, component: ScrollableImg4 },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 transition-colors duration-200"
      >
        <ArrowLeftOutlineIcon className="w-6 h-6" />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 p-4"
      >
        {boxes.map((box) => {
          const ImageComponent = box.component;
          return (
            <div key={box.id} className="flex-shrink-0 w-110 h-85 mt-15">
              <ImageComponent />
            </div>
          );
        })}
      </div>
      
      <button 
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 transition-colors duration-200"
      >
        <ArrowRightOutlineIcon className="w-6 h-6" />
      </button>
    </div>
  )
}

export default Scrollable