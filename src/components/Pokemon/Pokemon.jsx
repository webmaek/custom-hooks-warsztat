import { Grid } from "@material-ui/core";
import * as Styled from "./helpers/Pokemon.styles";
import usePokemonApi from "../../hooks/usePokemonApi";
import PokemonInfo from "./components/PokemonInfo";
import PokemonForm from "./components/PokemonForm";

export default function Pokemon() {
  const { queryPokemon, pokemon, error, isLoading } = usePokemonApi("snorlax");

  return (
    <Styled.Container>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <PokemonForm queryPokemon={queryPokemon} />
          <PokemonInfo pokemon={pokemon} isLoading={isLoading} error={error} />
        </Grid>
      </Grid>
    </Styled.Container>
  );
}
