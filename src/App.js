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
import CreateInsight from './pages/CreateInsight';
import Login from './pages/Login';
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import ResetEmail from "./pages/ResetEmail"
import ResetOtp from "./pages/ResetOtp"
import ResetPassword from "./pages/ResetPassword"
import ResetConfirm from "./pages/ResetConfirm"
import Payment from "./pages/Payment"

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
      <Route path="/create-insight" element={<CreateInsight/>} />
      <Route path="/Verify" element={<Verify/>} />
      <Route path="/resetemail" element={<ResetEmail/>} />
      <Route path="/resetotp/:email" element={<ResetOtp/>} />
      <Route path="/resetpassword/:email" element={<ResetPassword/>} />
      <Route path="/confirm" element={<ResetConfirm/>} />
      <Route path="/payment" element={<Payment/>} />
      </Routes>
  </Router>
    </div>
  );
}

export default App;
