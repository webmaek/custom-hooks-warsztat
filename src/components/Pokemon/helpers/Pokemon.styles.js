import { Paper, Card } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Container = styled(Paper)({
  backgroundColor: "#d9d9d9",
  height: "100vh",
});

export const PokemonCard = styled(Card)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const FormContainer = styled(Paper)({
  padding: "0 1rem",
  margin: "1rem 0",
});
