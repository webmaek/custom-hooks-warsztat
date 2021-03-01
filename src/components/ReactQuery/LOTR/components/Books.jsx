import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useQuery } from "react-query";
import { fetchBooks } from "../helpers/api";

const Books = () => {
  const { data, isLoading, isError, error } = useQuery("books", fetchBooks);

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
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText>{doc.name}</ListItemText>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default Books;
