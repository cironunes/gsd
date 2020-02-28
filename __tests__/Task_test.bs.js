'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Task$ReasonReactExamples = require("../src/Task.bs.js");

var todos = /* :: */[
  {
    id: 1,
    content: "Create an awesome application",
    completed: false
  },
  /* :: */[
    {
      id: 2,
      content: "Write tests",
      completed: true
    },
    /* [] */0
  ]
];

Jest.describe("reducer", (function (param) {
        Jest.test("add", (function (param) {
                var actual = Task$ReasonReactExamples.reducer({
                      todos: todos
                    }, /* Add */Block.__(0, [
                        "Be a good person",
                        3
                      ]));
                return Jest.Expect.toEqual({
                            todos: /* :: */[
                              {
                                id: 1,
                                content: "Create an awesome application",
                                completed: false
                              },
                              /* :: */[
                                {
                                  id: 2,
                                  content: "Write tests",
                                  completed: true
                                },
                                /* :: */[
                                  {
                                    id: 3,
                                    content: "Be a good person",
                                    completed: false
                                  },
                                  /* [] */0
                                ]
                              ]
                            ]
                          }, Jest.Expect.expect(actual));
              }));
        Jest.test("remove", (function (param) {
                var actual = Task$ReasonReactExamples.reducer({
                      todos: todos
                    }, /* Remove */Block.__(1, [2]));
                return Jest.Expect.toEqual({
                            todos: /* :: */[
                              {
                                id: 1,
                                content: "Create an awesome application",
                                completed: false
                              },
                              /* [] */0
                            ]
                          }, Jest.Expect.expect(actual));
              }));
        return Jest.test("completed", (function (param) {
                      var actual = Task$ReasonReactExamples.reducer({
                            todos: todos
                          }, /* Complete */Block.__(2, [1]));
                      return Jest.Expect.toEqual({
                                  todos: /* :: */[
                                    {
                                      id: 1,
                                      content: "Create an awesome application",
                                      completed: true
                                    },
                                    /* :: */[
                                      {
                                        id: 2,
                                        content: "Write tests",
                                        completed: true
                                      },
                                      /* [] */0
                                    ]
                                  ]
                                }, Jest.Expect.expect(actual));
                    }));
      }));

exports.todos = todos;
/*  Not a pure module */
