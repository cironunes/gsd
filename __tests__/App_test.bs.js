'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var App$Gsd = require("../src/App.bs.js");
var Util$Gsd = require("../src/Util.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.bs.js");

Jest.test("Component renders", (function (param) {
        return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, React.createElement(App$Gsd.make, { })).container));
      }));

Jest.describe("Feature: Task", (function (param) {
        var app = ReactTestingLibrary.render(undefined, undefined, React.createElement(App$Gsd.make, { }));
        var input = ReactTestingLibrary.getByTestId("task--add-input", app);
        var submitButton = ReactTestingLibrary.getByTestId("task--add-button", app);
        var getAmountOfItems = function (app) {
          return ReactTestingLibrary.getByTestId("task--list", app).querySelectorAll("li").length;
        };
        Jest.test("Should start with sample tasks", (function (param) {
                return Jest.Expect.toBe(2, Jest.Expect.expect(getAmountOfItems(app)));
              }));
        Jest.test("Should be able to create a task using the form", (function (param) {
                Curry._2(ReactTestingLibrary.FireEvent.change, Caml_option.some(Util$Gsd.Testing.createEventValue("testing")), input);
                Curry._2(ReactTestingLibrary.FireEvent.click, undefined, submitButton);
                return Jest.Expect.toBe(3, Jest.Expect.expect(getAmountOfItems(app)));
              }));
        return Jest.test("Should be able to remove a task", (function (param) {
                      var removeButton1 = ReactTestingLibrary.getByTestId("task--remove-button-1", app);
                      Curry._2(ReactTestingLibrary.FireEvent.click, undefined, removeButton1);
                      return Jest.Expect.toBe(2, Jest.Expect.expect(getAmountOfItems(app)));
                    }));
      }));

/*  Not a pure module */
