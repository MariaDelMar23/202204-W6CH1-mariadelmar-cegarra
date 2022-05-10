import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoThunk } from "../../thunks/toDosThunks";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const changeName = (event) => setName(event.target.value);
  const changeDone = (event) => setDone(event.target.value);

  const addToDo = (event) => {
    event.preventDefault();
    const toDo = { name, done };
    dispatch(addToDoThunk(toDo));
  };

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={changeName}></input>
      <label htmlFor="done">Done:</label>
      <input type="checkbox" id="done" onChange={changeDone}></input>
      <button type="submit" onClick={addToDo}>
        ADD
      </button>
    </>
  );
};

export default Form;
