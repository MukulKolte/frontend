import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import Homepage from './Components/Homepage';
import Historypapers from './Components/Historypapers';
import AboutUs from './Components/AboutUs';
import Contentscreen from './Components/Contentscreen';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/history' element={<Historypapers />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/content' element={<Contentscreen />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
