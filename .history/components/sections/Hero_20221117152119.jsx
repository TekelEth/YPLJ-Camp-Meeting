import React from "react";
import Button from "../general/Button";
import HeroRight from "../general/HeroRight";

function Hero() {
  return (
    <div className="h-[80vh]   grid grid-cols-2">
      <div className="w-full flex -mt-8 items-start  flex-col justify-center  h-full">
        <h1 className="text-6xl leading-[75px] font-semibold font-sono">
          Raising Agents Of Transformation
        </h1>

        <p className="text-lg max-w-[600px] py-3 leading-[40px] font-poppins pr-[50px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed quo
          lkore2002 Lorem ipsum, dolor.
        </p>
        <div>
          <Button text={"Join Us"} />
        </div>
      </div>
      <div className="p-4 h-full w-full">
        <HeroRight />
      </div>
    </div>
  );
}

export default Hero;
