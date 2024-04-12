import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <div>
      {/* when we define the link using [Link Tag], in that way application page doesn't 
      refresh on click */}
      <ul className="navbar">
        <li>
          {/* when we use [NavLink tag] instead of [Link tag] then NavLink tag contain active
         css class automatically on the selected element, so we can verify this while inspecting in the Element tab */}
          <NavLink to={"/home"}>Home</NavLink>
        </li>

        <li>
          <NavLink to={"/about"}>About us</NavLink>
        </li>

        <li>
          <Link to={"/contact"}>Contact us</Link>
        </li>

        <li>
          <NavLink to={"/useSearchParams"}>useSearchParams hook</NavLink>
        </li>
        <li>
          <NavLink to={"/NestedRouting"}>NestedRouting</NavLink>
        </li>
        <li>
          <NavLink
            to={"/location"}
            state={{ name: "bilal javed", age: 25, cms: 2525 }}
          >
            location
          </NavLink>
        </li>
      </ul>
      {/* when we define the link using [Anchor Tag] in that way application page refresh on click*/}
      {/* <a href="/home">Home anchor tag</a> <br /> */}
      {/* <a href="/about">About us anchor tag</a> */}
    </div>
  );
}

/**
 * [Link Tag] in the browser becomes anchor [a] tag
 */
