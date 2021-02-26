export const createValuesString = (values) => {
  let valuesString = `FORM VALUES:\n{\n`;

  for (let value in values) {
    let str;
    if (value === 'age') {
      str = `  ${value}: ${values[value]}\n`;
    } else {
      str = `  ${value}: "${values[value]}"\n`;
    }
    valuesString += str;
  }

  valuesString += `}`;
  return valuesString;
}

export const createErrorsString = (errors) => {
  let errorsString = `ERRORS:\n{\n`;

  for (let error in errors) {
    let str = `  ${error}: "${errors[error]}"\n`;
    errorsString += str;
  }

  errorsString += `}`;
  return errorsString;
}