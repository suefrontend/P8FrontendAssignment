import RangeSlider from "./RangeSlider";
import RadioList from "./RadioList";

function InputContainer({ handleTerm, termOfLoan }) {
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
      <RadioList
        handleTerm={handleTerm}
        termOfLoan={termOfLoan}
        label="Period"
      />
    </div>
  );
}
export default InputContainer;
