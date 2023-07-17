import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import Result from "./Result";

function Main() {
  const [principal, setPrincipal] = useState<number>(250000); //250000
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(1.5);
  const [termOfLoan, setTermOfLoan] = useState<number>(25);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(942.18);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    console.log("principal", principal);
    console.log("annualInterestRate", annualInterestRate);
    console.log("termOfLoan", termOfLoan);
    console.log("monthlyPayment", monthlyPayment);

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
        if (response.ok) {
          setMonthlyPayment(data.monthlyPayment);
          setErrorMessage("");
        } else {
          setMonthlyPayment(0);
          setErrorMessage(data.error);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Couldn't calculate your mortgage");
      }
    };
    console.log("errorMessage", errorMessage);
    getMortgetCalculation();
  }, [principal, annualInterestRate, termOfLoan, monthlyPayment, errorMessage]);

  return (
    <div className="container border border-red-500 lg:h-[80vh] ">
      <h1 className="heading">Get started with Digital Credit Experience</h1>
      <p className="text-lightgrey text-sm mt-1">
        Qualify or apply your mortgage in minutes
      </p>

      <div className="calculator">
        <Calculator
          principal={principal}
          annualInterestRate={annualInterestRate}
          termOfLoan={termOfLoan}
          setPrincipal={setPrincipal}
          setAnnualInterestRate={setAnnualInterestRate}
          setTermOfLoan={setTermOfLoan}
        />
        <Result
          monthlyPayment={monthlyPayment}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
}

export default Main;
