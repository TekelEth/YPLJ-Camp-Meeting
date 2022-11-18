import Link from "next/link";
import React from "react";

function NavLink({ href, name }) {
  return (
    <Link href={href}>
      <span>{name}</span>
    </Link>
  );
}

export default NavLink;