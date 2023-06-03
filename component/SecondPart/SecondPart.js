import React from "react";
import Image from "next/image";

const SecondPart = ({ allPostsData }) => {
  return (
    <div className="GridWrapper">
      <div className="flexBox ">
        <Image
          src={allPostsData[0].headerImg}
          priority
          alt="First part background image channelBlog"
          className="img"
          height={380}
          width={400}
        />
        <div className="textBox">
          <h1>{allPostsData[0].title}</h1>
          <span>{allPostsData[0].tag}</span>&nbsp;|&nbsp;
          <span>{allPostsData[0].readTime}</span>
        </div>
      </div>
      <div className="threeGrid paddingBox">
        {allPostsData.slice(2, 8).map((allPostsData) => {
          const { id, title, headerImg, tag, readTime } = allPostsData;

          return (
            <>
              <div className="blogBlock" key={id}>
                <Image
                  // src="/bgImg.jpg"
                  src={headerImg}
                  priority
                  alt="First part background image channelBlog"
                  className="img"
                  height={120}
                  width={180}
                />
                <div className="imgContent">
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
