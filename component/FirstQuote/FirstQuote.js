import React, { useEffect } from "react";
import Text from "../Animation/Text";

const FirstQuote = () => {
  return (
    <div className="wrapper globalMarginTop">
      <div className="quote">
        <p>Welcome To Channel</p>
        <h2>
          Craft Narratives ✍️ , that ignite{" "}
          <span>
            <Text first="Creativity" second="innovation" third="imagination" />{" "}
            💡,
          </span>
          <br />
          <span>Knowledge 📚,</span> and <span>Entertainment🎬</span>
        </h2>
      </div>
    </div>
  );
};

export default FirstQuote;
