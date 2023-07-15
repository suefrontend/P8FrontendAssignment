import RangeSlider from "./RangeSlider";
import RadioList from "./RadioList";

function InputContainer({
  handlePrinciple,
  handleTerm,
  termOfLoan,
  principle,
  interest,
}) {
  return (
    <div className="flex-1 border border-black">
      {/* <RangeSlider
        value={inputValue}
        min={50000}
        max={2500000}
        step={1000}
        label="Purchase price"
      />
      <RangeSlider
        value={inputValue}
        min={60000}
        max={2500000}
        step={1000}
        label="Interest rate"
      /> */}
      <RangeSlider
        min={50000}
        max={2500000}
        step={50000}
        value={principle}
        label="purchase price"
        handlePrinciple={handlePrinciple}
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
