import React from "react";
import "../App.css";

export default function ProtectedRoute(props) {
  const login = localStorage.getItem("login");

  return (
    <div className="App">
      <h1>{login ? <props.cmp /> : <p>You are not logged in</p>}</h1>
      <button onClick={()=>{localStorage.setItem("login",true)}}>login</button> &nbsp;
      <button onClick={()=>{localStorage.clear()}}>logout</button>
    </div>
  );
}

/**
 * This is how a protected route works
 */
