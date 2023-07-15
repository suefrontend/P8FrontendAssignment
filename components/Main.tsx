import InputContainer from "./InputContainer";
import Result from "./Result";

function Main() {
  return (
    <div className="container border border-red-500 h-[80vh] ">
      <h2 className="text-[32px] text-grey font-medium">
        Get started with Digital Credit Experience
      </h2>
      <p className="text-lightgrey text-sm mt-1">
        Qualify or apply your mortgage in minutes
      </p>
      <div className="calculator">
        <InputContainer />
        <Result />
      </div>
    </div>
  );
}

export default Main;
