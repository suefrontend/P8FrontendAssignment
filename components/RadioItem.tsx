import React from "react";

interface RadioProps {
  value: number;
  selected: number;
  text: string;
  onChange: (value: number) => void;
}

function RadioItem({ value, selected, text, onChange }: RadioProps) {
  const isChecked = value === selected;

  const handleRadioClick = () => {
    onChange(value);
  };

  return (
    <div className="radio__wrapper">
      <input
        type="radio"
        value={value}
        id={`radio-${value}`}
        checked={isChecked}
        onChange={handleRadioClick}
        className="radio__input"
        aria-checked={isChecked}
        aria-labelledby={`radio-${value}-label`}
      />
      <label
        htmlFor={`radio-${value}`}
        id={`radio-${value}-label`}
        className="radio__label"
      >
        {text} Years
      </label>
    </div>
  );
}

export default RadioItem;
