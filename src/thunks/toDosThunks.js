import axios from "axios";
import {
  deleteToDoActionCreator,
  loadToDosActionCreator,
} from "../redux/features/toDos/toDosSlice";

export const loadToDosThunk = () => async (dispatch) => {
  const { data: toDos } = await axios.get(process.env.REACT_APP_API_URL);
  dispatch(loadToDosActionCreator(toDos));
};

export const deleteToDoThunk = (id) => async (dispatch) => {
  const { status } = await axios.delete(process.env.REACT_APP_API_URL + id);
  if (status === 200) {
    dispatch(deleteToDoActionCreator(id));
  }
};
