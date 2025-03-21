import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "react-bootstrap";

function HomeSectionCarousel({data,sectionName}) {
    const [activeIndex, setactiveIndex] = useState(0)
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = data.map((item) => <HomeSectionCard product={item} />);
  const slidePrev = ()=> setactiveIndex(activeIndex-1);
  const slideNext = ()=> setactiveIndex(activeIndex+1);
    
        return (
    <div className="border ">
        <h2 className="py-5 text-2xl text-left px-20 font-extrabold text-gray-800">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          renderPrevButton={() => {
            return (
              <>
                {activeIndex !== 0 && (
                  <Button
                    varient="contained"
                    className="z-50  h-20 border w-12 bg-white absolute top-28 -left-5 translate-x-50"
                    aria-label="next"
                    onClick={slidePrev}
                  >
                    <ChevronLeftIcon className="rotate-0" />
                  </Button>
                )}
              </>
            );
          }}
          renderNextButton={() => {
            return (
              <>
                {activeIndex !== items.length - 5 && (
                  <Button
                    varient="contained"
                    className="z-50 h-20 border w-12 bg-white absolute top-28 -right-5  translate-x-50"
                    aria-label="next"
                    onClick={slideNext}
                  >
                    <ChevronLeftIcon className="rotate-180" />
                  </Button>
                )} 
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
