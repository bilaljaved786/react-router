import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <h1>Home </h1>
      <Link to={"/about"}>About page</Link>
    </div>
  );
}
