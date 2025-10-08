import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
    const articleComponents = blogData.posts.map(post => (
        <Article
            key = {post.id}
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
            minutes = {post.minutes}
            
        />
    ));

    return (
        <div id = "articleList">
            <main>
                {articleComponents}
            </main>
        </div>
    );
}

export default ArticleList;