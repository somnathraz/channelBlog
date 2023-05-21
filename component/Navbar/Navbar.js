import React from "react";
import style from "./Navbar.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navitems from "./Navitems";
import Dropdown from "./Dropdown";
// import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className={style.wrapper}>
        <div className={style.navLogo}>
          <Image
            src="/ChannelBlog.webp"
            alt="Logo channelBlog"
            width={95}
            height={80}
          />
        </div>
        <Navitems />
      </nav>
    </>
  );
};

export default Navbar;
