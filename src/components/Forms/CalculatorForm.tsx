import OperationButton from "../Controls/OperationButton";
import Navigator from "../Navigator";
import "./CalculatorForm.css";
import Card from "../Container/Card";
import { useState } from "react";
const CalculatorForm = () => {
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  return (
    <>
      <Navigator></Navigator>
      <Card>
        <div className="calculator-controls-container">
          <div className="inputBox">
            <label htmlFor="num1">Number 1 : </label>
            <input
              type="number"
              name="num1"
              id="num1"
              placeholder="Number 1"
              value={firstNum}
              onChange={(e) => {
                setFirstNum(parseInt(e.target.value));
              }}
            />
          </div>

          <div className="inputBox">
            <label htmlFor="num1">Number 2 : </label>
            <input
              type="number"
              name="num2"
              id="num2"
              placeholder="Number 2"
              value={secondNumber}
              onChange={(e) => {
                setSecondNumber(parseInt(e.target.value));
              }}
            />
          </div>

          <div className="controls">
            <OperationButton
              className="addButton"
              opName="Add"
              setRes={() => setResult(firstNum + secondNumber)}
            />
            <OperationButton
              className="subButton"
              opName="Subtract"
              setRes={() => setResult(firstNum - secondNumber)}
            />
            <OperationButton
              className="divButton"
              opName="Division"
              setRes={() => setResult(firstNum / secondNumber)}
            />
            <OperationButton
              className="multButton"
              opName="Multiplication"
              setRes={() => setResult(firstNum * secondNumber)}
            />
          </div>

          <div className="outputBox">
            <label htmlFor="num1" className="output-label">
              Result :
            </label>
            <input
              type="number"
              name="result"
              id="result"
              value={result}
              disabled
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default CalculatorForm;
