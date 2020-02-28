'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Util$ReasonReactExamples = require("./Util.bs.js");

function TaskForm(Props) {
  var onCreate = Props.onCreate;
  var match = React.useState((function () {
          return "";
        }));
  var setContent = match[1];
  var content = match[0];
  return React.createElement("form", {
              onSubmit: (function (e) {
                  e.preventDefault();
                  Curry._1(onCreate, content);
                  return Curry._1(setContent, (function (param) {
                                return "";
                              }));
                })
            }, React.createElement(Util$ReasonReactExamples.WithTestId.make, {
                  id: "task--add-input",
                  children: React.createElement("input", {
                        placeholder: "What\'s next? 🤔",
                        type: "text",
                        value: content,
                        onChange: (function (e) {
                            return Curry._1(setContent, e.target.value);
                          })
                      })
                }), React.createElement(Util$ReasonReactExamples.WithTestId.make, {
                  id: "task--add-button",
                  children: React.createElement("button", undefined, "Add to list")
                }));
}

var make = TaskForm;

exports.make = make;
/* react Not a pure module */
