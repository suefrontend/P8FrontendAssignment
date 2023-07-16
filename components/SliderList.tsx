import SliderItem from "./SliderItem";

const SliderList = ({
  principal,
  setPrincipal,
  annualInterestRate,
  setAnnualInterestRate,
}) => {
  return (
    <>
      <SliderItem
        min={50000}
        max={2500000}
        step={50000}
        value={principal}
        setValue={setPrincipal}
        label="purchase price"
        type="price"
      />
      <SliderItem
        min={0}
        max={25}
        step={1}
        value={annualInterestRate}
        setValue={setAnnualInterestRate}
        label="interest rate"
        type="percentage"
      />
    </>
  );
};

export default SliderList;
