import React from 'react';
import '../styles/Categories.scss';
import slider3 from '../images/slider/slider3.jpg';
import ca1 from '../images/categories/ca1.jpg';
import ca2 from '../images/categories/ca2.jpg';
import ca3 from '../images/categories/ca3.jpg';
import ca4 from '../images/categories/ca4.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categories'>
            <div className='categories__top'>
                <div className='item'>
                    <img src={slider3} alt='' />
                    <div className='item__info'>
                        <h1>Keycaps</h1>
                        <button>
                            <Link to="/products/kc" className="link">
                                Shop now
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='item'>
                    <img src={ca1} alt='' />
                    <div className='item__info'>
                        <h1>Keyboards</h1>
                        <button>
                            <Link to="/products/kb" className="link">
                                Shop now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='categories__bottom'>
                <div className='item'>
                    <img src={ca2} alt='' />
                    <div className='item__info'>
                        <h1>Headphones</h1>
                        <button>
                            <Link to="/products/hp" className="link">
                                Shop now
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='item'>
                    <img src={ca3} alt='' />
                    <div className='item__info'>
                        <h1>Switches</h1>
                        <button>
                            <Link to="/products/sw" className="link">
                                Shop now
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='item'>
                    <img src={ca4} alt='' />
                    <div className='item__info'>
                        <h1>Accessories</h1>
                        <button><Link to="/products/ac" className="link">
                            Shop now
                        </Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories