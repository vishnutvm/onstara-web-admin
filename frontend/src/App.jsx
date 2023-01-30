import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './index.css';
import { HomePage } from './pages/usersPages/HomePage';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import ProductsPage from './pages/usersPages/ProductsPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route
            exact
            path="/products/:categoryId"
            element={<ProductsPage />}
          />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
