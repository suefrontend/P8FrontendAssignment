import { BsFillExclamationTriangleFill } from "react-icons/bs";
import Button from "./Button";

interface ResultProps {
  monthlyPayment: number;
  isLoading: boolean;
}

function Result({ monthlyPayment, isLoading, errorMessage }: ResultProps) {
  const priceWithComma = parseInt(monthlyPayment).toLocaleString("en-US");

  return (
    <div className="result__container">
      {monthlyPayment > 0 ? (
        <>
          <p className="result__text">Your total monthly payment will be</p>
          {/* Large screen */}
          <div className="max-md:hidden">
            <div className={`${isLoading && "ct-animate-blink"} result__price`}>
              {priceWithComma.split(".")[0]}
              <span className="result__decimal">
                {monthlyPayment.toString().split(".")[1]}
              </span>
            </div>
            <span className="result__text">/month</span>
          </div>
          {/* Large screen */}
          {/* Small screen */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div
                className={`${isLoading && "ct-animate-blink"} result__price`}
              >
                <span className="text-[36px] mr-2">
                  {priceWithComma.split(".")[0]}
                  <span className="result__decimal">
                    {monthlyPayment.toString().split(".")[1]}
                  </span>
                </span>
                <span className="result__text">/month</span>
              </div>
              <Button>Apply Today</Button>
            </div>
          </div>
          {/* Small screen */}
        </>
      ) : (
        <div
          className={`h-full ${
            isLoading && "ct-animate-blink-darker"
          } flex flex-col items-center justify-center gap-8`}
        >
          <BsFillExclamationTriangleFill size={142} className="text-gray-300" />
          <span className="text-lightgrey w-2/3 leading-relaxed">
            {errorMessage}
          </span>
        </div>
      )}
      <span className="max-md:hidden">
        <Button>Apply Today</Button>
      </span>
    </div>
  );
}

export default Result;
