import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  margin-top: 3px;
  margin-left: 3px;
`;

export const SubmitBtn = styled.button`
  margin-top: 15px;
  padding: 5px 10px;
  border: 3px solid rebeccapurple;
  border-radius: 4px;
  background-color: slateblue;
  color: white;
`;

export const FormSyntaxHighlighter = styled(SyntaxHighlighter)`
  width: 550px;
`;