import React from "react";
import Image from "next/image";
import Avatar from "../blogCompo/Avatar/Avatar";
import Like from "../blogCompo/Like/Like";

const SecondPart = ({ allPostsData }) => {
  return (
    <div className="GridWrapper">
      <div className="flexColumn flexJustifyCenter paddingBox gap10  cursor">
        <div className="imgWrapper">
          <Image
            src={allPostsData[1].headerImg}
            priority
            alt="First part background image channelBlog"
            className="img"
            height={380}
            width={400}
          />
        </div>
        <div className="flexColumn relative gap10">
          <h4>{allPostsData[1].title}</h4>
          <p>{allPostsData[1].desc}</p>
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
      <div className="threeGrid paddingBox">
        {allPostsData.slice(2, 8).map((allPostsData) => {
          const { id, title, headerImg, tag, readTime } = allPostsData;

          return (
            <div
              className="flexColumn height width flexJustifyBetween cursor"
              key={id}
            >
              <div className="imgWrapper">
                <Image
                  // src="/bgImg.jpg"
                  src={headerImg}
                  priority
                  alt="First part background image channelBlog"
                  className="img"
                  height={120}
                  width={180}
                />
              </div>
              <div className="flexColumn flexJustifyBetween width ">
                <h6 className="h6">{title}</h6>
                <div className="tagWA">
                  <span>{tag}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondPart;
