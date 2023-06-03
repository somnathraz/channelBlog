import React from "react";
import Image from "next/image";

const Categories = ({ allPostsData }) => {
  return (
    <div className="wrapper">
      <h4>Your Topics</h4>
      <div className="threeGrid">
        {/* First Block */}
        <div className="topic">
          <h4>Topic1</h4>
          <hr />
          <div className="contentBlock">
            {allPostsData.slice(1, 3).map((allPostsData) => {
              const { id, desc, title, headerImg } = allPostsData;
              return (
                <>
                  <div className="content">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </div>
                  <div className="contentImg">
                    <Image
                      src={headerImg}
                      priority
                      alt="First topic"
                      className="img"
                      height={70}
                      width={70}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Second Block */}
        <div className="topic">
          <h4>Topic2</h4>
          <hr />
          <div className="contentBlock">
            {allPostsData.slice(4, 6).map((allPostsData) => {
              const { id, desc, title, headerImg } = allPostsData;
              return (
                <>
                  <div className="content">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </div>
                  <div className="contentImg">
                    <Image
                      src={headerImg}
                      priority
                      alt="Second topic"
                      className="img"
                      height={70}
                      width={70}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Third Block */}
        <div className="topic">
          <h4>Topic3</h4>
          <hr />
          <div className="contentBlock">
            {allPostsData.slice(7, 9).map((allPostsData) => {
              const { id, desc, title, headerImg } = allPostsData;
              return (
                <>
                  <div className="content">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </div>
                  <div className="contentImg">
                    <Image
                      src={headerImg}
                      priority
                      alt="Third topic"
                      className="img"
                      height={70}
                      width={70}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
