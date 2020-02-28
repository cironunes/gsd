open Jest;
open Expect;

open Task;

let todos = [
  {id: 1, content: "Create an awesome application", completed: false},
  {id: 2, content: "Write tests", completed: true},
];

describe("reducer", () => {
  test("add", () => {
    let actual = reducer({todos: todos}, Add("Be a good person", 3));

    let expected = {
      todos: [
        {id: 1, content: "Create an awesome application", completed: false},
        {id: 2, content: "Write tests", completed: true},
        {id: 3, content: "Be a good person", completed: false},
      ],
    };

    expect(actual) |> toEqual(expected);
  });

  test("remove", () => {
    let actual = reducer({todos: todos}, Remove(2));

    let expected = {
      todos: [
        {id: 1, content: "Create an awesome application", completed: false},
      ],
    };

    expect(actual) |> toEqual(expected);
  });

  test("completed", () => {
    let actual = reducer({todos: todos}, Complete(1));
    let expected = {
      todos: [
        {id: 1, content: "Create an awesome application", completed: true},
        {id: 2, content: "Write tests", completed: true},
      ],
    };

    expect(actual) |> toEqual(expected);
  });
});