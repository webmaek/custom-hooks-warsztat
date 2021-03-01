import { useState } from "react";
import { Button, ButtonGroup, Modal, TextField } from "@material-ui/core";
import * as Styled from "../helpers/Calendar.styles";
import { useMutation, useQueryClient } from "react-query";
import { createEvent } from "../helpers/api";
import CalendarSelect from "./CalendarSelect";
import CalendarDatePicker from "./CalendarDatePicker";

const CalendarForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date("2021-03-21"));
  const [color, setColor] = useState("#f44336");

  const resetValues = () => {
    setOpen(false);
    setValue("");
    setSelectedDate(new Date("2021-03-21"));
    setColor("#f44336");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(createEvent);

  const create = async () => {
    await mutateAsync(
      { text: value, event_date: selectedDate, color },
      {
        onError: () => alert("Uggh, something went wrong!"),
        onSuccess: () => alert("Successfully added new event!"),
      }
    );
    resetValues();
    queryClient.invalidateQueries("events");
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => setOpen(true)}
      >
        Add new event
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Styled.ModalContainer>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="text"
            label="Event name"
            name="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            autoComplete="off"
          />
          <CalendarDatePicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
          <CalendarSelect color={color} handleChange={handleChange} />
          <ButtonGroup color="primary" fullWidth style={{ marginTop: "1rem" }}>
            <Button onClick={create}>Create Event</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </ButtonGroup>
        </Styled.ModalContainer>
      </Modal>
    </>
  );
};

export default CalendarForm;
