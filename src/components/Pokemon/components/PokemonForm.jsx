import { Paper, TextField } from "@material-ui/core";
import * as Styled from "../helpers/Pokemon.styles";
import useInput from "../../../hooks/useInput";

const PokemonForm = ({ queryPokemon }) => {
  const [value, handleChange, reset] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0 && value !== "") {
      queryPokemon(value);
      reset();
    }
  };

  return (
    <Styled.FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label="Search for pokemon"
          margin="normal"
          fullWidth
        />
      </form>
    </Styled.FormContainer>
  );
};

export default PokemonForm;
