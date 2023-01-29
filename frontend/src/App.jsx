import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './index.css';
import { HomePage } from './pages/usersPages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
