import Sachin from "./components/Sachin";
import Virat from "./components/Virat";
import Rahul from "./components/Rahul";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserParams from "./components/UserParams";
import ParamOperation from "./components/ParamOperation";
import CalculatorForm from "./components/Forms/CalculatorForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sachin" element={<Sachin />}></Route>
        <Route path="/virat" element={<Virat />}></Route>
        <Route path="/rahul" element={<Rahul />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:userId" element={<UserParams />}></Route>
        <Route path="/:x/:operator/:y" element={<ParamOperation />}></Route>
        <Route path="/:x///:y" element={<ParamOperation />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
        <Route path="/calculator" element={<CalculatorForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
