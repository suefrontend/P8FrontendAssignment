// const CustomButton = () => <button className="btn">Apply today</button>;

// function Result() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     const postData = async () => {
//       const data = {
//         principal: 2000,
//         annualInterestRate: 1,
//         termOfLoan: 10,
//       };

//       const response = await fetch("/api/mortgageCalculation", {
//         method: "POST",
//         body: JSON.stringify(data),
//       });
//       return response.json();
//     };
//     postData().then((data) => {
//       alert(data.message);
//     });
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <button type="submit" className="bg-red-500">
//           Submit
//         </button>
//       </form>

//       <div className="result__container">
//         <p className="text-lightgrey font-semibold text-xl pt-14">
//           Your total monthly payment will be
//         </p>
//         <div className="result__price font-black">
//           853
//           <span className="result__decimal">50</span>
//         </div>
//         <span className="text-lightgrey font-semibold text-xl">/month</span>
//         <CustomButton />
//       </div>
//     </>
//   );
// }

// export default Result;

import { useState } from "react";

const Result = () => {
  const [principal, setPrincipal] = useState<number>(10);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(1);
  const [termOfLoan, setTermOfLoan] = useState<number>(1);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(853.5);

  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const principal = 250000;
      const annualInterestRate = 1.5;
      const termOfLoan = 25;

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
      // setMonthlyPayment(monthlyPayment);
      console.log("data", data);
    };
    postData().then((data) => {
      alert("Submitted");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          id="title"
          type="text"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="post">Post</label>
        <input
          id="post"
          type="text"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="post">Post</label>
        <input
          id="post"
          type="text"
          value={termOfLoan}
          onChange={(e) => setTermOfLoan(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Result;
