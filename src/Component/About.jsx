import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Hello From About</h1>

      {/* useNavigate is used to navigate to another page */}
      <button onClick={() => navigate("/useSearchParams")}>
        Navigate to About Page
      </button>
    </div>
  );
}
