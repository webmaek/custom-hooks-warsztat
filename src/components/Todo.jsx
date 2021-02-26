import {
  Paper,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import * as Styled from "./Todo.styles.js";
import useTodo from "../hooks/useTodo";
import useInput from "../hooks/useInput";

const TodoComponent = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
  const [value, handleValueChange, resetValue] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    resetValue();
  };

  return (
    <Styled.Container>
      <Styled.Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <Styled.FormWrapper>
            <form onSubmit={handleSubmit}>
              <Styled.Input
                value={value}
                onChange={handleValueChange}
                margin="normal"
                label="Add new todo"
                fullWidth
              />
            </form>
          </Styled.FormWrapper>
          <Styled.TodoListWrapper>
            <List>
              {todos.map(({ id, text, completed }, index) => {
                return (
                  <>
                    <ListItem>
                      <Checkbox
                        checked={completed}
                        onChange={() => toggleTodo(id)}
                      />
                      <ListItemText
                        style={{
                          textDecoration: completed ? "line-through" : "none",
                        }}
                      >
                        {text}
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => deleteTodo(id)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {todos.length - 1 <= index ? null : <Divider />}
                  </>
                );
              })}
            </List>
          </Styled.TodoListWrapper>
        </Grid>
      </Styled.Grid>
    </Styled.Container>
  );
};

export default TodoComponent;
