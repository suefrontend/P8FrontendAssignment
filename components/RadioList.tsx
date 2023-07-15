import { useState } from "react";
import Radio from "./Radio";

function RadioList({ label, handleTerm, termOfLoan }) {
  const handleSelected = (value) => {
    handleTerm(value);
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="calculator__label">{label}</span>
      <Radio
        value={20}
        selected={termOfLoan}
        text="20 Years"
        onChange={() => handleSelected(20)}
      />
      <Radio
        value={25}
        selected={termOfLoan}
        text="25 Years"
        onChange={() => handleSelected(25)}
      />
      <Radio
        value={30}
        selected={termOfLoan}
        text="30 Years"
        onChange={() => handleSelected(30)}
      />
    </div>
  );
}

export default RadioList;
