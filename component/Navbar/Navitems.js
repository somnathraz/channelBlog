import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { menu } from "./menu";
import Dropdown from "./Dropdown";
import RegisterPopup from "../RegisterPopup/RegisterPopup";

// import { FaBars } from "react-icons/fa";

const Navitems = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [formShow, setFormShow] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

  return (
    <div className="navItem">
      <span>
        {/* {mobile ? (
          <FaBars className="hamburger} />
        ) : ( */}
        <>
          {menu.map((menu) => {
            if (menu.itemName === "Services") {
              return (
                <span
                  key={menu.id}
                  onMouseEnter={() => setToggleDropdown(true)}
                  onMouseLeave={() => setToggleDropdown(false)}
                >
                  <Link href={menu.path}>{menu.itemName}</Link>
                  {toggleDropdown && <Dropdown />}
                </span>
              );
            }
            return (
              <span key={menu.id}>
                <Link href={menu.path}>{menu.itemName}</Link>
              </span>
            );
          })}
        </>
        {/* )} */}
      </span>
      <span>Sign In </span>
      <span>
        <button className="btn" onClick={() => setFormShow(true)}>
          Get Started {formShow && <RegisterPopup setFormShow={setFormShow} />}
        </button>
      </span>
    </div>
  );
};

export default Navitems;
