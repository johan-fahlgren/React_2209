import React from "react";
import Car from "./Car";

const Garage = ({ nrOfCars, carColorsArray }) => {
  const array = Array.from(Array(nrOfCars), (_, index) => index + 1);

  return (
    <div style={{ border: "10px solid red" }}>
      <h2>You are inside a garage containing {nrOfCars} cars</h2>
      {carColorsArray.map((color) => (
        <Car initialCarColor={color} />
      ))}
    </div>
  );
};

export default Garage;
