import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Naviagtion';
import ProductList from './components/ProductionList';
import AdminPanel from './components/AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="cart" element={<Cart />}></Route>
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;