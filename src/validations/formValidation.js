import * as yup from "yup";
import { setLocale } from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("First name is required field"),
  lastName: yup.string().required("Last name is required field"),
  age: yup.number().min(1).max(99).required("Age is required field"),
});