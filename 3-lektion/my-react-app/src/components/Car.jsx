import React, { useEffect, useState } from "react";

const Car = ({ initialCarColor }) => {
  const [carColor, setCarColor] = useState("");
  const [showSeat, setShowSeat] = useState(true);

  useEffect(() => {
    setCarColor(initialCarColor);
  }, []);

  const changeColor = () => {
    const newColor = carColor === "red" ? "blue" : "red";
    setCarColor(newColor);
  };

  return (
    <div
      style={{
        border: "5px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>
        This div is a<span style={{ color: carColor }}> {carColor} </span>
        car
      </div>
      <button onClick={changeColor}>Change car color</button>
      {showSeat ? <Seat showColor={false} /> : <div />}
      <button
        onClick={() => {
          setShowSeat(!showSeat);
        }}
      >
        Toggle seat
      </button>
    </div>
  );
};

const Seat = (props) => {
  return <div>This div has {props.seatColor} seats</div>;
};

export default Car;
