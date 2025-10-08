import React from "react";

function About({image, text}) {

    return (
        <div id = "about">
            <aside>
                <img src = {image} alt = {"blog logo"}></img>
                <p>{text}</p>
            </aside>
        </div>
    );
}

export default About;