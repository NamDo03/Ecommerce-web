import React from 'react';
import '../styles/NotFound.scss';
import notfound from '../images/pagenotfound.jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='notfound'>
            <img src={notfound} alt=''/>
            <h1>The page you were looking for could not be found.</h1>
            <button onClick={() => navigate('/')}>Return Home</button>
        </div>
    )
}

export default NotFound