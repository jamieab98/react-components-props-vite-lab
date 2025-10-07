import React from "react";
import blogData from "../data/blog";
import Header from "./Header.jsx";
import About from "./About.jsx";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {Header()}
      {About()}
    </div>
  );
}

export default App;
