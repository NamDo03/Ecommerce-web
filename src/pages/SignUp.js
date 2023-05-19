import React, { useState } from 'react';
import '../styles/LogIn.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorEmail('');
    setErrorPassword('');
    try {
      await createUser(email, password);
      navigate('/')
    } catch (e) {
      console.log(e.message);
      switch (e.code) {
        default:
          setErrorEmail('Enter your email.');
          setErrorPassword("Enter your password.");
          break;
        case "auth/invalid-email":
          setErrorEmail('Not a valid email address.');
          break;
        case "auth/weak-password":
          setErrorPassword("Password should be at least 6 characters.");
          break;
        case "auth/missing-password":
          setErrorPassword("Enter your password.");
          break;
        case "auth/email-already-in-use":
          setErrorEmail("This email has been used.")
      }
    }
  };

  return (
    <div className='login'>
      <form
        className='login__container'
        onSubmit={handleSubmit}
      >
        <div className='login__header'>
          <h1>Sign up To Dnam</h1>
          <Link to="/">
            <CloseIcon />
          </Link>
        </div>
        <div className='login__content'>
          <div className='login__email'>
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='Email'
            />
            <p className='error'>{errorEmail}</p>
          </div>
          <div className='login__password'>
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
            />
            <p className='error'>{errorPassword}</p>
          </div>
          <div className='login__btn'>
            <button>Sign up</button>
          </div>
        </div>
        <div className='login__footer'>
          <span>Already a member? <Link to='/login'>Log In</Link></span>
        </div>
      </form>
    </div>
  )
}

export default SignUp