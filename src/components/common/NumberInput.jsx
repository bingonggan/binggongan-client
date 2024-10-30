import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

function NumberInput({ label, value, setValue, initValue }) {
  const MIN = Math.floor(initValue / 2);
  const MAX = Math.floor(initValue * 2);

  return (
    <>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={MIN}
        max={MAX}
      />
    </>
  );
}

export default NumberInput;
