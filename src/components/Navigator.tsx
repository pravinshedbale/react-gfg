import { useNavigate } from "react-router";
import "./Navigator.css";
const Navigator = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <button onClick={() => navigate("/sachin")}>Sachin</button>{" "}
        </li>
        <li>
          <button onClick={() => navigate("/rahul")}>Rahul</button>{" "}
        </li>
        <li>
          <button onClick={() => navigate("/virat")}>Virat</button>{" "}
        </li>
      </ul>
    </>
  );
};

export default Navigator;
