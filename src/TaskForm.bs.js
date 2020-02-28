'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Input$Gsd = require("./components/Input.bs.js");
var Button$Gsd = require("./components/Button.bs.js");

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
            }, React.createElement(Input$Gsd.make, {
                  type_: "text",
                  value: content,
                  onChange: (function (e) {
                      return Curry._1(setContent, e.target.value);
                    }),
                  placeholder: "What\'s next? 🤔",
                  dataTestid: "task--add-input"
                }), React.createElement(Button$Gsd.make, {
                  children: "Add to list",
                  dataTestid: "task--add-button",
                  variant: /* Primary */1
                }));
}

var make = TaskForm;

exports.make = make;
/* react Not a pure module */
