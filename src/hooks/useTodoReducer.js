import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import TYPES from "../components/Todo/helpers/Todo.constants";

const todosReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return [...state, action.payload];
    case TYPES.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TYPES.TOGGLE_TODO_COMPLETION:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const useTodoReducer = (initialValue = []) => {
  const [todos, dispatch] = useReducer(todosReducer, initialValue);

  const addTodo = (text) => {
    dispatch({
      type: TYPES.ADD_TODO,
      payload: { id: uuid(), text, completed: false },
    });
  };

  const toggleTodo = (id) => {
    dispatch({ type: TYPES.TOGGLE_TODO_COMPLETION, id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: TYPES.DELETE_TODO, id });
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

export default useTodoReducer;
