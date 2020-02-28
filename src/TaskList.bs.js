'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Util$ReasonReactExamples = require("./Util.bs.js");

function TaskList(Props) {
  var items = Props.items;
  var onItemCompleted = Props.onItemCompleted;
  var onItemDeleted = Props.onItemDeleted;
  return React.createElement(Util$ReasonReactExamples.WithTestId.make, {
              id: "task--list",
              children: React.createElement("ol", undefined, $$Array.of_list(List.mapi((function (index, item) {
                              return React.createElement("li", {
                                          key: String(index)
                                        }, React.createElement("label", undefined, React.createElement(Util$ReasonReactExamples.WithTestId.make, {
                                                  id: "task--completion-checkbox",
                                                  children: React.createElement("input", {
                                                        checked: item.completed,
                                                        type: "checkbox",
                                                        onChange: (function (param) {
                                                            return Curry._1(onItemCompleted, item.id);
                                                          })
                                                      })
                                                }), item.content), React.createElement(Util$ReasonReactExamples.WithTestId.make, {
                                              id: "task--remove-button-" + String(item.id),
                                              children: React.createElement("button", {
                                                    onClick: (function (param) {
                                                        return Curry._1(onItemDeleted, item.id);
                                                      })
                                                  }, "x")
                                            }));
                            }), items)))
            });
}

var make = TaskList;

exports.make = make;
/* react Not a pure module */
