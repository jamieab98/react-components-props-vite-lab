import React from "react";
import blogData from "../data/blog";
import About from "./About.jsx";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {About()}
    </div>
  );
}

export default App;
