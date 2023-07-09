import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from './pages/Login';
import EmailFailed from './pages/EmailFailed';
import EmailSuccess from './pages/EmailSuccess';
import Category from './pages/Category';
import Insight from './pages/Insight';
import Verify from "./pages/Verify"

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/success" element={<EmailSuccess/>} />
      <Route path="/failed" element={<EmailFailed/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/insight" element={<Insight/>} />
      <Route path="/Verify" element={<Verify/>} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
