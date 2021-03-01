import {
  Paper as UIPaper,
  Grid as UIGrid,
  TextField as UIField,
  ListItemText,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Container = styled(UIPaper)({
  backgroundColor: "#d9d9d9",
  padding: 0,
  margin: 0,
  height: "100vh",
});

export const Grid = styled(UIGrid)({
  paddingTop: "1rem",
});

export const FormWrapper = styled(UIPaper)({
  margin: "1rem 0",
  padding: "0 1rem",
});

export const Input = styled(UIField)({});

export const TodoListWrapper = styled(UIPaper)({});

export const TodoText = styled(({ completed, ...other }) => (
  <ListItemText {...other} />
))({
  textDecoration: (props) => (props.completed ? "line-through" : "none"),
  color: (props) => (props.completed ? "#bfbfbf" : "#000"),
});
