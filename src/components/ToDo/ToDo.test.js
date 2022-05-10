import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoData from "../../ToDoData";
import ToDo from "./ToDo";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

describe("Given the ToDo component", () => {
  describe("When it receives a toDo object with done: true and renders", () => {
    test("Then it should create a heading with its name", () => {
      const toDo = ToDoData[0];
      const text = toDo.name;

      render(<ToDo todo={toDo} />);
      const nameHeading = screen.getByRole("heading", { name: text });

      expect(nameHeading).toBeInTheDocument();
    });

    test("Then it should render a 'DELETE' button and call a function when clicked", () => {
      const toDo = ToDoData[0];
      const text = "DELETE";

      render(<ToDo todo={toDo} />);
      const deleteButton = screen.getByRole("button", { name: text });
      userEvent.click(deleteButton);

      expect(mockUseDispatch).toHaveBeenCalled();
    });

    test("Then it should render a text 'DONE!'", () => {
      const toDo = ToDoData[0];
      const text = "DONE!";

      render(<ToDo todo={toDo} />);
      const doneText = screen.getByText(text);

      expect(doneText).toBeInTheDocument();
    });

    test("Then it should render a checked checkbox", () => {
      const toDo = ToDoData[0];

      render(<ToDo todo={toDo} />);
      const checkbox = screen.getByRole("checkbox");
      userEvent.click(checkbox);

      expect(mockUseDispatch).toHaveBeenCalled();
      expect(checkbox).toBeChecked();
    });
  });

  describe("When it receives a toDo object with done: false and renders", () => {
    test("Then it should render a text PENDING", () => {
      const toDo = ToDoData[1];
      const text = "PENDING";

      render(<ToDo todo={toDo} />);
      const pendingText = screen.getByText(text);

      expect(pendingText).toBeInTheDocument();
    });

    test("Then it should render a non checked checkbox", () => {
      const toDo = ToDoData[1];
      const expectedChecked = false;

      render(<ToDo todo={toDo} />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toHaveProperty("checked", expectedChecked);
    });
  });
});
