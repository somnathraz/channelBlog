import React from "react";
import style from "./FirstPart.module.css";
import Image from "next/image";

const FirstPart = ({ allPostsData }) => {
  // console.log(allPostsData);
  return (
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
        <Image
          // src={allPostsData[0].headerImage}
          src="/hc.jpg"
          priority
          alt="First part background image channelBlog"
          className={style.img}
          height={200}
          width={500}
        />
      </div>
      <div className={style.contentRight}>
        <h1>{allPostsData[0].title}</h1>
        <p>{allPostsData[0].desc}</p>
        <div className={style.readingTime}>
          <span>{allPostsData[0].tag}</span>&nbsp;|&nbsp;
          <span>{allPostsData[0].readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
