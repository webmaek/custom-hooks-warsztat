import { useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { ReactQueryDevtools } from "react-query/devtools";
import * as Styled from "./helpers/LOTR.styles";
import Books from "./components/Books";
import Movies from "./components/Movies";
import Characters from "./components/Characters";

const Lotr = () => {
  const [content, setContent] = useState("movies");

  return (
    <Styled.Container>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <Paper>
            <Typography
              variant="h4"
              gutterBottom
              style={{
                textAlign: "center",
                marginTop: "1rem",
                padding: "1rem 0",
              }}
            >
              Lord Of The Rings Info
            </Typography>
          </Paper>
          <Paper>
            <ButtonGroup size="large" color="primary" fullWidth>
              <Button onClick={() => setContent("books")}>Books</Button>
              <Button onClick={() => setContent("movies")}>Movies</Button>
              <Button onClick={() => setContent("characters")}>
                Characters
              </Button>
            </ButtonGroup>
          </Paper>
          <Paper style={{ marginTop: "1rem" }}>
            {content === "books" ? (
              <Books />
            ) : content === "movies" ? (
              <Movies />
            ) : (
              <Characters />
            )}
          </Paper>
        </Grid>
      </Grid>
      <ReactQueryDevtools initialIsOpen={false} />
    </Styled.Container>
  );
};

export default Lotr;
