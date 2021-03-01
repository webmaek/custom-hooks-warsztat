import React, { useState, useEffect } from "react";
import {
  Paper,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CircularProgress,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import * as Styled from "../helpers/LOTR.styles.js";
import { useQuery } from "react-query";
import { fetchCharacters } from "../helpers/api";

const Characters = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    isFetching,
    isPreviousData,
    data,
    error,
  } = useQuery(["characters", page], () => fetchCharacters(page), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <Styled.SpinnerContainer>
        <CircularProgress />
      </Styled.SpinnerContainer>
    );
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <Paper>
      <List>
        {data &&
          data.docs.map((doc) => (
            <ListItem key={doc._id}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>{doc.name}</ListItemText>
            </ListItem>
          ))}
      </List>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage(Math.max(page - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (!isPreviousData && data.pages > page) {
              setPage(page + 1);
            }
          }}
          disabled={data.pages === page}
        >
          Next Page
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Characters;
