import React, { useState } from "react";
import style from "./Navbar.module.css";
import { items } from "./item";
import Link from "next/link";

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <ul
      className={toggleDropdown ? style.subItemH : style.subItem}
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
