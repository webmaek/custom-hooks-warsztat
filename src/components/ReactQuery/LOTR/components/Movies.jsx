import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CircularProgress,
} from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";
import * as Styled from "../helpers/LOTR.styles.js";
import { useQuery } from "react-query";
import { fetchMovies } from "../helpers/api";

const Movies = () => {
  const { data, isLoading, isError, error } = useQuery("movies", fetchMovies);

  if (isLoading) {
    return (
      <Styled.SpinnerContainer>
        <CircularProgress />
      </Styled.SpinnerContainer>
    );
  }

  if (isError) {
    return <h1>An unexpected error occured: {error.message}</h1>;
  }

  return (
    <Paper>
      <List>
        {data &&
          data.docs.map((doc) => (
            <ListItem key={doc._id}>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText>{doc.name}</ListItemText>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default Movies;
