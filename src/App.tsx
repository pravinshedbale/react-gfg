import Sachin from "./components/Sachin";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sachin" element={<Sachin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
