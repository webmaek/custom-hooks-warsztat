import { makeStyles } from "@material-ui/core/styles";

export const statTypes = {
  hp: "Życie",
  attack: "Atak",
  defense: "Obrona",
  "special-attack": "Specjalny atak",
  "special-defense": "Specjalna obrona",
  speed: "Szybkość",
};

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 310,
  },
  listItem: {
    paddingTop: 0,
  },
});

export const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
