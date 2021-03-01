import { Grid, TextField, Button } from "@material-ui/core";
import * as Styled from "./helpers/Form.styles";
import useForm from "../../hooks/useForm";
import validate from "./helpers/validate";

const initialValues = {
  email: "",
  password: "",
};

const FormComponent = () => {
  const onSubmit = () => {
    console.log("Submitted Successfully!");
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    onSubmit,
    validate,
    initialValues
  );

  return (
    <Styled.Container>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <Styled.FormContainer>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  margin: "1rem 0",
                }}
              >
                Sign Up
              </Button>
            </form>
          </Styled.FormContainer>
        </Grid>
      </Grid>
    </Styled.Container>
  );
};

export default FormComponent;
