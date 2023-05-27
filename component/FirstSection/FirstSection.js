import React, { useEffect, useState } from "react";
import style from "./FirstSection.module.css";
import Image from "next/image";
import { bgImg } from "./bgImgData";
import { BarLoader } from "react-spinners";

const FirstSection = () => {
  const [imgChange, setImgChange] = useState(bgImg);
  const [src, setSrc] = useState(0);

  var index = 0;
  var iterations = 0;

  useEffect(() => {
    var updateImage = function () {
      /* reset index to zero if current index is greater than number of images.
       * increment iterations variable since it means we've done one whole loop.
       */
      if (index >= imgChange.length) {
        index = 0;
        iterations++;
      }

      // set the background image
      setSrc(imgChange[index]);
      // console.log(imgChange[index]);

      index++;
    };
    const Interval = setInterval(() => {
      updateImage();
    }, 4000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.Imgwrapper}>
        <Image
          src={src.url}
          priority
          alt="First section background image channelBlog"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div className={style.barLoader}>
          {/* <BarLoader color="#eeeeee" size={60} /> */}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
