import React from "react";
import Article from "./Article";

function ArticleList() {

    return (
        <div id = "articleList">
            Article List
            {Article()}
        </div>
    );
}

export default ArticleList;