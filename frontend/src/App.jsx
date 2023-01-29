import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './index.css';
import { HomePage } from './pages/usersPages/HomePage';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import ProductsPage from './pages/usersPages/ProductsPage';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
