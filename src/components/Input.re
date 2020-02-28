[@react.component]
let make = (~type_, ~value=?, ~onChange=?, ~placeholder=?, ~dataTestid=?) => {
  let input =
    <input
      className={Theme.inputStyles(Theme.default)}
      type_
      ?placeholder
      ?value
      ?onChange
    />;

  switch (dataTestid) {
  | None => input
  | Some(testId) => <Util.WithTestId id=testId> input </Util.WithTestId>
  };
};