interface RadioProps {
  value: number;
  selected: number;
  text: string;
  onChange: () => void;
}

function Radio({ value, selected, text, onChange }: RadioProps) {
  return (
    <div
      className="radio__container"
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
      <div className="radio__label">{text}</div>
    </div>
  );
}

export default Radio;
