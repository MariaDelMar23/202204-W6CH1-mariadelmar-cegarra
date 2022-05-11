import { useSelector } from "react-redux";
import styled from "styled-components";
import ToDo from "../ToDo/ToDo";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #ae95de;
  margin: 20px;
  h2 {
    width: 70vw;
  }
  button {
    margin: 20px;
    padding: 10px 30px;
    border-radius: 50px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 10px;
    transition: all 0.5s ease;
  }
  button:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
  }

  button:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;

const ToDoList = () => {
  const toDos = useSelector((state) => state.toDos);

  return (
    <div className="todo-section">
      <StyledList className="todo-list">
        {toDos.map((toDo) => (
          <StyledListItem key={toDo.id}>
            <ToDo todo={toDo} />
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
};

export default ToDoList;
