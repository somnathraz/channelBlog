import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Like = () => {
  const [like, setLike] = useState(false);
  return like ? (
    <AiFillHeart className="heartIconS" onClick={() => setLike(!like)} />
  ) : (
    <AiOutlineHeart className="heartIcon" onClick={() => setLike(!like)} />
  );
};

export default Like;
