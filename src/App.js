import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import EmailFailed from './pages/EmailFailed';
import EmailSuccess from './pages/EmailSuccess';
import Home from "./pages/Home";
import Insight from './pages/Insight';
import Login from './pages/Login';
import Register from "./pages/Register";
import Verify from "./pages/Verify";

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
