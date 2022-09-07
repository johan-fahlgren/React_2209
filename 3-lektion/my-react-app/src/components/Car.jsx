import React from "react";

const Car = (props) => {
  return (
    <div style={{ border: "5px solid black" }}>
      This div is a
      <span style={{ color: props.carColor }}> {props.carColor} </span>
      car
      <Seat seatColor={props.seatColor} showColor={true} />
      {/* Add component inside another */}
    </div>
  );
};

const Seat = (props) => {
  return (
    <div>
      This car has {props.showColor ? props.seatColor : " colorless "} seats
    </div>
  );
};

export default Car;
