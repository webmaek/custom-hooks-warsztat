import { useState, useEffect, useRef } from "react";

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnSubmitting(false);
      setOnBlur(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const validate = () => {
    const newErrors = {};
    for (let value in values) {
      if (value === 'name') {
        if (values.name === '') {
          newErrors.name = `Name field is required!`;
        }
      }
      if (value === 'lastName') {
        if (values.lastName === '') {
          newErrors.lastName = `Last name field is required!`;
        }
      }
      if (value === 'age') {
        if ((values.age === 0 || values.age <= 0 || values.age >= 99)) {
          newErrors.age = `Age field is required, age must be minimum 0 and maximum 99`;
        }
      }
    }
    setErrors(newErrors);
  }

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event) => {
    const { target } = event;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setErrors({ ...errors });
    onSubmit({ values, errors });
    validate(values);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  };
};

export default useForm;
