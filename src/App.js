import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/index';
import Game from './views/game/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/game' element={<Game/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
