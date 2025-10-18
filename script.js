import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// let heading=React.createElement("h1",{id:'heading'}, "Learning React JS");
// React Element = JS Object => redered as a HTMl element.
// let jsxHeading=<h1>Hello, I am Vijay</h1>;
// jsx converted into React Element by using Babel as a Transpiler = JS Object => redered as a HTMl element.
// console.log(heading, jsxHeading);

// React Element
const heading = (
  <h1 id="heading" className="heading">
    I am just a React Element. 
  </h1>
);
// console.log(heading);

const Greeting=()=><h2>Welcome to this World.</h2>
// React Component
const HeadingComponent=()=>{
    return(
        <div className="container"> 
            {heading}
            {Greeting()}
            <Greeting/>
            <Greeting></Greeting> 
            <h1>Hey, I am a functional component</h1>
        </div>
    );
};

// console.log(HeadingComponent());

let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // <-- This is how we render React Elements

root.render(<HeadingComponent/>) // <-- This is how we render React Components
