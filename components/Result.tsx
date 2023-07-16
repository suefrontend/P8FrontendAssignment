interface ResultProps {
  monthlyPayment: string;
  isLoading: boolean;
}

const CustomButton = () => <button className="btn">Apply today</button>;

function Result({ monthlyPayment, isLoading }: ResultProps) {
  const priceWithComma = parseInt(monthlyPayment).toLocaleString("en-US");

  return (
    <div className="result__container">
      <p className="result__text pt-14">Your total monthly payment will be</p>
      <div
        className={`${
          isLoading && "ct-animate-blink"
        } result__price font-black`}
      >
        {priceWithComma.split(".")[0]}
        <span className="result__decimal">
          {/* {monthlyPayment.toString().split(".")[1]} */}
          {monthlyPayment}
        </span>
      </div>
      <span className="result__text">/month</span>
      <CustomButton />
    </div>
  );
}

export default Result;
