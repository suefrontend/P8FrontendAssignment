import { BsFillExclamationTriangleFill } from "react-icons/bs";

interface ResultProps {
  monthlyPayment: string;
  isLoading: boolean;
}

const CustomButton = () => <button className="btn">Apply today</button>;

function Result({ monthlyPayment, isLoading, errorMessage }: ResultProps) {
  const priceWithComma = parseInt(monthlyPayment).toLocaleString("en-US");

  return (
    <div className="result__container">
      {monthlyPayment > 0 ? (
        <>
          <p className="result__text pt-14">
            Your total monthly payment will be
          </p>
          <div className={`${isLoading && "ct-animate-blink"} result__price`}>
            {priceWithComma.split(".")[0]}
            <span className="result__decimal">
              {monthlyPayment.toString().split(".")[1]}
            </span>
          </div>
          <span className="result__text">/month</span>
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
      <CustomButton />
    </div>
  );
}

export default Result;
