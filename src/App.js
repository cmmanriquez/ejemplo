import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Game from './views/game';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
