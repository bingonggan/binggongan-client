function RangeInput({ label, value, setValue, initValue }) {
  const MIN = initValue / 2;
  const MAX = initValue * 2;

  return (
    <>
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          type="range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={MIN}
          max={MAX}
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={MIN}
          max={MAX}
        />
      </div>
    </>
  );
}

export default RangeInput;
