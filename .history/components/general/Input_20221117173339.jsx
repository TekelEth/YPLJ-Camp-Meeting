import React from "react";

function Input({ type = "text", placeholder, label, name, textArea, ...rest }) {
  return (
    <div className="mb-4">
      <label className="text-lg  font-sono" htmlFor="label">
        {label}
      </label>
      {textArea ? (
        <textArea
          className="border  text-gray-700 mt-2 focus:border-AP-blue-100  rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
          required
        ></textArea>
      ) : (
        <input
          type={type}
          name={name}
          {...rest}
          placeholder={placeholder}
          className="border  text-gray-700 mt-2 focus:border-AP-blue-100  rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
          required
        />
      )}
    </div>
  );
}

export default Input;
