import { useNavigate } from "react-router";
import "./Navigator.css";
const Navigator = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        {/* <li>
          <button onClick={() => navigate("/sachin")}>Sachin</button>{" "}
        </li>
        <li>
          <button onClick={() => navigate("/rahul")}>Rahul</button>{" "}
        </li>
        <li>
          <button onClick={() => navigate("/virat")}>Virat</button>{" "}
        </li> */}
        <li>
          <a href="/virat">Virat</a>
        </li>
        <li>
          <a href="/rahul">Rahul</a>
        </li>
        <li>
          <a href="/sachin">Sachin</a>
        </li>
      </ul>
    </>
  );
};

export default Navigator;
