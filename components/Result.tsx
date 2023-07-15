const CustomButton = () => <button className="btn">Apply today</button>;

function Result() {
  return (
    <div className="result__container">
      <p className="text-lightgrey font-bold text-xl pt-14">
        Your total monthly payment will be
      </p>
      <div className="result__price">
        <p className="font-black">
          <span className="text-xl">$</span>
          853
          <span className="text-xl">50</span>
        </p>
      </div>
      <span>/month</span>
      <CustomButton />
    </div>
  );
}

export default Result;
