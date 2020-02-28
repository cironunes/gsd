'use strict';

var React = require("react");
var Theme$Gsd = require("./Theme.bs.js");

var themeContext = React.createContext(Theme$Gsd.$$default);

function makeProps(value, children, param) {
  return {
          value: value,
          children: children
        };
}

var make = themeContext.Provider;

exports.themeContext = themeContext;
exports.makeProps = makeProps;
exports.make = make;
/* themeContext Not a pure module */
