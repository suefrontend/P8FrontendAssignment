import RadioList from "./RadioList";
import SliderList from "./SliderList";

interface CalculatorProps {
  termOfLoan: number;
  principal: number;
  annualInterestRate: number;
  setPrincipal: (value: number) => void;
  setAnnualInterestRate: (value: number) => void;
  setTermOfLoan: (value: number) => void;
}

function Calculator({
  termOfLoan,
  principal,
  annualInterestRate,
  setPrincipal,
  setAnnualInterestRate,
  setTermOfLoan,
}: CalculatorProps) {
  return (
    <div className="flex-1">
      <SliderList
        principal={principal}
        annualInterestRate={annualInterestRate}
        setPrincipal={setPrincipal}
        setAnnualInterestRate={setAnnualInterestRate}
      />
      <RadioList
        setValue={setTermOfLoan}
        termOfLoan={termOfLoan}
        label="Period"
      />
    </div>
  );
}
export default Calculator;
