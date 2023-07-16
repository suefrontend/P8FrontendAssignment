import { useEffect, useState } from "react";
import InputContainer from "./InputContainer";
import Result from "./Result";

function Main() {
  const [principal, setPrincipal] = useState("TEST"); //250000
  const [annualInterestRate, setAnnualInterestRate] = useState(1.5);
  const [termOfLoan, setTermOfLoan] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(942.18);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("principal", principal);
    console.log("annualInterestRate", annualInterestRate);
    console.log("termOfLoan", termOfLoan);

    const getMortgetCalculation = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/mortgageCalculation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            principal,
            annualInterestRate,
            termOfLoan,
          }),
        });
        const data = await response.json();
        setMonthlyPayment(data.monthlyPayment);
        setIsLoading(false);
        console.log("data", data.monthlyPayment);
      } catch (error) {
        console.log("Couldn't calculate your mortgage");
      }
    };

    getMortgetCalculation();
  }, [principal, annualInterestRate, termOfLoan]);

  return (
    <div className="container border border-red-500 h-[80vh] ">
      <h1 className="text-[32px] text-grey font-medium">
        Get started with Digital Credit Experience
      </h1>
      <p className="text-lightgrey text-sm mt-1">
        Qualify or apply your mortgage in minutes
      </p>

      <div className="calculator">
        <InputContainer
          principal={principal}
          annualInterestRate={annualInterestRate}
          termOfLoan={termOfLoan}
          setPrincipal={setPrincipal}
          setAnnualInterestRate={setAnnualInterestRate}
          setTermOfLoan={setTermOfLoan}
        />
        <Result monthlyPayment={monthlyPayment} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Main;
