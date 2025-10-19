import React from "react";
import MainTitle from './MainTitle'
import MainParagraph from './MainParagraph'
import MainBgImage from './MainBgImage'

const MainText = ({ variant }) => {
  const base =
    "absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center";

  return (
    <div className="relative w-full h-screen">
      <MainBgImage />
      <div
        className={`${base} ${
          variant === "lg" ? "top-32 gap-8" : "top-20 space-y-5"
        }`}
      >
        <MainTitle
          className={
            variant === "lg" ? "text-2xl font-bold" : "text-4xl font-bold"
          }
          title="Get Your Bakery Items Delivered"
        ></MainTitle>
        <MainParagraph
          className={
            variant === "lg"
              ? "text-[clamp(14px,16px,24px)] whitespace-nowrap"
              : "text-lg font-normal whitespace-nowrap"
          }
          text="Get your favorite bakery items baked and delivered to your doorsteps all day everyday"
        ></MainParagraph>
      </div>
    </div>
  );
};

export default MainText;
