import './App.css';
import Weather from './pages/Weather';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/marketplace' element={<Marketplace />} />
      </Routes>
    </div>
  );
}

export default App;
