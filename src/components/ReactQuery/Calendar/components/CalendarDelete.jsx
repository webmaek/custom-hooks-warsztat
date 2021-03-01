import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { useMutation, useQueryClient } from "react-query";
import { deleteEvent } from "../helpers/api";

const CalendarDelete = ({ id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(deleteEvent);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("events");
  };

  return (
    <ListItemSecondaryAction>
      <IconButton onClick={remove}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  );
};
export default CalendarDelete;
