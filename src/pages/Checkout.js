import React, { useState } from 'react';
import '../styles/Checkout.scss';
import Popup from '../components/Popup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const Checkout = () => {
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate();
    const products = useSelector(state => state.cart.products);
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    };
    const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const schema = yup.object().shape({
        firstName: yup.string().required('Enter a first name'),
        lastName: yup.string().required('Enter a last name'),
        address: yup.string().required('Enter an address'),
        phone: yup.string().required('Enter a phone number to use this delivery method').matches(phoneRegExp, 'Phone number need at least 10 numbers'),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        // console.log(data);
        setPopup(true);
    }
    return (
        <div className='checkout'>
            {popup && <Popup setPopup={setPopup} />}
            <h1 className='checkout__title'>Your cart</h1>
            <button onClick={() => navigate(`/products`)} className='checkout__btn'>Continue shopping</button>
            <div className='checkout__wrapper'>
                <form onSubmit={handleSubmit(onSubmit)} className='checkout__left'>
                    <h2>Shipping Address</h2>
                    <div className='checkout__input'>
                        <div className='checkout__name'>
                            <input
                                name='firstName'
                                type='text'
                                className='checkout__firstName'
                                placeholder='First name'
                                {...register('firstName')}
                            />
                            <input
                                name='lastName'
                                type='text'
                                className='checkout__lastName'
                                placeholder='Last name'
                                {...register('lastName')}
                            />

                        </div>
                        <div className='errors'>
                            <p className='error'>{errors.firstName?.message}</p>
                            <p className='error'>{errors.lastName?.message}</p>
                        </div>
                        <input
                            name='address'
                            type='text'
                            className='checkout__address'
                            placeholder='Address'
                            {...register('address')}
                        />
                        <p className='error'>{errors.address?.message}</p>
                        <input
                            name='phone'
                            type='text'
                            className='checkout__phone'
                            placeholder='Phone'
                            {...register('phone')}
                        />
                        <p className='error'>{errors.phone?.message}</p>

                    </div>
                    <button className='checkout__btn'>Order</button>
                </form>
                <div className='checkout__right'>
                    <div className='checkout__items'>
                        {products?.map(item => (
                            <div className='checkout__item' key={item.id}>
                                <img src={item.img} alt='' />
                                <div className='checkout__details'>
                                    <h1>{item.title}</h1>
                                    <div className='checkout__price'>${(item.price * item.quantity).toFixed(2)}</div>
                                    <span>{item.quantity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='checkout__total'>
                        <span>Subtotal</span>
                        <span>${totalPrice()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout