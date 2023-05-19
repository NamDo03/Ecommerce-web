import React, { useState } from 'react';
import '../styles/Product.scss';
import { useParams } from "react-router-dom";
import { Products } from '../data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const Product = () => {
    const { id } = useParams();

    const data = Products.find((data) => {
        return data.id === parseInt(id);
    });

    const [selectImg, setSelectImg] = useState(data.img);
    const [quantity, setQuantity] = useState(1);

    const dispatch=useDispatch();

    return (
        <div className='product'>
            <div className='product__left'>
                <div className='product__images'>
                    <img className={selectImg === data.img ? 'selected' : ''} src={data.img} alt='' onClick={e => setSelectImg(data.img)} />
                    <img className={selectImg === data.img2 ? 'selected' : ''} src={data.img2} alt='' onClick={e => setSelectImg(data.img2)} />
                    <img className={selectImg === data.img3 ? 'selected' : ''} src={data.img3} alt='' onClick={e => setSelectImg(data.img3)} />
                    <img className={selectImg === data.img4 ? 'selected' : ''} src={data.img4} alt='' onClick={e => setSelectImg(data.img4)} />
                </div>
                <div className='product__mainImg'>
                    <img src={selectImg} alt='' />
                </div>
            </div>
            <div className='product__right'>
                <h1>{data.title}</h1>
                <span className='product__price'>${data.price}</span>
                <div className='product__quantity'>
                    <span onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}> - </span>
                    <span>{quantity}</span>
                    <span onClick={() => setQuantity(prev => prev + 1)}> + </span>
                </div>
                <button className='product__add' onClick={() => dispatch(addToCart({
                    id:data.id,
                    title:data.title,
                    price:data.price,
                    img:data.img,
                    quantity
                }))}>add to cart</button>
            </div>
        </div>
    )
}

export default Product