import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <h1>Route Not Matched</h1>
      <input type="text" placeholder="enter user name" /> <br />
      <input type="text" placeholder="enter password" /> <br />
      <button type="button">Login</button>
      {/* <Link to={"/about"}>About page</Link> */}
    </div>
  );
}
