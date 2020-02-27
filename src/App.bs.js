'use strict';

var React = require("react");
var Form$ReasonReactExamples = require("./Form.bs.js");
var List$ReasonReactExamples = require("./List.bs.js");

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(Form$ReasonReactExamples.make, { }), React.createElement(List$ReasonReactExamples.make, { }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
