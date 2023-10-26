import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import EmailFailed from '../../pages/EmailFailed';
import './styles.css';

const Verify = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');
  const [digitFive, setDigitFive] = useState('');
  const [digitSix, setDigitSix] = useState('');
  const [email, setEmail] = useState(params.get('email'));
  const handleSubmit = async e => {
    //TODO: look for how u would pass the code down to the function, create a state for the code and pass it down to the function
    e.preventDefault();
    // let code = 1212
    const token =
      digitOne + digitTwo + digitThree + digitFour + digitFive + digitSix;
    await axios
      .post(
        `https://final-year-j646.onrender.com/api/auth/verify-email`,
         { token,  email}
      )
      .then(res => {
        if (res.status === 200) {
          setSuccess(true);
        } else {
          setSuccess(false);
          setErrorMsg(res);
        }
      })
      .catch(err => {
        setErrorMsg(err.response.data.message);
        setSuccess(false);
      });
  };

  React.useEffect(() => {
    if (success) {
      navigate('/success');
    }
  }, [success]);

  return (
    <div className="ver-wrapper">
      <div className="ver-container">
        {!errorMsg ? (
          <div className="lesser">
            <h1 className="ver-p">Kindly enter Email Verification code</h1>
            <p className="ver-parag">
              To Sign up, kindly enter the verification code sent to your email
              address
            </p>
            <br />
            <br />
            <div className="wrap-less">
              <form className="code-form" onSubmit={handleSubmit} method="POST">
                <input
                  className="less-input"
                  type="text"
                  maxLength="1"
                  onChange={e => setDigitOne(e.target.value)}
                />
                <input
                  className="less-input"
                  onChange={e => setDigitTwo(e.target.value)}
                  type="text"
                  maxLength="1"
                />
                <input
                  className="less-input"
                  type="text"
                  maxLength="1"
                  onChange={e => setDigitThree(e.target.value)}
                />
                <input
                  className="less-input"
                  type="text"
                  maxLength="1"
                  onChange={e => setDigitFour(e.target.value)}
                />
                <input
                  className="less-input"
                  type="text"
                  maxLength="1"
                  onChange={e => setDigitFive(e.target.value)}
                />
                <input
                  className="less-input"
                  type="text"
                  maxLength="1"
                  onChange={e => setDigitSix(e.target.value)}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                  <button className='very-butt'>Proceed</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <EmailFailed />
        )}
      </div>
    </div>
  );
};

export default Verify;
