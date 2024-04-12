import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

export default function NestedRouting() {
  return (
    <div className="App">
      <h1>Nested Routing</h1>
      <Link to={"page_1"}>page_1</Link> &nbsp;
      <Link to={"page_2"}>page_2</Link> &nbsp;
      <Link to={"page_3"}>page_3</Link>
      
      {/* Outlet is used to render the child component inside the parent component */}
      <Outlet />
    </div>
  );
}
