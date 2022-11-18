import React from "react";

function HowItWorks() {
  return (
    <div className="grid py-16 grid-cols-2">
      <div className="flex flex-col">
        <StepProcess
          header="Morning Worship"
          content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
        />
        <StepProcess
          header="Content Word"
          content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
        />
        <StepProcess
          header="Games & Fun"
          content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
        />
      </div>
      <div></div>
    </div>
  );
}

export default HowItWorks;

const StepProcess = ({ header, content }) => {
  return (
    <div className="block pl-6 border-l-4 mb-12 border-black pr-16 ">
      <h1 className="font-sono mb-2 text-gray-800 text-2xl block font-semibold">
        {header}
      </h1>
      <p className="block text-lg font-poppins  leading-[30px] ">{content}</p>
    </div>
  );
};
