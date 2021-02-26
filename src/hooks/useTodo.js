import { useState } from "react";
import { v4 as uuid } from "uuid";

const initialTodos = [
  { id: "111", text: "Hello World", completed: false },
  { id: "222", text: "Buy Milk", completed: true },
  { id: "333", text: "Do Chores", completed: false },
];

const useTodo = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    setTodos([...todos, { id: uuid(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

export default useTodo;
