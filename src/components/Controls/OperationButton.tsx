import "./OperationButton.css";
type OButton = {
  opName: string;
  className: string;
  setRes: () => void;
};
const OperationButton = (props: OButton) => {
  return (
    <button
      className={props.className}
      onClick={() => {
        props.setRes();
      }}
    >
      {props.opName}
    </button>
  );
};

export default OperationButton;
