import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import Homepage from './Components/Homepage';
import Historypapers from './Papers/Historypapers';
import AboutUs from './Components/AboutUs';
import Contentscreen from './Components/Contentscreen';
import Fetchdata from './Components/Fetchdata';
import Englishpapers from '../src/Papers/Englishpapers' 
import HindiHalfpapers from '../src/Papers/HindiHalfpapers';
import HindiFullpapers from '../src/Papers/HindiFullpapers';
import SanskritFullpapers from '../src/Papers/SanskritFullpapers';
import SanskritHalfpapers from '../src/Papers/SanskritHalfpapers';
import Marathipapers from '../src/Papers/Marathipapers';
import Geographypapers from '../src/Papers/Geographypapers';
import Math1papers from '../src/Papers/Math1papers';
import Math2papers from '../src/Papers/Math2papers';
import Science1 from '../src/Papers/Science1';
import Science2 from '../src/Papers/Science2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/history-and-political-science-question-papers' element={<Historypapers />} />
          <Route path='/english-question-papers' element={<Englishpapers />} />
          <Route path='/hindi-full-question-papers' element={<HindiFullpapers />} />
          <Route path='/hindi-half-question-papers' element={<HindiHalfpapers />} />
          <Route path='/sanskrit-full-question-papers' element={<SanskritFullpapers />} />
          <Route path='/sanskrit-half-question-papers' element={<SanskritHalfpapers />} />
          <Route path='marathi-question-papers' element={<Marathipapers />} />
          <Route path='/geography-question-papers' element={<Geographypapers />} />
          <Route path='/math-1-question-papers' element={<Math1papers />} />
          <Route path='/math-2-question-papers' element={<Math2papers />} />
          <Route path='/science-1-question-papers' element={<Science1 />} />
          <Route path='/science-2-question-papers' element={<Science2 />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/content' element={<Contentscreen />} />
          <Route path='/test' element={<Fetchdata />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
