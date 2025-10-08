import React from "react";
import blogData from "../data/blog";
import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name ={blogData.name}/>
      <About image = {blogData.image} text = {blogData.about}/>
      <ArticleList />
    </div>
  );
}

export default App;
