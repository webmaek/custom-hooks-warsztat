import { Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Container = styled(Paper)({
  backgroundColor: "#d9d9d9",
  padding: 0,
  margin: 0,
  height: "100vh",
});

export const SpinnerContainer = styled(Paper)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
