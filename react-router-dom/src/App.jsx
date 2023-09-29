import './App.css';
//1 - config react rrouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Navbar from './Components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import Not from './pages/Not';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/*" element={<Not />} />
        </Routes>
        <h1>MEU FOOTER</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
