'use strict';

var React = require("react");

function List(Props) {
  return React.createElement("form", undefined, React.createElement("span", undefined, "hi"));
}

var make = List;

exports.make = make;
/* react Not a pure module */
