import React from 'react'
import '../styles/Footer.scss';
import { Link, useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='footer'>
            <div className='footer__top'>
                <div className='footer__item'>
                    <Link className='footer__logo' to='/'>DNAM.</Link>
                </div>
                <div className='footer__item'>
                    <h1>About</h1>
                    <span>About DNAM</span>
                    <span>About DNAM Studio</span>
                </div>
                <div className='footer__item'>
                    <h1>Categories</h1>
                    <span onClick={() => navigate(`/products/kb`)}>Keyboards</span>
                    <span onClick={() => navigate(`/products/kc`)}>Keycaps</span>
                    <span onClick={() => navigate(`/products/hp`)}>Headphones</span>
                    <span onClick={() => navigate(`/products/sw`)}>Switches</span>
                    <span onClick={() => navigate(`/products/ac`)}>Accessories</span>

                </div>
                <div className='footer__social'>
                    <h1>Follow DNAM</h1>
                    <FacebookOutlinedIcon fontSize='large' className='footer__icon' />
                    <InstagramIcon fontSize='large' className='footer__icon' />
                    <RedditIcon fontSize='large' className='footer__icon' />
                    <TwitterIcon fontSize='large' className='footer__icon' />
                </div>
                <div className='footer__item'></div>
            </div>
            <div className='footer__bottom'>
                <h4>© 2023 DNAM</h4>
                <span>Terms of Use</span>
                <span>Privacy</span>
            </div>
        </div>
    )
}

export default Footer