import React, { useState } from "react";
import Car from "./Car";

const Garage = ({ nrOfCars, carColorsArray }) => {
  const array = Array.from(Array(nrOfCars), (_, index) => index + 1);

  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "10px solid red" }}>
      <h2>You are inside a garage containing {nrOfCars} cars</h2>
      {carColorsArray.map((color) => (
        <Car initialCarColor={color} />
      ))}
      <div>
        <button
          style={{ width: "400px", height: "50px" }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Number of clicks <b>{count}</b>
        </button>
      </div>
    </div>
  );
};

export default Garage;
