import * as Styled from "../helpers/Todo.styles";
import useInput from "../../../hooks/useInput";

const TodoForm = ({ addTodo }) => {
  const [value, handleValueChange, resetValue] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    resetValue();
  };

  return (
    <Styled.FormWrapper>
      <form onSubmit={handleSubmit}>
        <Styled.Input
          value={value}
          onChange={handleValueChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Styled.FormWrapper>
  );
};

export default TodoForm;
