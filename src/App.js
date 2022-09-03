import './App.css';
import Weather from './pages/Weather';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Business from './pages/Business';
import ExpertAdvice from './pages/ExpertAdvice';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/business' element={<Business />} />
        <Route path='/expert-advice' element={<ExpertAdvice />} />
        <Route path='/marketplace' element={<Marketplace />} />
      </Routes>
    </div>
  );
}

export default App;
