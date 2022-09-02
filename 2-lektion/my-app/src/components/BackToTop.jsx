import React from "react";
import BackToTop from "react-back-to-top-button";

const ToTopButton = () => {
  return (
    <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
      <img
        className="up-arrow"
        src="./images/up-arrow.png"
        alt="up arrow"
      ></img>
    </BackToTop>
  );
};

export default ToTopButton;
