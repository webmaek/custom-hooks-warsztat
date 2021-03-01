import { Grid } from "@material-ui/core";
import * as Styled from "./helpers/Todo.styles.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import useTodoReducer from "../../hooks/useTodoReducer";

const TodoComponent = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoReducer();

  return (
    <Styled.Container>
      <Styled.Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Styled.Grid>
    </Styled.Container>
  );
};

export default TodoComponent;
