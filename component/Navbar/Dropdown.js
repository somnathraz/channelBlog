import React, { useState } from "react";
import { items } from "./item";
import Link from "next/link";

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <ul
      className={toggleDropdown ? "subItemH" : "subItem"}
      onClick={() => setToggleDropdown(!toggleDropdown)}
    >
      {items.map((items) => {
        return (
          <li key={items.id}>
            <Link href={items.path} onClick={() => setToggleDropdown(false)}>
              {items.itemName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
