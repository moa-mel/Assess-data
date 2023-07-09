import React, {useState,useEffect}  from 'react'
import "./styles.css"
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmailFailed from "../../pages/EmailFailed"

const Verify = () => {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const param = useParams();
 
  const [errorMsg, setErrorMsg] = useState(false) 

    
  const handleSubmit = async code => {
    await axios
      .post(`https://final-year-project-ya34.onrender.com/api/auth/verify-email`, { code })
      .then(res => {
        if (res.status === 200) {
          setSuccess(true)
          /*navigate("/success")*/
        } else {
          setSuccess(false)
          setErrorMsg(res)
        }
      })
      .catch(err => {
        setErrorMsg(err.response.data.message)
        setSuccess(false)
      })
  } 
  React.useEffect(() => {
    if(success){
    navigate('/success')
 }
  },[success])
 /* useEffect(() => {
        const verifyEmailUrl = async() => {
          try{
            const url =`https://final-year-project-ya34.onrender.com/api/auth/${param.id}/verify-email`
            const {data} = await axios.get(url)
            console.log(data)
            setSuccess(true)
          } catch(error) {
            console.log(error)
            setSuccess(false)
          }
        }
        verifyEmailUrl();
  }, [param]) */

  /*const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://final-year-project-ya34.onrender.com/api/auth/${param.id}/verify-email";
			const{ data} = await axios.get(url);
		setMsg(res.message); 
    navigate("/success")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	}; */


  return (
    <div className='wrapper'>
    {success : (
      <div className='container'>
      <div className='lesser'>
      <h1>Kindly enter Email Verification code</h1>
     <p className='ver-parag'>To Sign up, kindly enter the verification code sent to your email address</p>
     <br/>
       <br/>
       <br/>
        
       <div className='wrap-less'>
       <form className="code-form" onSubmit={handleSubmit} >
         <input className='less-input'
          type="text"
           maxlenght="1"
          
           />
         <input className='less-input' 
        
         type="text" 
         maxlenght="1"/>
         <input 
         className='less-input'
          type="text"
           maxlenght="1"
          
           />
         <input 
         className='less-input'
          type="text" 
          maxlenght="1"
          
          />
         <input 
         className='less-input' 
         type="text" 
         maxlenght="1"
         
         />
         <input 
         className='less-input' 
         type="text" 
         maxlenght="1"
         />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
         <div>
    ):(
         <button>Proceed</button>
          
          
         </div>
         </form>
         </div>
         )}
        </div>
      
      </div>
   
      <EmailFailed/>
   
    </div>
  )
}

export default Verify