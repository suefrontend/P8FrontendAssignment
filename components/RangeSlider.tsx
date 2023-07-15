import { useEffect, useRef, useState } from "react";

function RangeSlider({ initialValue, min, max, step, label }) {
  const [price, setPrice] = useState(initialValue);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="mb-8">
      <span className="calculator__label">{label}</span>

      <div className="flex items-start">
        <p className="slider__price">{price.toLocaleString()}</p>
      </div>
      <div className="relative h-[3px] rounded-md bg-gray-300">
        <div
          className="absolute h-[3px] bg-bluebg rounded"
          style={{ width: `${((price - min) / (max - min)) * 100}%` }}
        ></div>
      </div>
      <div className="relative">
        <input
          onChange={handleChange}
          type="range"
          initialValue={initialValue}
          min={min}
          step={step}
          max={max}
          value={price}
          className="absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
        />
      </div>
      <div className="flex justify-between pt-2">
        <span className="slider__range">$50K</span>
        <span className="slider__range">$2.5M</span>
      </div>
    </div>
  );
}

export default RangeSlider;
