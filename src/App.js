import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";
import { loadToDosThunk } from "./thunks/toDosThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosThunk(dispatch));
  }, [dispatch]);

  return (
    <>
      <ToDoList />
      <Form />
    </>
  );
}

export default App;
