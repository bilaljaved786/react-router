import React from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

export default function UseSearchParams() {
  const [searchParams, setsearchParams] = useSearchParams({
    name: "",
    age: "",
  });

  return (
    <div className="App">
      <h1>UseSearchParams react router dom hook</h1>

      {/* to get search params from the url */}
      <h3 style={{ color: "red" }}>Age: {searchParams.get("age")}</h3>
      <h3 style={{ color: "red" }}>Name: {searchParams.get("name")}</h3>

      <input
        type="text"
        onChange={(e) => {
          setsearchParams({
            ...searchParams,
            name: e.target.value,
            age: searchParams.get("age"), // set the previous value of [age key] in searchParams object while updating the [name key] alone
          });
        }}
      />

      <br />
      <br />
      <br />

      <button
        onClick={() => setsearchParams({ name: "learning react", age: 22 })}
      >
        Click me
      </button>
    </div>
  );
}

/**
 * useSearchParams() is a react-router-dom hook
 * useSearchParams() is used when you want to get the search params from the url like [?name=bilal and ?age=23]
 */
