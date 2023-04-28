import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/' element={<div>Home</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
