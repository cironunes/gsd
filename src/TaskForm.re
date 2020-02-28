[@react.component]
let make = (~onCreate) => {
  let (content, setContent) = React.useState(() => "");
  <form
    onSubmit={e => {
      ReactEvent.Form.preventDefault(e);
      onCreate(content);
      setContent(_ => "");
    }}>
    <Util.WithTestId id="task--add-input">
      <input
        type_="text"
        placeholder={js|What's next? 🤔|js}
        value=content
        onChange={e => setContent(ReactEvent.Form.target(e)##value)}
      />
    </Util.WithTestId>
    <Util.WithTestId id="task--add-button"><button> "Add to list"->React.string </button></Util.WithTestId>
  </form>;
};