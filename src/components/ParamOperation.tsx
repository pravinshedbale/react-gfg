import { useParams } from "react-router";

const ParamOperation = () => {
  const params = useParams<{ x: string; y: string; operator: string }>();
  const { x, y, operator } = params;
  let result = 0;
  if (x && y) {
    switch (operator) {
      case "+":
        result = +x + +y;
        break;
      case "-":
        result = +x - +y;
        break;
      case "*":
        result = +x * +y;
        break;
      default:
        result = +x / +y;
        break;
    }
    return <div>{`${x} ${operator ? operator : "/"} ${y} = ${result}`}</div>;
  }
  return <div>Invalid Arguments</div>;
};

export default ParamOperation;
