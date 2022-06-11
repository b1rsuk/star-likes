import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/panel/:id' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
