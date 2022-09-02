import React from "react";
import "../styles/styles.css";
import randomNum from "simple-random-number-generator";

const List = () => {
  const array = [
    "I do not fear computers. I fear lack of them. -Isaac Asimov",
    "The computer was born to solve problems that did not exist before. -Bill Gates",
    "Physics is the universe´s operating system. -Steven R Garman",
    "The more you know, the more you realize you know nothing. -Socrates",
    "If people never did silly things, nothing intelligent would ever get done. -Ludwig Wittgenstein",
  ];

  let params = {
    min: 23,
    max: 323,
  };

  return (
    <ul className="list">
      {array.map((item) => (
        <li>
          <b>Starlog {randomNum(params)}:</b> {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
