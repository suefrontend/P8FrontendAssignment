import RangeSlider from "./RangeSlider";
import RadioList from "./RadioList";

interface InputContainerProps {
  termOfLoan: number;
  principal: number;
  annualInterestRate: number;
  setPrincipal: (value: number) => void;
  setAnnualInterestRate: (value: number) => void;
  setTermOfLoan: (value: number) => void;
}

function InputContainer({
  termOfLoan,
  principal,
  annualInterestRate,
  setPrincipal,
  setAnnualInterestRate,
  setTermOfLoan,
}: InputContainerProps) {
  const handleTerm = (value: number) => {
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
        setValue={setTermOfLoan}
        termOfLoan={termOfLoan}
        label="Period"
      />
    </div>
  );
}
export default InputContainer;
