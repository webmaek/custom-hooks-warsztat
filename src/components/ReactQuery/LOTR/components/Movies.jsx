import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";
import { useQuery } from "react-query";
import { fetchMovies } from "../helpers/api";

const Movies = () => {
  const { data, isLoading, isError, error } = useQuery("movies", fetchMovies);

  if (isLoading) {
    return <h1>Loading data...</h1>;
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
