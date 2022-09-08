import "./App.css";
import { Image, Form, MyButton } from "./components";
import BackToTop from "react-back-to-top-button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [formTitle, setFormTitle] = useState("Your name?");

  const onClick = () => setFormTitle(`[${formTitle}]`);

  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">HOME</Link> |<Link to="/about">ABOUT</Link>
      </nav>
      <Image />
      <MyButton onClickButton={onClick} />
      <Form formTitle={formTitle} />
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
