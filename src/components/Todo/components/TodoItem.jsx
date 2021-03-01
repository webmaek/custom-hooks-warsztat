import * as Styled from "../helpers/Todo.styles";
import {
  ListItem,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

const TodoItem = ({ id, text, completed, deleteTodo, toggleTodo }) => {
  return (
    <>
      <ListItem>
        <Checkbox checked={completed} onChange={() => toggleTodo(id)} />
        <Styled.TodoText completed={completed}>{text}</Styled.TodoText>
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteTodo(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default TodoItem;
