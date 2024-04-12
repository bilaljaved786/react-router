import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";

export default function Contact() {
  var params = useParams();

  const { name } = params;
  console.log("params is ", params);
  return (
    <div className="App">
      <h1>This is the contact page {name}</h1>
    </div>
  );
}

/**
 * for complete understanding see [App.js] Routing like
 * <Route path="/contact/:name" element={<Contact />}></Route> => /:name is the dynamic routing parameter
 */
