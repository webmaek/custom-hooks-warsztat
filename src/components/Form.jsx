import useForm from "../hooks/useForm";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import * as Styled from "./Form.styles";
import { createErrorsString, createValuesString } from "../helpers/FormHelpers";

const initialValues = {
  name: "",
  lastName: "",
  age: 0,
};

const FormComponent = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({ initialValues, onSubmit: (values) => console.log('onSubmit', { values }) });

  return (
    <div>
      <Styled.FormSyntaxHighlighter showLineNumbers language="javascript" style={dark}>
        {createValuesString(values)}
      </Styled.FormSyntaxHighlighter>
      <Styled.FormSyntaxHighlighter showLineNumbers language="javascript" style={dark}>
        {createErrorsString(errors)}
      </Styled.FormSyntaxHighlighter>
      <Styled.Form onSubmit={handleSubmit}>
        <h1>Form using custom hook</h1>
        <Styled.FormGroup>
          <Styled.FormInput
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Name..."
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <Styled.ErrorMessage>{errors.name}</Styled.ErrorMessage>}
        </Styled.FormGroup>

        <Styled.FormGroup>
          <Styled.FormInput
            type="text"
            name="lastName"
            autoComplete="off"
            placeholder="Last name..."
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && <Styled.ErrorMessage>{errors.lastName}</Styled.ErrorMessage>}
        </Styled.FormGroup>

        <Styled.FormGroup>
          <Styled.FormInput
            type="number"
            name="age"
            autoComplete="off"
            placeholder="Age..."
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.age && <Styled.ErrorMessage>{errors.age}</Styled.ErrorMessage>}
        </Styled.FormGroup>

        <Styled.SubmitBtn type="submit">Submit</Styled.SubmitBtn>
      </Styled.Form>
    </div>
  );
};

export default FormComponent;
