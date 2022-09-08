import React from "react";

const MyButton = ({ onClickButton }) => {
  return (
    <button onClick={onClickButton}>
      Change form title from button component
    </button>
  );
};

export default MyButton;
