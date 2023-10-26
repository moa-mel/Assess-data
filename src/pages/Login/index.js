import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logimg from '../../images/undraw_secure_login_pdn4 1.png';
import './styles.css';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
   const navigate = useNavigate()
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const url = 'https://final-year-j646.onrender.com/api/auth/login'
     
      const { data: res } = await axios.post(url, data, {
        mode: 'cors',
      });
      console.log(res)
      localStorage.setItem("accessToken", res.accessToken);
      navigate("/category")
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };


  return (
    <div className="login">
      <div className="login-contain">
        <div className="login-nav">
          <p className="log-p">You don't have an account</p>
          <Link to="/register">
            <button className="login-but">Sign up</button>
          </Link>
        </div>
        <div className="login-container">
          <div className="login-left">
            <div className="login-img">
              <img className="" src={logimg} alt="" />
            </div>
          </div>
          <div className="login-right">
            <form className="login-form" onSubmit={handleSubmit}>
              <p className="login-form-p">Welcome</p>
              <br />
              <label>Phone No. or E-mail address</label>
              <input
                className="login-input-text"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="E-mail Address"
                type="email"
              />
              <label>Password</label>
              <input
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="login-input-text"
                type="password"
              />
              <p className="input-p">Forgetten password?
                <Link to="/resetemail">
                  click here
                </Link>
              </p>
              {error && <div>{error}</div>}
              <button className="login-button" type='submit"'>
                Login
              </button>
              <div className="login-p">
                <p className="login-agreed">I have read and agreed to the</p>
                <p className="login-terms">Terms of Service</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
