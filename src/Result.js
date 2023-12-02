import React from "react";

const Result = ({index, computation}) => {
    const result = Math.floor(computation(index + 1));
    return <p onClick={() => console.log("user clicked on the element")} onMouseEnter={() => console.log("user hovered over the element")}>{result}</p>
};

export default Result;