import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const CalendarSelect = ({ color, handleChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="color">Color</InputLabel>
      <Select labelId="color" value={color} onChange={handleChange}>
        <MenuItem value="#f44336">Pomegranate</MenuItem>
        <MenuItem value="#e91e63">Amaranth</MenuItem>
        <MenuItem value="#9c27b0">Seance</MenuItem>
        <MenuItem value="#673ab7">Purple Heart</MenuItem>
        <MenuItem value="#3f51b5">San Marino</MenuItem>
        <MenuItem value="#2196f3">Dodger Blue</MenuItem>
        <MenuItem value="#03a9f4">Cerulean</MenuItem>
        <MenuItem value="#00bcd4">Robin's Egg Blue</MenuItem>
        <MenuItem value="#009688">Persian Green</MenuItem>
        <MenuItem value="#4caf50">Fruit Salad</MenuItem>
        <MenuItem value="#8bc34a">Sushi</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CalendarSelect;
