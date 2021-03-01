import { Grid, Paper, Typography } from "@material-ui/core";
import * as Styled from "./helpers/Calendar.styles";
import { ReactQueryDevtools } from "react-query/devtools";
import CalendarForm from "./components/CalendarForm";
import CalendarList from "./components/CalendarList";

const Calendar = () => {
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
              Calendar
            </Typography>
          </Paper>
          <Paper>
            <CalendarForm />
          </Paper>
          <CalendarList />
        </Grid>
      </Grid>
      <ReactQueryDevtools initialIsOpen={false} />
    </Styled.Container>
  );
};

export default Calendar;
