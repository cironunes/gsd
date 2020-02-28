[@react.component]
let make = (~onCreate) => {
  let (content, setContent) = React.useState(() => "");
  <form
    onSubmit={e => {
      ReactEvent.Form.preventDefault(e);
      onCreate(content);
      setContent(_ => "");
    }}>
    <Input
      type_="text"
      placeholder={js|What's next? 🤔|js}
      value=content
      onChange={e => setContent(ReactEvent.Form.target(e)##value)}
      dataTestid="task--add-input"
    />
    <Button variant=Primary dataTestid="task--add-button">
      "Add to list"->React.string
    </Button>
  </form>;
};