import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadToDosActionCreator } from "../../redux/features/toDos/toDosSlice";
import ToDoData from "../../ToDoData";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDos);

  useEffect(() => {
    dispatch(loadToDosActionCreator(ToDoData));
  }, [dispatch]);

  return (
    <div className="todo-section">
      <ul className="todo-list">
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDo todo={toDo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
