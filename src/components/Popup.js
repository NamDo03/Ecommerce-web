import React from 'react';
import '../styles/Popup.scss';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { resetCart } from '../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Popup = ({ setPopup }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='popup'>
            <div className='popup__bg'></div>
            <div className='popup__card'>
                <div className='popup__close' onClick={() => setPopup(false)}>
                    <CloseIcon />
                </div>
                <div className='popup__check'>
                    <CheckIcon />
                </div>
                <h1>Success</h1>
                <p>Your order will be shipped soon!!</p>
                <button
                    onClick={() => {
                        setPopup(false);
                        dispatch(resetCart());
                        navigate(`/`);
                    }}
                >
                    OK
                </button>
            </div>
        </div>
    )
}

export default Popup