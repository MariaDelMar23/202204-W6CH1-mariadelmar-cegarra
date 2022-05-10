import { useState } from "react";
import { useDispatch } from "react-redux";
import { editToDoActionCreator } from "../../redux/features/toDos/toDosSlice";
import { deleteToDoThunk, updateToDoThunk } from "../../thunks/toDosThunks";

const ToDo = ({ todo: { id, name, done } }) => {
  const dispatch = useDispatch();
  const [nameEdit, setNameEdit] = useState(name);

  const deleteToDo = () => {
    dispatch(deleteToDoThunk(id));
  };

  const changeDone = (event) => {
    const done = event.target.checked;
    dispatch(updateToDoThunk(id, { id: id, name, done: done }));
  };

  const changeName = (event) => {
    dispatch(editToDoActionCreator({ id, name: nameEdit, done }));
  };

  return (
    <>
      <h2>{name}</h2>
      {done ? <p>DONE!</p> : <p>PENDING</p>}
      {/* {editing && (
        <>
          <label htmlFor="name">Change name:</label>
          <input
            type="text"
            id="name"
            onChange={setNameEdit}
            value={nameEdit}
          />
          <input type="submit" onClick={changeName} />
        </>
      )} */}
      <input type="checkbox" onChange={changeDone} checked={done} />
      <button onClick={deleteToDo}>DELETE</button>
    </>
  );
};

export default ToDo;
