import React from "react";
import "../styles/styles.css";

const HeroImg = () => {
  const imgUrl = "./images/random_img.jpg";
  return <img className="hero-img" src={imgUrl} alt="Random  stuff"></img>;
};

export default HeroImg;
