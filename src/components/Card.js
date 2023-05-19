import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.scss';

const Card = ({ item }) => {
  return (
    <Link className='card' to={`/product/${item.id}`} >
      <div className='card__container'>
        <div className='card__img'>
          {item.isNew && <span>new arrival</span>}
          <img src={item.img} alt='' />
        </div>
        <div className='card__info'>
          <h2>{item.title}</h2>
          <div className='card__price'>
            <h3>${item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card