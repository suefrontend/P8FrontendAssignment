import { formatPrice } from "../utils/formatPrice";
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

function SliderItem({
  type,
  min,
  max,
  step,
  label,
  value,
  setValue,
}: SliderProps) {
  const handleSlide = (e: any) => {
    setValue(parseInt(e.target.value));
  };
  const valueLabelFormat = (value: number) => {
    if (type === "price") {
      return `$${value.toLocaleString("en-US")}`;
    }
    if (type === "percentage") {
      return `${value}%`;
    }
    return value.toString();
  };

  return (
    <div className="mb-8">
      <div className="slider__info">
        <span className="calculator__label">{label}</span>
        {type === "price" && (
          <p className="slider__price slider__value">
            {value.toLocaleString("en-US")}
          </p>
        )}
        {type === "percentage" && (
          <p className="slider__percentage ml-[12px] slider__value">{value}</p>
        )}
      </div>
      <Slider
        size="small"
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={value}
        onChange={handleSlide}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        aria-labelledby={`${label}-slider`}
        getAriaValueText={(value) => value.toString()}
      />

      <div className="flex justify-between -mt-2">
        <span
          className={`${type === "price" ? "price__symbol" : ""} slider__range`}
        >
          {formatPrice(min)}
        </span>
        <span
          className={`${
            type === "price" ? "price__symbol" : "percentage__symbol"
          } slider__range`}
        >
          {formatPrice(max)}
        </span>
      </div>
    </div>
  );
}

export default SliderItem;
