open Task;

let initialState = {
  todos: [
    {id: 1, content: "Learn Reason", completed: true},
    {id: 2, content: "Present at SydCSS", completed: false},
  ],
};

[@react.component]
let make = (~getNextId) => {
  let (state, dispatch) = React.useReducer(reducer, initialState);
  <>
    <h1> {js|Get 💩 Done|js}->React.string </h1>
    <TaskForm onCreate={content => Add(content, getNextId())->dispatch} />
    <TaskList
      items={state.todos}
      onItemCompleted={id => Complete(id)->dispatch}
      onItemDeleted={id => Remove(id)->dispatch}
    />
  </>;
};