import React from 'react';
import '../styles/Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCart, increaseQuantity, decreaseQuantity } from '../redux/cartReducer';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Cart = ({ setOpen }) => {
    const navigate = useNavigate();
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    };
    return (
        <div className='cart'>
            <div className='cart__layer' onClick={() => setOpen(false)}></div>
            <div className='cart__container'>
                <div className='cart__header'>
                    <h1>Your cart </h1>
                    <span className='cart__close' onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </span>
                </div>

                {!products?.length && <div className='cart__empty'>
                    <AddShoppingCartIcon />
                    <span>No products in cart.</span>
                    <button
                        className='cart__return'
                        onClick={() => {
                            navigate('/products');
                            setOpen(false);
                        }}
                    >
                        Return to shop
                    </button>
                </div>}

                {!!products?.length && <>
                    <div className='cart__items'>
                        {products?.map(item => (
                            <div className='cart__item' key={item.id}>
                                <img src={item.img} alt='' />
                                <div className='cart__details'>
                                    <h1>{item.title}</h1>
                                    <div className='cart__quantity'>
                                        <span onClick={() => dispatch(decreaseQuantity(item.id))}> - </span>
                                        <span>{item.quantity}</span>
                                        <span onClick={() => dispatch(increaseQuantity(item.id))}> + </span>
                                    </div>
                                    <div className='cart__price'>{item.quantity} x ${item.price}</div>
                                </div>
                                <DeleteOutlinedIcon className='cart__delete' onClick={() => dispatch(removeItem(item.id))} />
                            </div>
                        ))}
                    </div>
                    <div className='cart__total'>
                        <span>Subtotal</span>
                        <span>${totalPrice()}</span>
                    </div>
                    <button className='cart__checkout' onClick={() => {navigate(`/checkout`);setOpen(false)}}>Checkout</button>
                    <span className='cart__reset' onClick={() => dispatch(resetCart())}>Reset</span>
                </>}

            </div>

        </div>
    )
}

export default Cart