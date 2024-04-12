import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

export default function UseLocationHooks() {
  const location = useLocation(); // # use of location object here
  console.log(location);

  return (
    <div className="App">
      <h1>UseLocationHooks</h1>
    </div>
  );
}

/**
 * when we use useLocation hooks, it will return the current location object
 * when we move from one route to another route, at that time we can check what information we are getting from useLocation object
  
 * we get this information from use location object
 *  hash: ""
 *  key: "kgk1hjrk"
 *  pathname: "/location"
 *  search: "?age=10"
  
 *  state: { 
             "name": "bilal javed",
              "age": 25,
              "cms": 2525 
            } 

 */
