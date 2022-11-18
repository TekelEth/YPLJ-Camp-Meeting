import React from "react";
import Button from "../general/Button";
import NavLink from "../general/NavLink";

function Nav() {
  return (
    <div className="sticky top-0 mb-4 z-50 shadow-md ">
      <div className="w-full py-6 flex items-center max-w-[1450px] mx-auto justify-between">
        <h1 className="font-sono text-4xl ">Yems</h1>
        <nav className="flex items-center justify-between">
          <NavLink href="#" name="About Us" />
          <NavLink href="/#process" name="Process" />
          <NavLink href="/#review" name="Reviews" />
          <Button text="Register" />
        </nav>
      </div>
    </div>
  );
}

export default Nav;
