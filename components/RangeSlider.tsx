import { useEffect, useRef, useState } from "react";
import { Slider } from "@mui/material";

function RangeSlider({
  type,
  min,
  max,
  step,
  label,
  interest,
  principle,
  handlePrinciple,
  value,
}) {
  const handleSlide = (value) => {
    handlePrinciple(value);
  };
  return (
    <div className="mb-8">
      <span className="calculator__label">{label}</span>
      <div className="relative">
        <Slider
          size="small"
          min={min}
          max={max}
          step={step}
          value={principle}
          onChange={(e) => handleSlide(e.target.value)}
        />
      </div>
      <div className="flex justify-between pt-2">
        <small className="slider__range">$50K</small>
        <small className="slider__range">$2.5M</small>
      </div>
    </div>
  );
}

export default RangeSlider;
