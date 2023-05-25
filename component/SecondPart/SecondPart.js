import React from "react";
import style from "./SecondPart.module.css";
import Image from "next/image";

const SecondPart = ({ allPostsData }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imgWrapLeft}>
        <Image
          src={allPostsData[0].headerImg}
          priority
          alt="First part background image channelBlog"
          className={style.img}
          height={380}
          width={400}
        />
        <div className={style.img}>
          <h1>{allPostsData[0].title}</h1>
          <span>{allPostsData[0].tag}</span>&nbsp;|&nbsp;
          <span>{allPostsData[0].readTime}</span>
        </div>
      </div>
      <div className={style.imgWrapRight}>
        {allPostsData.slice(2, 8).map((allPostsData) => {
          const { id, title, headerImg, tag, readTime } = allPostsData;
          console.log(allPostsData);
          return (
            <>
              <div className={style.blogBlock} key={title}>
                <Image
                  // src="/bgImg.jpg"
                  src={headerImg}
                  priority
                  alt="First part background image channelBlog"
                  className={style.img}
                  height={120}
                  width={180}
                />
                <div className={style.imgContent}>
                  <h6>{title}</h6>
                  <span>{tag}</span>&nbsp;|&nbsp;
                  <span>{readTime}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SecondPart;
