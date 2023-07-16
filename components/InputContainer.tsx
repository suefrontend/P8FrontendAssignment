import RangeSlider from "./RangeSlider";
import RadioList from "./RadioList";

function InputContainer({
  // handlePrincipal,
  // handleInterestRate,
  // handleTerm,
  termOfLoan,
  principal,
  annualInterestRate,
  setValue,
  setPrincipal,
  setAnnualInterestRate,
  setTermOfLoan,
}) {
  const handlePrincipal = (value) => {
    setPrincipal(value);
  };
  const handleInterestRate = (value) => {
    setAnnualInterestRate(value);
  };
  const handleTerm = (value) => {
    setTermOfLoan(value);
  };

  return (
    <div className="flex-1 border border-black">
      <RangeSlider
        min={50000}
        max={2500000}
        step={50000}
        value={principal}
        label="purchase price"
        setValue={setPrincipal}
        type="price"
      />
      <RangeSlider
        min={0}
        max={25}
        step={0.1}
        value={annualInterestRate}
        label="interest rate"
        setValue={setAnnualInterestRate}
        type="percentage"
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
