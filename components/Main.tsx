import { useEffect, useState } from "react";
import InputContainer from "./InputContainer";
import Result from "./Result";

function Main() {
  const [termOfLoan, setTermOfLoan] = useState<number>(25);

  useEffect(() => {
    console.log("termOfLoan", termOfLoan);
  }, [termOfLoan]);

  const handleTerm = (term) => {
    setTermOfLoan(term);
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
        <InputContainer handleTerm={handleTerm} termOfLoan={termOfLoan} />
        <Result />
      </div>
    </div>
  );
}

export default Main;
