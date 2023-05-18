import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Text = ({ first, second, third }) => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [first, second, third], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 600,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={el}></span>;
};

export default Text;
