import React from 'react';
import '../styles/Newsletter.scss';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Newsletter</h1>
            <div className='newsletter__desc'>Get timely updates from your favorite products.</div>
            <div className='newsletter__input'>
                <input placeholder='Your email' />
                <button>
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default Newsletter