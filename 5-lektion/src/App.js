import React from "react";
import "./App.css";
import { Image, Table } from "./components";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Image />

      <Table />
    </div>
  );
}

export default App;
