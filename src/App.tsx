import Sachin from './components/Sachin';
import Virat from './components/Virat';
import Rahul from './components/Rahul';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserParams from './components/UserParams';
import ParamOperation from './components/ParamOperation';
import CalculatorForm from './components/Forms/CalculatorForm';
import NoteTaking from './components/NoteTaking';
import Carousel from './components/Carousel';
import UseEffect from './components/UseEffect';
import AsyncCarousel from './components/AsyncCarousel';
import UserList from './components/UserList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sachin' element={<Sachin />}></Route>
        <Route path='/virat' element={<Virat />}></Route>
        <Route path='/rahul' element={<Rahul />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user/:userId' element={<UserParams />}></Route>
        <Route path='/:x/:operator/:y' element={<ParamOperation />}></Route>
        <Route path='/:x///:y' element={<ParamOperation />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
        <Route path='/calculator' element={<CalculatorForm />}></Route>
        <Route path='/notetaking' element={<NoteTaking />}></Route>
        <Route path='/carousel' element={<Carousel />}></Route>
        <Route path='/useeffect' element={<UseEffect />}></Route>
        <Route path='/asynccarousel' element={<AsyncCarousel />}></Route>
        <Route path='/userlist' element={<UserList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
