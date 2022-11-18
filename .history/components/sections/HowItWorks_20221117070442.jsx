import React from "react";

function HowItWorks() {
  return <div></div>;
}

export default HowItWorks;

const StepProcess = ({ header, content }) => {
  return (
    <div className="block">
      <h1 className="font-sono">{header}</h1>
      <p>{content}</p>
    </div>
  );
};