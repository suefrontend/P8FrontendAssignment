import { useEffect, useRef, useState } from "react";
import { Slider } from "@mui/material";

function RangeSlider({
  type,
  min,
  max,
  step,
  label,
  annualInterestRate,
  principal,
  handlePrincipal,
  handleInterestRate,
  value,
  setValue,
}) {
  const handleSlide = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-8">
      <span className="calculator__label">{label}</span>
      <p
        className={`${
          type === "price" ? "slider__price" : "slider__percentage ml-[12px]"
        } slider__value`}
      >
        {value}
      </p>

      <Slider
        size="small"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSlide}
        valueLabelDisplay="auto"
      />

      <div className="flex justify-between pt-2">
        <small className="slider__range">{min}</small>
        <small className="slider__range">{max}</small>
      </div>
    </div>
  );
}

export default RangeSlider;
