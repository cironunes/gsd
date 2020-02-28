'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Task$Gsd = require("./Task.bs.js");
var TaskForm$Gsd = require("./TaskForm.bs.js");
var TaskList$Gsd = require("./TaskList.bs.js");

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

function TaskContainer(Props) {
  var getNextId = Props.getNextId;
  var match = React.useReducer(Task$Gsd.reducer, initialState);
  var dispatch = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Get 💩 Done"), React.createElement(TaskForm$Gsd.make, {
                  onCreate: (function (content) {
                      return Curry._1(dispatch, /* Add */Block.__(0, [
                                    content,
                                    Curry._1(getNextId, /* () */0)
                                  ]));
                    })
                }), React.createElement(TaskList$Gsd.make, {
                  items: match[0].todos,
                  onItemCompleted: (function (id) {
                      return Curry._1(dispatch, /* Complete */Block.__(2, [id]));
                    }),
                  onItemDeleted: (function (id) {
                      return Curry._1(dispatch, /* Remove */Block.__(1, [id]));
                    })
                }));
}

var make = TaskContainer;

exports.initialState = initialState;
exports.make = make;
/* react Not a pure module */
