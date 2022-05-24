import "./Navigator.css";
const Navigator = () => {
  // const navigate = useNavigate();
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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/virat">Virat</a>
        </li>
        <li>
          <a href="/rahul">Rahul</a>
        </li>
        <li>
          <a href="/sachin">Sachin</a>
        </li>
        <li>
          <a href="/calculator">Calculator</a>
        </li>
        <li>
          <a href="/notetaking">NoteTaking</a>
        </li>
        <li>
          <a href="/carousel">Carousel</a>
        </li>
      </ul>
    </>
  );
};

export default Navigator;
