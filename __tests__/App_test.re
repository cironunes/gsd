open Jest;
open Expect;
open ReactTestingLibrary;
open Webapi.Dom;

test("Component renders", () =>
  render(<App />) |> container |> expect |> toMatchSnapshot
);

describe("Feature: Task", () => {
  let app = render(<App />);
  let input = app |> getByTestId("task--add-input");
  let submitButton = app |> getByTestId("task--add-button");

  let getAmountOfItems = app =>
    app
    |> getByTestId("task--list")
    |> Element.querySelectorAll("li")
    |> NodeList.length;

  test("Should start with sample tasks", () => {
    getAmountOfItems(app) |> expect |> toBe(2)
  });

  test("Should be able to create a task using the form", () => {
    // Type into the field
    FireEvent.change(
      input,
      ~eventInit=Util.Testing.createEventValue("testing"),
    );

    // Click the button to add, or submit the form hitting enter
    FireEvent.click(submitButton);

    getAmountOfItems(app) |> expect |> toBe(3);
  });

  test("Should be able to remove a task", () => {
    let removeButton1 = app |> getByTestId("task--remove-button-1");
    FireEvent.click(removeButton1);
    getAmountOfItems(app) |> expect |> toBe(2);
  });
});