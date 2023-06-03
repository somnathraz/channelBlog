import Image from "next/image";
import React from "react";

Image;

const Avatar = ({ avatarSrc, avatarName, avatarPosition }) => {
  return (
    <div className="avatarWrap">
      <Image src={avatarSrc} width={40} height={40} />
      <div className="avatarInfo">
        <p className="avatarName"> {avatarName}</p>
        <p className="avatarPosition"> {avatarPosition}</p>
      </div>
    </div>
  );
};

export default Avatar;
