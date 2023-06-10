import React from "react";
import Image from "next/image";

import Avatar from "../blogCompo/Avatar/Avatar";
import Like from "../blogCompo/Like/Like";

const FirstPart = ({ allPostsData }) => {
  return (
    <div className="twoGrid firstBox">
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
      <div className="contentRight relative zIndex-1">
        <p className="tag">
          <span className="effect-shine">Latest</span>
        </p>
        <h1>{allPostsData[0].title}</h1>
        <p>{allPostsData[0].desc}</p>
        <div className="readingTime">
          <span>{allPostsData[0].tag}</span>&nbsp;|&nbsp;
          <span>{allPostsData[0].readTime}</span>
        </div>
        <Avatar
          avatarName={allPostsData[0].author}
          avatarPosition={allPostsData[0].position}
          avatarSrc={allPostsData[0].avatar}
        />
        <Like />
      </div>
    </div>
  );
};

export default FirstPart;
