const CustomButton = () => <button className="btn">Apply today</button>;

function Result() {
  return (
    <div className="result__container">
      <p className="text-lightgrey font-semibold text-xl pt-14">
        Your total monthly payment will be
      </p>
      <div className="result__price font-black">
        853
        <span className="result__decimal">50</span>
      </div>
      <span className="text-lightgrey font-semibold text-xl">/month</span>
      <CustomButton />
    </div>
  );
}

export default Result;
