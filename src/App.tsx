import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Checkout from './Components/Checkout';
import MainMenu from './Components/MainMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
