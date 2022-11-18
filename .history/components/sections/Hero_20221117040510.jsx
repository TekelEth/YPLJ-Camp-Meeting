import React from "react";
import Button from "../general/Button";
import HeroRight from "../general/HeroRight";

function Hero() {
  return (
    <div className="h-[80vh]   grid grid-cols-2">
      <div className="w-full flex items-start  flex-col justify-center  h-full">
        <h1 className="text-5xl leading-[60px] font-[500] font-sono">
          A Time To Enconter<br></br> His Presence
        </h1>

        <p className="text-lg font-sono leading-[40px] py-4 pr-[50px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed quo
          lkore2002 Lorem ipsum, dolor.
        </p>
        <Button text={"Register"} />
      </div>
      <div className="p-4 h-full w-full">
        <HeroRight />
      </div>
    </div>
  );
}

export default Hero;
