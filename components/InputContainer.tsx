import RangeSlider from "./RangeSlider";

function InputContainer() {
  return (
    <div className="flex-1 border border-black">
      <RangeSlider
        initialValue={250000}
        min={50000}
        max={2500000}
        step={1000}
        label="Purchase price"
      />
      <RangeSlider
        initialValue={250000}
        min={50000}
        max={2500000}
        step={1000}
        label="Interest rate"
      />
    </div>
  );
}
export default InputContainer;
