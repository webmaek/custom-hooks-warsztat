import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
  Paper,
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import {
  capitalizeFirstLetter,
  padToThree,
  useStyles,
  statTypes,
} from "../helpers/Pokemon.constants";
import * as Styled from "../helpers/Pokemon.styles";

const IMG_POKE_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const PokemonInfo = ({ pokemon, isLoading, error }) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <Paper>
        <Styled.PokemonCard>
          <CircularProgress />
        </Styled.PokemonCard>
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper>
        <Styled.PokemonCard>
          <ErrorIcon color="secondary" />
          <Typography color="secondary">An unexpected error occured</Typography>
        </Styled.PokemonCard>
      </Paper>
    );
  }

  return (
    <Paper>
      <Styled.PokemonCard>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${IMG_POKE_API}${padToThree(pokemon.id)}.png`}
            title="Pokemon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {capitalizeFirstLetter(pokemon.name)}
            </Typography>
            <List>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  Doświadczenie - {pokemon.base_experience}
                </ListItemText>
              </ListItem>
              {pokemon.stats.map((pokemonStat) => (
                <ListItem
                  key={pokemonStat.stat.name}
                  className={classes.listItem}
                >
                  <ListItemText>
                    {statTypes[pokemonStat.stat.name]} - {pokemonStat.base_stat}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Styled.PokemonCard>
    </Paper>
  );
};

export default PokemonInfo;
