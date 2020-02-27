'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var React = require("react");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.bs.js");
var App$ReasonReactExamples = require("../src/App.bs.js");

Jest.test("Component renders", (function (param) {
        return Jest.Expect.toMatchSnapshot(Jest.Expect.expect((function (eta) {
                            return ReactTestingLibrary.render(undefined, undefined, eta);
                          })(React.createElement(App$ReasonReactExamples.make, { })).container));
      }));

/*  Not a pure module */
