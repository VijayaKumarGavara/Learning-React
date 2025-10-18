import React from "react";
import ReactDOM from "react-dom/client"
/**
 * <div id='parent'> 
 *      <div id='child1'>
 *          <h1>Vijay</h1>
 *          <h2>SDE</h2>
 *      </div>
 *      <div id='child2'>
 *          <h1>Yuvi</h1>
 *          <h2>SDE</h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
*/


// let content=React.createElement("div", {id:'parent'}, // <-- Creates a JS Object
//     [
//         React.createElement("div", {id:'child1'}, 
//         [
//             React.createElement("h1", {id:'n1'}, "Vijay"),
//             React.createElement("h2", {id:'r1'}, "SDE")
//         ]),
//         React.createElement("div", {id:'child2'}, 
//         [
//             React.createElement("h1", {id:'n2'}, "Yuvi"),
//             React.createElement("h2", {id:'r2'}, "SDE")
//         ])
//     ]
// );


// const h = document.createElement("h1");
// h.innerText = "Hello World2";
// document.getElementById("root").appendChild(h);

let h2 = React.createElement("h2", {id:'heading'}, "I am Learning React..!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(h2);
// root.render(h2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h2);
// root.render(content); // <-- Converts the JS Object into actual html element.
