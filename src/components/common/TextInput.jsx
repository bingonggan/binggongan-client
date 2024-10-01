import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

function TextInput({ label, value, setValue }) {
  return (
    <>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default TextInput;
