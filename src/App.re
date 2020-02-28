let getNextId = () => Js.Date.make() |> Js.Date.getTime |> int_of_float;

module Styles = {
  Theme.globalStyles();
};

[@react.component]
let make = () => {
  let (theme, changeTheme) = React.useState(_ => Theme.default);

  <div className={Theme.containerStyles(theme)}>
    <div>
      <button onClick={_ => changeTheme(_ => Theme.default)}>
        "Default"->React.string
      </button>
      <button onClick={_ => changeTheme(_ => Theme.defaultDark)}>
        "Dark mode"->React.string
      </button>
      <button onClick={_ => changeTheme(_ => Theme.rainbow)}>
        "Rainbow"->React.string
      </button>
      <button onClick={_ => changeTheme(_ => Theme.rainbowDark)}>
        "Rainbow Dark"->React.string
      </button>
    </div>
    <ThemeContext value=theme> <TaskContainer getNextId /> </ThemeContext>
  </div>;
};