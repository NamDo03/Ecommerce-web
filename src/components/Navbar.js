import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = UserAuth();
    const [mobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const products = useSelector(state => state.cart.products);
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('log out')
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <div className='navbar'>
            <div className='navbar__wrapper'>
                <button className='navbar__mobile' onClick={() => setMobile(!mobile)}>
                    {mobile ? <CloseIcon /> : <MenuIcon />}
                </button>
                <div className='navbar__left'>
                    <div className='navbar__logo'>
                        <Link to='/'>DNAM.</Link>
                    </div>
                    <div className='navbar__menu' id={mobile ? 'mobile' : ''}>
                        <div className='navbar__item'>
                            <Link
                                onClick={() => setMobile(false)}
                                to='/'
                                className='link'
                            >
                                Home
                            </Link>
                        </div>
                        <div className='navbar__item'>
                            <Link
                                onClick={() => setMobile(false)}
                                to='/products'
                                className='link'
                            >
                                shop
                            </Link>
                        </div>
                        <div className='navbar__item'>
                            <Link
                                onClick={() => setMobile(false)}
                                to='/about'
                                className='link'
                            >
                                about
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='navbar__right'>
                    <div className='navbar__searchIcon' onClick={() => setShowSearch(true)}><SearchIcon /></div>
                    <div className='navbar__cart' onClick={() => setOpen(true)}>
                        <ShoppingCartIcon />
                        <span>{products.length}</span>
                    </div>
                    {!user && <>
                        <div className='navbar__login'>
                            <Link to='/login' className='link'>log in</Link>
                        </div>
                        <div className='navbar__signup'>
                            <Link to='/signup' className='link'>sign up</Link>
                        </div>
                    </>}
                    {user && <div className='navbar__user' onClick={() => setDropdown(!dropdown)}>
                        <AccountCircleOutlinedIcon />
                    </div>}
                </div>
            </div>
            {showSearch && <Search setShowSearch={setShowSearch} />}

            {open && <Cart setOpen={setOpen} />}

            {dropdown && (<div className='dropdown'>
                <h3>{user && user.email}</h3>
                <ul className='dropdown__menu' onClick={() => setDropdown(false)}>
                    <li>Profile</li>
                    <li onClick={handleLogout}>Log out</li>
                </ul>
            </div>
            )
            }
        </div >
    )
}

export default Navbar