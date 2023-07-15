import RangeSlider from "./RangeSlider";
import RadioList from "./RadioList";

function InputContainer({
  handlePrincipal,
  handleInterestRate,
  handleTerm,
  termOfLoan,
  principal,
  annualInterestRate,
}) {
  return (
    <div className="flex-1 border border-black">
      <RangeSlider
        min={50000}
        max={2500000}
        step={50000}
        value={principal}
        label="purchase price"
        setValue={handlePrincipal}
      />
      <RangeSlider
        min={0}
        max={25}
        step={0.1}
        value={annualInterestRate}
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
