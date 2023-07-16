import { ChangeEvent } from "react";
import { Slider } from "@mui/material";

interface SliderProps {
  type: string;
  min: number;
  max: number;
  step: number;
  label: string;
  value: number;
  setValue: (value: number) => void;
}

function RangeSlider({
  type,
  min,
  max,
  step,
  label,
  value,
  setValue,
}: SliderProps) {
  const handleSlide = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
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
        <span className="slider__range">{min}</span>
        <span className="slider__range">{max}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
