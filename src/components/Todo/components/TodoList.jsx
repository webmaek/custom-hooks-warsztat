import * as Styled from "../helpers/Todo.styles";
import { List, Divider } from "@material-ui/core";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  if (todos && todos.length > 0) {
    return (
      <Styled.TodoListWrapper>
        <List>
          {todos.map((todo, index) => (
            <>
              <TodoItem
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
              {todos.length - 1 <= index ? null : <Divider />}
            </>
          ))}
        </List>
      </Styled.TodoListWrapper>
    );
  }

  return null;
};

export default TodoList;
