import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { loadToDosActionCreator } from "../../redux/features/toDos/toDosSlice";
import store from "../../redux/store/store";
import ToDoData from "../../ToDoData";
import ToDoList from "./ToDoList";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

describe("Given the ToDoList component", () => {
  describe("When it renders", () => {
    test("Then it should call the useDispatch function", () => {
      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );

      expect(mockUseDispatch).toHaveBeenCalled();
    });

    test("Then it should call the dispatch function passing it a loadToDos action with an array of ToDos", () => {
      const expectedAction = loadToDosActionCreator(ToDoData);

      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );

      expect(mockUseDispatch).toHaveBeenLastCalledWith(expectedAction);
    });

    test("Then it should create a list with 3 items and the first with heading 'Aguantarse las ganas de rajarse las venas en el bootcamp :D'", () => {
      const expectedToDos = 3;
      const expectedHeading =
        "Aguantarse las ganas de rajarse las venas en el bootcamp :D";

      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );
      const listOfToDos = screen.getAllByRole("listitem");
      const headingToDo = screen.getAllByRole("heading");

      expect(listOfToDos).toHaveLength(expectedToDos);
      expect(headingToDo).toHaveAccessibleName(expectedHeading);
    });
  });
});
