'use strict';

var List = require("bs-platform/lib/js/list.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function toggleCompletion(task, id) {
  if (task.id === id) {
    return {
            id: task.id,
            content: task.content,
            completed: !task.completed
          };
  } else {
    return task;
  }
}

function reducer(state, action) {
  switch (action.tag | 0) {
    case /* Add */0 :
        var newItem_id = action[1];
        var newItem_content = action[0];
        var newItem = {
          id: newItem_id,
          content: newItem_content,
          completed: false
        };
        return {
                todos: Pervasives.$at(state.todos, /* :: */[
                      newItem,
                      /* [] */0
                    ])
              };
    case /* Remove */1 :
        var id = action[0];
        return {
                todos: List.filter((function (item) {
                          return item.id !== id;
                        }))(state.todos)
              };
    case /* Complete */2 :
        var id$1 = action[0];
        return {
                todos: List.map((function (task) {
                        return toggleCompletion(task, id$1);
                      }), state.todos)
              };
    
  }
}

exports.toggleCompletion = toggleCompletion;
exports.reducer = reducer;
/* No side effect */
