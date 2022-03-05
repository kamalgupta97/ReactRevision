import React from "react";
import ReactDOM from "react-dom";
import("./index.css");

// function addTwo(num1, num2) {
//   return num1 + num2;
// }

// console.log(addTwo(200, 13));

// ReactDOM.render(
//   React.createElement("h1", { className: "header" }, "Hello WebPack"),
//   document.getElementById("root")
// );
ReactDOM.render(
  <h1 className="header">Hello WebPack React</h1>,
  document.getElementById("root")
);
