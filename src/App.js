import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";
import { loadToDosThunk } from "./thunks/toDosThunks";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosThunk(dispatch));
  }, [dispatch]);

  return (
    <StyledContainer>
      <h1>My ToDo list</h1>
      <Form />
      <ToDoList />
    </StyledContainer>
  );
}

export default App;
