interface ResultProps {
  monthlyPayment: number;
}

const CustomButton = () => <button className="btn">Apply today</button>;

function Result({ monthlyPayment }: ResultProps) {
  return (
    <div className="result__container">
      <p className="result__text pt-14">Your total monthly payment will be</p>
      <div className="result__price font-black">
        {monthlyPayment.toString().split(".")[0]}
        <span className="result__decimal">
          {monthlyPayment.toString().split(".")[1]}
        </span>
      </div>
      <span className="result__text">/month</span>
      <CustomButton />
    </div>
  );
}

export default Result;
