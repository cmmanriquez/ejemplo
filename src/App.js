import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/index';
import Game from './views/game/index';
import About from './views/about/index';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/game' element={<Game/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
