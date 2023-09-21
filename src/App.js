import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Catrgory from './pages/Catrgory'
import Sac from './pages/Sac'
import Lunette from './pages/Lunette'
import Divers from './pages/Divers'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Catrgory/>}/>
        <Route path='/category/sac' element={<Sac/>}/>
        <Route path='/category/lunette' element={<Lunette/>}/>
        <Route path='/category/divers' element={<Divers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
