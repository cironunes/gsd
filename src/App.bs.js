'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Task$ReasonReactExamples = require("./Task.bs.js");
var TaskForm$ReasonReactExamples = require("./TaskForm.bs.js");
var TaskList$ReasonReactExamples = require("./TaskList.bs.js");

var initialState = {
  todos: /* :: */[
    {
      id: 1,
      content: "Learn Reason",
      completed: true
    },
    /* :: */[
      {
        id: 2,
        content: "Present at SydCSS",
        completed: false
      },
      /* [] */0
    ]
  ]
};

function getNextId(param) {
  return new Date().getTime() | 0;
}

function App(Props) {
  var match = React.useReducer(Task$ReasonReactExamples.reducer, initialState);
  var dispatch = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement(TaskForm$ReasonReactExamples.make, {
                  onCreate: (function (content) {
                      return Curry._1(dispatch, /* Add */Block.__(0, [
                                    content,
                                    new Date().getTime() | 0
                                  ]));
                    })
                }), React.createElement(TaskList$ReasonReactExamples.make, {
                  items: match[0].todos,
                  onItemCompleted: (function (id) {
                      return Curry._1(dispatch, /* Complete */Block.__(2, [id]));
                    }),
                  onItemDeleted: (function (id) {
                      return Curry._1(dispatch, /* Remove */Block.__(1, [id]));
                    })
                }));
}

var make = App;

exports.initialState = initialState;
exports.getNextId = getNextId;
exports.make = make;
/* react Not a pure module */
