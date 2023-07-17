import RadioItem from "./RadioItem";

interface RadioListProps {
  label: string;
  setValue: (value: number) => void;
  termOfLoan: number;
}

function RadioList({ label, setValue, termOfLoan }: RadioListProps) {
  const handleSelected = (value: number) => {
    setValue(value);
  };

  const terms = [20, 25, 30];

  const renderedList = terms.map((term) => (
    <RadioItem
      key={term}
      value={term}
      selected={termOfLoan}
      text={term.toString()}
      onChange={() => handleSelected(term)}
    />
  ));

  return (
    <div className="radio">
      <span className="calculator__label">{label}</span>
      <div className="radio__container mt-3">{renderedList}</div>
    </div>
  );
}

export default RadioList;
