open Task;
open Util;

[@react.component]
let make = (~items: list(task), ~onItemCompleted, ~onItemDeleted) => {
  <Util.WithTestId id="task--list">
    <ol>
      {items
       |> List.mapi((index, item) => {
            <li key={index->string_of_int}>
              <label>
                <Util.WithTestId id="task--completion-checkbox">
                  <input
                    type_="checkbox"
                    checked={item.completed}
                    onChange={_ => {onItemCompleted(item.id)}}
                  />
                </Util.WithTestId>
                item.content->React.string
              </label>
              <WithTestId id={"task--remove-button-" ++ item.id->string_of_int}>
                <button onClick={_ => onItemDeleted(item.id)}> "x"->React.string </button>
              </WithTestId>
            </li>
          })
       |> Array.of_list
       |> React.array}
    </ol>
  </Util.WithTestId>;
};