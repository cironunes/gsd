'use strict';

var React = require("react");

function Util$WithTestId(Props) {
  var id = Props.id;
  var children = Props.children;
  return React.cloneElement(children, {
              "data-testid": id
            });
}

var WithTestId = {
  make: Util$WithTestId
};

function createEventValue(value) {
  return {
          target: {
            value: value
          }
        };
}

var Testing = {
  createEventValue: createEventValue
};

exports.WithTestId = WithTestId;
exports.Testing = Testing;
/* react Not a pure module */
