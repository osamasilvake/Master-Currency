import { FC } from "react";
import { ResultInterface } from "./Result.interface";

const Result: FC<ResultInterface> = (props) => {
  const { input, from, to, output } = props
  return (
    <div className="cu-result">
      <h2>Converted Amount:</h2>
      <p>{input + " " + from.toUpperCase() + " = " + output.toFixed(2) + " " + to.toUpperCase()}</p>
    </div>
  )
};
export default Result;