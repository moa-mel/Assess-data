import React, {useState} from 'react'
import axios from 'axios'
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import lock from "../../images/Password security icon.png"
import {mail} from 'react-icons-kit/feather/mail'
import {Icon} from "react-icons-kit"

const ResetEmail = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    axios.post(`https://final-year-project-ya34.onrender.com/api/auth/reset-password`,
        {
            email: email,
        })
        .then(res => {
            console.log(res.data)
            if (res.data.success) {
                navigate(`/resetotp/${email}`)
            } else {
                alert('Email / Server Error.')
            }
        }).catch(err => {
            console.log(err)
        })
}

  return (
    <div className='reset-email'>
    <div className='re-contain'>
    <div className='reset-email-contain'>
       <div className='reset-container'>
           <img className='re-img' src={lock} alt=''/>
           <h2 className='re-h2'>Reset Password</h2>
           <p className='re-p'>
           No worries, we got you! Enter your email address and we will <br/>
           send you further instructions on how to reset your password.
           </p>
           <br/>
             <form className='re-form' onSubmit={handleSubmit}>
             <div className='separe-email'>
             <span className='re-span' ><Icon icon={mail} size={15}/></span>
               <input 
               className='re-input'
               type="text"
               value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
               placeholder='Email'/>
               </div>
               <button className='re-button'>
                Reset Password
               </button>
             </form>
       </div>
       </div>
       </div>
    </div>
  )
}

export default ResetEmail