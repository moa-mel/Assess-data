import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import regimg from "../../images/undraw_Content_re_33px 1.png";
import './styles.css';

const Register = () => {
  const [data, setData] = useState({
		firstName: "",
    otherNames: "",
		email: "",
    phoneNumber:"",
    address: "",
		password: "",
	});

  const [error, setError] = useState("");
  const navigate = useNavigate()
  const [success,setSuccess] = useState(false)
	const [msg, setMsg] = useState("")

  const handleChange = ({ currentTarget: input }) => {
    setError("")
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://final-year-project-ya34.onrender.com/api/auth/register";
			const{ data: res } = await axios.post(url, data);
      if(res.success){
        setMsg(res.message); 
        setSuccess(true)
        setError("")
      }
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

  useEffect(() => {
    console.log(success,'success')
    if(success){
      const timer = setTimeout(() => {
        navigate("/verify")
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);


  return (
    <div className='register'>
    <div className='reg-contain'>
    <div className='register-nav'>
     <p className='reg-p'>Already have an account?</p>
     <Link to='/login'>
     <button className='reg-but'>Login</button>
     </Link>
     </div>
     <div className='register-container'>
     <div className='register-left'>
     <div className='register-img'>
     <img className='' src={regimg} alt=''/>
     </div>
     </div>
     <div className='register-right'>
     <form onSubmit={handleSubmit}>
     <p className='form-p'>Create Account</p>
     <br/>
     <div className='reg-fl'>
     <input className="reg-fl-input"
      placeholder='First Name' 
      name="firstName"
      value={data.firstName}
      onChange={handleChange}
      type='text'/>
      <input className="reg-fl-input"
      placeholder='Other Names'
      value={data.otherNames}
      onChange={handleChange} 
      name="otherNames"
      type='text'/>
      </div>
     <input className="input-text"
     name="email"
     value={data.email}
     onChange={handleChange}
      placeholder='E-mail Address' 
      type='email'/>
     <input className="input-text" 
     name="phoneNumber"
     value={data.phoneNumber}
     onChange={handleChange}
     placeholder='Phone Number' 
     type='tel' />
     <input className="input-text"
      placeholder='Address' 
      name="address"
      value={data.address}
     onChange={handleChange}
      type='text'/>
     <input 
     placeholder='Password'
     name="password"
     value={data.password}
     onChange={handleChange}
     className="input-text" 
     type='password'
     />
     <br/>
     {error && <div>{error}</div>}
        {msg && <div>{msg}</div>} 
     <button className='reg-button' type='submit"'>Sign up</button>
     <div className='reg-p'>
     <p className='reg-agreed'>I have read and agreed to the</p>
     <p className='reg-terms'>Terms of Service</p>
     </div>
     </form>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Register