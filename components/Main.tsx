import { useEffect, useState } from "react";
import InputContainer from "./InputContainer";
import Result from "./Result";

function Main() {
  const [principle, setPrinciple] = useState<number>(250000);
  const [interestRate, setInterestRate] = useState<number>(1.5);
  const [termOfLoan, setTermOfLoan] = useState<number>(25);

  useEffect(() => {
    console.log("principle", principle);
    console.log("interestRate", interestRate);
    console.log("termOfLoan", termOfLoan);
  }, [principle, interestRate, termOfLoan]);

  const handlePrinciple = (value) => {
    setPrinciple(value);
  };
  const handleInterestRate = (value) => {
    setInterestRate(value);
  };
  const handleTerm = (value) => {
    setTermOfLoan(value);
  };

  return (
    <div className="container border border-red-500 h-[80vh] ">
      <h2 className="text-[32px] text-grey font-medium">
        Get started with Digital Credit Experience
      </h2>
      <p className="text-lightgrey text-sm mt-1">
        Qualify or apply your mortgage in minutes
      </p>
      <div className="calculator">
        <InputContainer
          handlePrinciple={handlePrinciple}
          principle={principle}
          handleInterestRate={handleInterestRate}
          interestRate={interestRate}
          handleTerm={handleTerm}
          termOfLoan={termOfLoan}
        />
        <Result />
      </div>
    </div>
  );
}

export default Main;
