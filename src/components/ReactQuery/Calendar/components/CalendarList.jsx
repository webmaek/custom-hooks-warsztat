import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import CalendarDelete from "./CalendarDelete";
import { fetchEvents } from "../helpers/api";
import { useQuery } from "react-query";

const CalendarList = () => {
  const { isLoading, isError, data, error } = useQuery("events", fetchEvents);

  if (isLoading) {
    return (
      <Paper style={{ marginTop: "1rem" }}>
        <Typography>Loading...</Typography>
      </Paper>
    );
  }

  if (isError) {
    return (
      <Paper style={{ marginTop: "1rem" }}>
        <Typography>An unexpected error occured</Typography>
      </Paper>
    );
  }

  return (
    <Paper style={{ marginTop: "1rem" }}>
      <List style={{ padding: "0", margin: "0" }}>
        {data.data.records &&
          data.data.records.map((record) => (
            <ListItem
              key={record.id}
              style={{ backgroundColor: record.fields.color, margin: "5px 0" }}
            >
              <ListItemText
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>{record.fields.text}</Typography>
                <Typography>{record.fields.event_date}</Typography>
              </ListItemText>
              <CalendarDelete id={record.id} />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default CalendarList;
