import {
  Paper as UIPaper,
  Grid as UIGrid,
  TextField as UIField,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Container = styled(UIPaper)({
  backgroundColor: "#fafafa",
  padding: 0,
  margin: 0,
  height: "90vh",
});

export const Grid = styled(UIGrid)({
  marginTop: "1rem",
});

export const FormWrapper = styled(UIPaper)({
  margin: "1rem 0",
  padding: "0 1rem",
});

export const Input = styled(UIField)({});

export const TodoListWrapper = styled(UIPaper)({});
