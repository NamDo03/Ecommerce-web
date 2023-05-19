import React, { useState } from 'react';
import '../styles/LogIn.scss';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const LogIn = () => {
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/');
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorEmail('');
        setErrorPassword('');
        try {
            await signIn(email, password);
            navigate('/')
        } catch (e) {
            console.log(e.message);
            switch (e.code) {
                default:
                    setErrorPassword("Invalid email/password combination.");
                    break;
                case "auth/invalid-email":
                    setErrorEmail('Not a valid email address.');
                    setErrorPassword("Enter password.");
                    break;
                case "auth/user-not-found":
                    setErrorEmail('User not found.');
                    break;
                case "auth/missing-password":
                    setErrorPassword("Enter password.");
                    break;
                case "auth/wrong-password":
                    setErrorPassword("Invalid email/password combination.");
                    break;
            }
        }
    };
    return (
        <div className='login'>
            <div className='login__container'>
                <div className='login__header'>
                    <h1>Log In To Dnam</h1>
                    <Link to="/">
                        <CloseIcon />
                    </Link>
                </div>
                <div className='login__content'>
                    <div className='login__gg'>
                        <button onClick={signInWithGoogle}>
                            <GoogleIcon />
                            Log in with google
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='login__or'></div>
                        <div className='login__email'>
                            <label>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
                            <p className='error'>{errorEmail}</p>
                        </div>
                        <div className='login__password'>
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                            <p className='error'>{errorPassword}</p>
                        </div>
                        <div className='login__btn'>
                            <button>Log in</button>
                        </div>
                    </form>
                </div>
                <div className='login__footer'>
                    <span>Not a member yet? <Link to='/signup'>Sign Up</Link></span>
                </div>
            </div>
        </div>
    )
}

export default LogIn