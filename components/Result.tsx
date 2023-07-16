const CustomButton = () => <button className="btn">Apply today</button>;

function Result({monthlyPayment}) {
  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        principal: 2000,
        annualInterestRate: 1,
        termOfLoan: 10,
      };

      const response = await fetch("/api/mortgageCalculation", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });
  }

  return (
    <>
      <div className="result__container">
        <p className="text-lightgrey font-semibold text-xl pt-14">
          Your total monthly payment will be
        </p>
        <div className="result__price font-black">
          {monthlyPayment.toString().split(".")[0]}
          <span className="result__decimal">{monthlyPayment.toString().split(".")[1]}</span>
        </div>
        <span className="text-lightgrey font-semibold text-xl">/month</span>
        <CustomButton />
      </div>
    </>
  );
}

export default Result;
