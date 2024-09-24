function RangeInput({ label, value, setValue, initValue }) {
  const MIN = Math.floor(initValue / 2);
  const MAX = Math.floor(initValue * 2);

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
        />
      </div>
    </>
  );
}

export default RangeInput;
