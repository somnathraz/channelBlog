import { React, useState } from "react";
import style from "./Slider.module.css";
import Image from "next/image";

const Slider = () => {
  function Prev() {
    console.log("I'm prev");
  }
  function Next() {
    console.log("I'm next");
  }

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperbtn}>
        <button onClick={Prev}>Prev</button>
        <button onClick={Next}>Next</button>
      </div>
      <div className={style.slider}>
        <Image
          src="/hc.jpg"
          alt="Slider image"
          fill={true}
          style={{ objectFit: "content" }}
        />
      </div>
    </div>
  );
};

export default Slider;
