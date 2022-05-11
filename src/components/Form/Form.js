import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoThunk } from "../../thunks/toDosThunks";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  button {
    margin: 20px;
    padding: 10px 30px;
    border-radius: 50px;
    border: 0;
    background-color: #ae95de;
    box-shadow: rgb(174, 149, 222 / 5%) 0 0 8px;
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
    setName("");
    setDone(false);
  };

  return (
    <StyledForm>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" onChange={changeName} value={name}></input>
      </label>

      <label htmlFor="done">
        Done:
        <input
          type="checkbox"
          id="done"
          onChange={changeDone}
          checked={done}
        ></input>
      </label>

      <button type="submit" onClick={addToDo}>
        ADD
      </button>
    </StyledForm>
  );
};

export default Form;
