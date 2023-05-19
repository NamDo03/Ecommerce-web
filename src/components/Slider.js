import React, { useState } from 'react';
import '../styles/Slider.scss';
import { sliderItems } from '../data';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useNavigate } from 'react-router-dom';

const Slider = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className='slider__bg'></div>

            <div className='slider__img'>
                <div className="slider__containerImg" style={{ transform: `translateX(-${currentSlide * 80}vw)` }}>
                    {sliderItems.map((item) => (
                        <img
                            key={item.id}
                            id={item.id}
                            src={item.img}
                            alt=""
                            onClick={() => navigate(`/product/${item.id}`)}
                        />
                    ))}
                </div>
            </div>

            <div className='slider__info'>
                <div className='slider__containerInfo' style={{ transform: `translateX(-${currentSlide * 410}px)` }}>
                    {sliderItems.map((item) => (
                        <div className='slider__item' key={item.id}>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                            <Link className='btn' to={`/product/${item.id}`}><span>Shop now</span></Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider__icons">
                <div className="slider__icon" onClick={prevSlide}>
                    <ArrowBackIcon />
                </div>
                <div className="slider__icon" onClick={nextSlide}>
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider