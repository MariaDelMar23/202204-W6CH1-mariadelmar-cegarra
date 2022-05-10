import axios from "axios";
import {
  addtoDoActionCreator,
  deleteToDoActionCreator,
  editToDoActionCreator,
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

export const updateToDoThunk = (id, todo) => async (dispatch) => {
  const { status } = await axios.put(process.env.REACT_APP_API_URL + id, todo);
  if (status === 200) {
    dispatch(editToDoActionCreator({ id, todo }));
  }
};

export const addToDoThunk = (toDo) => async (dispatch) => {
  const { status } = await axios.post(process.env.REACT_APP_API_URL, toDo);
  if (status === 200) {
    dispatch(addtoDoActionCreator(toDo));
  }
};
