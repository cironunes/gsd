type task = {
  id: int,
  content: string,
  completed: bool,
};

type state = {todos: list(task)};

type action =
  | Add(string, int)
  | Remove(int)
  | Complete(int);

let toggleCompletion = (task, id) =>
  if (task.id == id) {
    {...task, completed: !task.completed};
  } else {
    task;
  };

let reducer = (state, action) =>
  switch (action) {
  | Add(content, id) =>
    let newItem = {id, content, completed: false};
    {todos: state.todos @ [newItem]};
  | Remove(id) => {todos: state.todos |> List.filter(item => item.id != id)}
  | Complete(id) => {
      todos: state.todos |> List.map(task => toggleCompletion(task, id)),
    }
  };