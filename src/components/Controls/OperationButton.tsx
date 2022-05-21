import "./OperationButton.css";
type OButton = {
  opName: string;
  className: string;
};
const OperationButton = (props: OButton) => {
  return <button className={props.className}>{props.opName}</button>;
};

export default OperationButton;
