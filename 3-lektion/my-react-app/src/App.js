import "./App.css";
import { Image, Form, MyButton } from "./components";
import BackToTop from "react-back-to-top-button";
import React, { useState } from "react";

function App() {
  const [formTitle, setFormTitle] = useState("title");

  const onClick = () => setFormTitle(`[${formTitle}]`);

  return (
    <div className="App">
      <Image />
      <MyButton onClickButton={onClick} />
      <Form formTitle={formTitle} />
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
