import RangeSlider from "./RangeSlider";
import RadioList from "./RadioList";

function InputContainer({
  handlePrinciple,
  handleInterestRate,
  handleTerm,
  termOfLoan,
  principle,
  interestRate,
}) {
  return (
    <div className="flex-1 border border-black">
      <RangeSlider
        min={50000}
        max={2500000}
        step={50000}
        value={principle}
        label="purchase price"
        setValue={handlePrinciple}
      />
      <RangeSlider
        min={0}
        max={25}
        step={0.1}
        value={interestRate}
        label="interest rate"
        setValue={handleInterestRate}
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
