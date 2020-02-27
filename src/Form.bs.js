'use strict';

var React = require("react");

function Form(Props) {
  return React.createElement("form", undefined, React.createElement("span", undefined, "hi"));
}

var make = Form;

exports.make = make;
/* react Not a pure module */
