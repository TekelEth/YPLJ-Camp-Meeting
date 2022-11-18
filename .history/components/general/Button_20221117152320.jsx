import React from "react";

function Button({ text }) {
  return (
    <button className="bg-black px-12 py-3 hover:bg-white hover:text-black hover:border hover:border-black text-white font-sono text-xl ">
      {text}
    </button>
  );
}

export default Button;