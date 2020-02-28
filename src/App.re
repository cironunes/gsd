open Task;

let initialState = {
  todos: [
    {id: 1, content: "Learn Reason", completed: true},
    {id: 2, content: "Present at SydCSS", completed: false},
  ],
};

let getNextId = () => Js.Date.make() |> Js.Date.getTime |> int_of_float;

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState);
  <>
    <TaskForm onCreate={content => Add(content, getNextId())->dispatch} />
    <TaskList
      items={state.todos}
      onItemCompleted={id => Complete(id)->dispatch}
      onItemDeleted={id => Remove(id)->dispatch}
    />
  </>;
};