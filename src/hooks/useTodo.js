import { v4 as uuid } from "uuid";
import useLocalStorage from "./useLocalStorage";

const useTodo = (initialTodos) => {
  const [todos, setTodos] = useLocalStorage(
    "todos",
    initialTodos ? initialTodos : []
  );

  const addTodo = (text) => {
    setTodos([...todos, { id: uuid(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

export default useTodo;
