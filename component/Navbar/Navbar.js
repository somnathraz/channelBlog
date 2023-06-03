import React from "react";
import Image from "next/image";

import Navitems from "./Navitems";
// import Dropdown from "./Dropdown";
// import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navWrap">
        <div className="navLogo">
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
