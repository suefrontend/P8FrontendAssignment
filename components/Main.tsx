import { useEffect, useState } from "react";
import axios from "axios";
import Calculator from "./Calculator";
import Result from "./Result";

function Main() {
  const [principal, setPrincipal] = useState<number>(850000); //850000
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(1.5);
  const [termOfLoan, setTermOfLoan] = useState<number>(25);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(3203.42);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const getMortgetCalculation = async () => {
      try {
        setIsLoading(true);
        const url = `/api/mortgageCalculation?principal=${principal}&termOfLoan=${termOfLoan}&annualInterestRate=${annualInterestRate}`;

        const response = await axios.post(url);

        if (response.status === 200) {
          const { monthlyPayment } = response.data;
          setMonthlyPayment(monthlyPayment);
          setErrorMessage("");
        }
        setIsLoading(false);
      } catch (error: any) {
        setMonthlyPayment(0);
        setErrorMessage(error.response.data.error);
        setIsLoading(false);
      }
    };
    getMortgetCalculation();
  }, [principal, annualInterestRate, termOfLoan, monthlyPayment, errorMessage]);

  return (
    <div className="container lg:h-[80vh] ">
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
