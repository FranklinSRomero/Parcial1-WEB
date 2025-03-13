import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import './i18n';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/stores" element={<Menu />} />
        <Route path="/cart" element={<Menu />} />
      </Routes>
    </Router>
  );
}
