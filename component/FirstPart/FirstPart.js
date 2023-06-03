import React from "react";
import Image from "next/image";

const FirstPart = ({ allPostsData }) => {
  return (
    <div className="twoGrid">
      <div className="imgWrapper">
        <Image
          src={allPostsData[0].headerImg}
          // src="/hc.jpg"
          priority
          alt="First part background image channelBlog"
          className="img"
          height={200}
          width={500}
        />
      </div>
      <div className="contentRight">
        <h1>{allPostsData[0].title}</h1>
        <p>{allPostsData[0].desc}</p>
        <div className="readingTime">
          <span>{allPostsData[0].tag}</span>&nbsp;|&nbsp;
          <span>{allPostsData[0].readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
