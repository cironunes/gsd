open Jest;
open Expect;
open ReactTestingLibrary;

test("Component renders", () =>
  <App /> |> render |> container |> expect |> toMatchSnapshot
);