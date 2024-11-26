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

type PropsType = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  updateValidity: (value: boolean) => void;
};

function NumberInput({
  label,
  value,
  onChange,
  updateValidity,
  ...rest
}: PropsType) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(e.target.value);

    if (newValue > 400 || newValue <= 0) {
      updateValidity(false);
    } else {
      updateValidity(true);
    }

    onChange(newValue);
  }

  return (
    <>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        type="number"
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </>
  );
}

export default NumberInput;
