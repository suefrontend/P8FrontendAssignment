function Radio({ value, selected, text, onChange }) {
  return (
    <div
      className="radio-container"
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={`radio-outer-circle ${value !== selected && "unselected"}`}
      >
        <div
          className={`radio-inner-circle ${
            value !== selected && "unselected-circle"
          }`}
        />
      </div>
      <div className="helper-text font-semibold">{text}</div>
    </div>
  );
}

export default Radio;
